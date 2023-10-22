function Friend ({friend}){
    const {id, name, email,username ,address} = friend
    console.log(friend);
    return(
            <div className="box">
                <h4>Name:{name} </h4>
                <h4>Email:{email} </h4>
                <h4>ID:{id} </h4>
                <h4>userName: {username} </h4>
                <p>city: {address.city}</p>

            </div>
    )
}
export default Friend