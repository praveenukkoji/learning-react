import Friend from "./Friend";

function FriendList({ friends, handleSeletedFriend, seletedFriend }) {
    return (
        <ul>
            { friends.map((friend) => 
                <Friend friend={friend} key={friend.id} seletedFriend={seletedFriend} handleSeletedFriend={handleSeletedFriend} />
            )}
        </ul>
    );
}

export default FriendList;