import { useState } from "react";

import BillAmount from "./BillAmount";
import YouTip from "./YouTip";
import YourFndTip from "./YourFndTip";

function App () {
  
  const [amt, setAmt] = useState("");
  const [youTip, setYouTip] = useState(0);
  const [yourFndTip, setYourFndTip] = useState(0);

  let billAmount = amt;
  let tip = 0;

  if(youTip === 2) tip = tip + Math.round(amt * 0.10);
  if(youTip === 3) tip = tip + Math.round(amt * 0.20);

  if(yourFndTip === 2) tip = tip + Math.round(amt * 0.10);
  if(yourFndTip === 3) tip = tip + Math.round(amt * 0.20);

  function handleReset() {
    setAmt("");
    setYouTip(0);
    setYourFndTip(0);
  }

  return (
    <div>
      <BillAmount amt={amt} setAmt={setAmt} />
      <YouTip youTip={youTip} setYouTip={setYouTip} />
      <YourFndTip yourFndTip={yourFndTip} setYourFndTip={setYourFndTip} />

      { amt > 0 ? 
        <>
          <p>{ `You pay ${billAmount + tip} ( ${billAmount} + ${tip} )` }</p>
          <button onClick={handleReset}>Reset</button>
        </> :
        <></>
      }
    </div>
  );
}

export default App;