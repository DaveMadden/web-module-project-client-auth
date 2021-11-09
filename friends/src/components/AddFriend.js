import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = (props) => {

    const [newFriend, setNewFriend] = useState({});

    useEffect(()=>{
        axiosWithAuth()
            .get('/friends')
            .then(resp=>{
                console.log(resp.data);
                
            })
            .catch (err=> {
                console.error(err);
            })
    }, [])

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted new friend: ", newFriend)

        axiosWithAuth()
            .post('/friends', newFriend)
            .then(resp=>{
                console.log(resp.data)
            })
            .catch(err=>{
                console.error(err);
            })
            .finally(setNewFriend({}))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={newFriend.name}
                onChange={handleChange}
                placeholder="first and last names"
            />
            <input
                type="text"
                name="age"
                value={newFriend.age}
                onChange={handleChange}
                placeholder="age"
            />
            <input
                type="text"
                name="email"
                value={newFriend.email}
                onChange={handleChange}
                placeholder="email address"
            />
            <button>add new friend</button>
        </form>
        
    );
}

export default AddFriend;