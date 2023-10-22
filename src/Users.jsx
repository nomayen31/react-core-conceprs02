import { useEffect } from "react";
import { useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))

    },[])

    console.log(users);
    return(
        <div>
                <h2>Users: {users.length}</h2>
        </div>
    )
}
export default Users;