import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ handleAddFriend }) {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e){
        e.preventDefault();

        if(!name || !url) return;

        const newFriend = {id: crypto.randomUUID(), name: name, balance: 0, image: url};

        handleAddFriend(newFriend);

        setName("");
        setUrl("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧍🏻‍♂️Friend Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>🌄 Image Url</label>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}/>

            <Button>Add</Button>
        </form>
    );
}

export default FormAddFriend;