import { useState } from "react";
import Item from "./Item";

function PackingList({ items, handleDeleteItems, handleToggleItem, handleClearList }) {
	const [sortBy, setSortBy] = useState("input");
	let sortedArray;

	if (sortBy === "input")
		sortedArray = items;
	if (sortBy === "packed")
		sortedArray = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedArray.map((item) => <Item item={item} key={item.id} handleDeleteItems={handleDeleteItems} handleToggleItem={handleToggleItem} />)}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort By Input Order</option>
					<option value="packed">Sort By Packed</option>
				</select>
				<button onClick={handleClearList}>Clear list</button>
			</div>
		</div>
	);
}

export default PackingList;