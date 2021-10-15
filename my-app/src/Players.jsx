import React, { useContext } from 'react';
import './App.css';
import { useState } from 'react';
import { BoardContext } from './BoardContext';
import { Link } from "react-router-dom";



function Players() {
  const [players, setPlayers] = useState([]);
  const boardState = useContext(BoardContext);
  const changedPlayers = boardState.players.slice();

  const changePlayerName = () => {
    if (players.length !== 0) {

      for (let i = 0; i < changedPlayers.length; i++) {
        for (let j = 0; j < players.length; j++) {
          changedPlayers[j].name = players[j].name

        }

      }
      console.log(changedPlayers);
      console.log(boardState.players);
      boardState.setPlayers(changedPlayers);
    }

  }


  return (
    <div>
      <p>players</p>

      {players.map(player =>
        <Player player={player} />
      )}
      <NewPlayer addPlayer={(newPlayer) => setPlayers([...players, newPlayer])} />
      <Link to="/board" >Play game</Link>
      
      <button className="btn btn-primary start-game-button" onClick={changePlayerName}>Click</button>
    </div>
  );
}

function Player({ player }) {
  return <div>
    <input value={player.name} disabled />
    <select value={player.color} disabled>
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="yellow">yellow</option>
      <option value="pink">pink</option>
      <option value="white">white</option>
      <option value="black">black</option>
    </select>
  </div>;
}


function NewPlayer({ addPlayer }) {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    color: 'red'
  })

  const onAddPlayer = () => {
    addPlayer(newPlayer);
    setNewPlayer({ name: '', color: 'red' })
  }
  return <>
    <input value={newPlayer.name} onChange={e => setNewPlayer({ ...newPlayer, name: e.target.value })} />
    <select value={newPlayer.color} onChange={e => setNewPlayer({ ...newPlayer, color: e.target.value })} >
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="yellow">yellow</option>
      <option value="pink">pink</option>
      <option value="white">white</option>
      <option value="black">black</option>
    </select>
    <button onClick={onAddPlayer}>add</button>
  </>;
}
export default Players