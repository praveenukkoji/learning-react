import FriendList from "./FriendList";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [seletedFriend, setSeletedFriend] = useState(null);

  function handleOnClick() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleOnClick(false);
  }

  function handleSeletedFriend(friend) {
    setSeletedFriend((cur) =>  cur?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) => 
      friends.map((friend) => 
        friend.id === seletedFriend.id 
        ? {...friend, balance: friend.balance + value} : friend 
      )
    );

    setSeletedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList initialFriends={initialFriends} friends={friends} seletedFriend={seletedFriend} handleSeletedFriend={handleSeletedFriend} />
        {showAddFriend && <FormAddFriend initialFriends={initialFriends} handleAddFriend={handleAddFriend} handleOnClick={handleOnClick} />}
        <Button onClick={handleOnClick}>
          {showAddFriend ? "Close": "Add Friend"}
        </Button>
      </div>

      {seletedFriend && <FormSplitBill seletedFriend={seletedFriend} handleSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;