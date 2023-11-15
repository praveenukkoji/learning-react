function Item({ item, handleDeleteItems, handleToggleItem }) {
	return (
		<li>
			<input type="checkbox" value={item.packed} onChange={() => { handleToggleItem(item.id); }} />
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.qty} {item.desc}
			</span>
			<button onClick={() => handleDeleteItems(item.id)}>❌</button>
		</li>
	);
}

export default Item;