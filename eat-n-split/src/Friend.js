import Button from "./Button";

function Friend({ friend, handleSeletedFriend, seletedFriend }) {
    const isSelected = seletedFriend?.id === friend.id;
    // const isSelected = false;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            { friend.balance < 0 && <p className="red">You owe {friend.name} ₹{Math.abs(friend.balance)}</p>}

            { friend.balance > 0 && <p className="green">{friend.name} owes you ₹{Math.abs(friend.balance)}</p>}

            { friend.balance === 0 && <p>You and {friend.name} are even</p>}

            <Button onClick={() => handleSeletedFriend(friend)}>
                {
                    isSelected ? "Close" : "Select"
                }
            </Button>
        </li>
    );
}

export default Friend;