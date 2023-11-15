function YourFndTip({ yourFndTip, setYourFndTip }) {
    return (
        <div>
            <p>How much your friend like to tip</p>
            <select value={yourFndTip} onChange={(e) => setYourFndTip(Number(e.target.value))}>
                <option value="0">select...</option>
                <option value="1">ok 0%</option>
                <option value="2">good 10%</option>
                <option value="3">amazing 20%</option>
            </select>
        </div>
    );
}

export default YourFndTip;