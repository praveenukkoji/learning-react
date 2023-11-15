function BillAmount({ amt, setAmt }) {
    return (
        <div>
            <p>How much was the bill</p>
            <input type="text" placeholder="0" value={amt} onChange={(e) => setAmt(Number(e.target.value))} />
        </div>
    );
}

export default BillAmount;