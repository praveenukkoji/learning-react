import { useState } from "react";

function Form({ handleAddItems }) {
	const [desc, setDesc] = useState("");
	const [qty, setQty] = useState(1);

	function handeSubmit(e) {
		e.preventDefault();

		if(desc === ""){
			alert("Invalid Desc.");
			return;
		}

		const newItem = {desc, qty, packed: false, id: Date.now()};
		handleAddItems(newItem);
		
		setDesc("");
		setQty(1);
	}

	return (
		<form className="add-form" onSubmit={handeSubmit}>
			<h3>What do you need for your trip ?</h3>
			<select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
				{Array.from(
					{ length: 20 }, (_, i) => i + 1).map((num) => 
					<option value={num} key={num}>{num}</option>
				)}
			</select>
			<input type="text" placeholder="Item ..." value={desc} 
				onChange={(e) => setDesc(e.target.value)}/>
			<button>Add</button>
		</form>
	)
}

export default Form;