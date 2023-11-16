import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ seletedFriend, handleSplitBill }) {
const [bill, setBill] = useState("");
const [paidByUser, setPaidByUser] = useState("");
const paidByFriend = bill ? bill - paidByUser : "";
const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();

        if(!bill || !paidByUser) return;

        handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {seletedFriend.name}</h2>

            <label>💰 Bill Amount</label>
            <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

            <label>🧍🏻 Your expenses</label>
            <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

            <label>🧍🏻‍♂️ {seletedFriend.name}'s expenses</label>
            <input type="text" value={paidByFriend} disabled/>

            <label>🤑 Who is paying bill ?</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">Friend</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}

export default FormSplitBill;