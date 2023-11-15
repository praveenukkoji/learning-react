import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: true },
// 	{ id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(newItem){
		setItems([...items, newItem]);
	}

	function handleDeleteItems(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
	}

	function handleClearList() {
		const confirmed = window.confirm("Are you sure you want to delete all items ?");

		if(confirmed)
			setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form handleAddItems={handleAddItems} />
			<PackingList items={items} handleDeleteItems={handleDeleteItems} handleToggleItem={handleToggleItem} handleClearList={handleClearList} />
			<Stats items={items} />
		</div>
	);
}

export default App;