import { useState } from "react";

function Team (){
    const [player, setPlayer] = useState(11)
    const handleAddPlayer = () =>{
        const newPlayer = player + 1;
        setPlayer(newPlayer);
    }
    const handleRemovePlayer = () =>{
        setPlayer(player - 1);
    }
    const teamStyle = {
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px',
        backgroundColor: 'lightgrey',
        color:'black'

    }
    return(
        <div style={teamStyle}>
            <h1>Players: {player} </h1>
            <button onClick={handleAddPlayer}>Add Player</button>
            <br />
            <br />
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}

export default Team;