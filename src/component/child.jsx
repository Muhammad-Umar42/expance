import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContex";

const Expence = () => {
    let { transaction, addtransation, dltTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState("");

    const handleAdition = (event) => {
        event.preventDefault();
        // console.log(newDesc, newAmount);
        addtransation({
            desc: newDesc,
            Amount: +newAmount,
            id: Math.floor(Math.random() * 1000000)
        });
        setDesc("")
        setAmount('')
    };

    const getIncome = () => {
        let income = 0;
        for (let i = 0; i < transaction.length; i++) {
            if (transaction[i].Amount > 0) income += transaction[i].Amount;
        }
        return income;
    };

    const getexpance = () => {
        let expance = 0;
        for (let i = 0; i < transaction.length; i++) {
            if (transaction[i].Amount < 0) expance += transaction[i].Amount;
        }
        return expance;
    };

    // const close = document.querySelectorAll('span')
    // for (let i = 0; i < close.length; i++) {
    //     close[i].addEventListener('click', () => {
    //         close[i].parentElement.style.opacity = 0;
    //         setTimeout(() => {
    //             close[i].parentElement.style.display = 'none';

    //         }, 500);
    //     })
    // }

    return (
        <div className=" max-w-[400px] min-h-[450px] shadow-md mx-auto m-14 bg-slate-200 py-10 px-10 font-bold">
            <h1 className="text-center text-2xl">Expence Traker by UmR</h1>
            <h3 className="text-center my-4 text-lg">
                Current Balance <br /> ${getIncome() + getexpance()}
            </h3>

            <div className="expanse_container flex justify-around bg-white shadow-md p-2">
                <h3>
                    INCOME <br /> ${getIncome()}
                </h3>
                <h3>
                    EXPANCE <br /> ${getexpance()}
                </h3>
            </div>

            <h3 className="border-b-[1px] border-solid border-black mt-10">
                Transaction History
            </h3>
            <ul>
                {transaction.map((transobj, index) => {
                    return (
                        <li
                            key={index}
                            className="hover:bg-[#b6960a] border-r-4 border-solid border-[#b6960a] flex justify-between px-2 mt-3 bg-white shadow-md py-2"
                        >
                            <span>{transobj.desc}</span>
                            <span>${transobj.Amount}</span>
                            <button onClick={(evt) => dltTransaction(transobj.id)}>X  </button>

                        </li>

                    );

                })}
            </ul>

            <h3 className="border-b-[1px] border-solid border-black mt-10">
                Add New Transaction
            </h3>

            <form onSubmit={handleAdition} action="#" >
                <label className="block py-2">Description</label>
                <input
                    value={newDesc}
                    type="text"
                    className="px-14"
                    onChange={(ev) => setDesc(ev.target.value)}
                    required
                />
                <label className="block py-2">Transaction Amount</label>
                <input
                    value={newAmount}
                    type="number"
                    className="px-14"
                    onChange={(ev) => setAmount(ev.target.value)}
                    placeholder="value in $"
                    required
                />

                {/* BUTTON */}
                <button
                    type="submit"
                    className="mt-4 relative inline-block px-28 overflow-hidden border border-black group focus:outline-none focus:ring"
                    href="/download"
                >
                    <span className="absolute inset-x-0 bottom-0 h-[2px] transition-all bg-black group-hover:h-full group-active:bg-black"></span>

                    <span className="relative text-sm font-medium text-black transition-colors group-hover:text-slate-200 ">
                        Add Transaction
                    </span>
                </button>
                {/* BUTTON */}
            </form>
        </div>
    );
};

export default Expence;
