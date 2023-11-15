function Stats({ items }) {
	if (!items.length)
		return (
			<footer className="stats">
				<em>Start adding items to list 🚀.</em>
			</footer>
		);

	const numItems = items.length;
	const pacItems = items.filter((item) => item.packed).length;
	const per = Math.round(pacItems / numItems * 100);
	return (
		<footer className="stats">
			<em>
				{per === 100 ? "You got everything packed Ready to go ✈️" :
					`You have ${numItems} items on your list, and you already packed ${pacItems} (${per}%)`}
			</em>
		</footer>
	);
}

export default Stats;
