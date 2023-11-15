function YouTip({ youTip, setYouTip }) {
    return (
        <div>
            <p>How much you like to tip</p>
            <select value={youTip} onChange={(e) => setYouTip(Number(e.target.value))}>
                <option value="0">select...</option>
                <option value="1">ok 0%</option>
                <option value="2">good 10%</option>
                <option value="3">amazing 20%</option>
            </select>
        </div>
    );
}

export default YouTip;