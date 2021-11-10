import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import AddFriend from "./AddFriend";

const FriendsList = (props) => {

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
            .get('/friends')
            .then(resp=>{
                setFriends(resp.data) //do we need a spread here? doesn't seem like it?
            })
            .catch (err=> {
                console.error(err);
            })
    }, [])

    return(
        <div>
            <AddFriend setFriends={setFriends}/>
            <ul>
                {friends.map(element => <li key={element.id}>{element.name} - age: {element.age} - email: {element.email}</li>)}
            </ul>
        </div>
    );
}

export default FriendsList;