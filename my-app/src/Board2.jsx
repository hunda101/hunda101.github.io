import React, { useContext } from 'react';


import chancecardss from './img/chance-cards.png';

import dice1 from "./img/dice1.png"
import dice2 from "./img/dice2.png"
import dice3 from "./img/dice3.png"
import dice4 from "./img/dice4.png"
import dice5 from "./img/dice5.png"
import dice6 from "./img/dice6.png"
import { BoardContext } from './BoardContext';
import imageCenter from "./img/Center.png";
import "./style/BoardStyle.css";


export const Board2 = () => {
  const boardState = useContext(BoardContext);
  const arrayShuffle = (inputArray) => {
    const outputArray = inputArray.slice();

    outputArray.sort((a, b) => {
      const random = Math.random();
      if (random < 0.5) return -1;
      if (random > 0.5) return 1;

      return 0;
    })

    return outputArray;
  }
  const steps = boardState.dices[0] + boardState.dices[1]

  const showInfo = (idx, arrIdx, sum) => {


    const gameCard = boardState.gameCards[arrIdx][idx];
    if (gameCard.type === 'property') {
      const property = boardState.properties.find(p => idx + sum === p.position);
      alert(`${property.name} costs $${property.price}`);
    }
    else if (gameCard.type === 'Chestcard') {
      const chestCard = boardState.chestCards.shift();
      alert(chestCard.name);
      boardState.chestCards.push(chestCard)
    } else if (gameCard.type === 'Chancecard') {
      const chanceCard = boardState.chanceCards.shift();
      alert(chanceCard.name);
      boardState.chanceCards.push(chanceCard)
    }
    else if (gameCard.type === 'Visiting') {
      alert("You visiting the jail")
    }
  }


  const getPropertiesForPlayer1 = (playerIdx) => {
    const propertyIdxs = boardState.playersProperties[playerIdx];

    // if property.position contains in propertyIdxs
    return boardState.properties.filter(p => propertyIdxs.includes(p.position));
  }

  const property = boardState.properties.find(p => p.position === boardState.player.curPos);
  const dice = [{ value: 0 }, { name: dice1, value: 1 }, { name: dice2, value: 2 }, { name: dice3, value: 3 }, { name: dice4, value: 4 }, { name: dice5, value: 5 }, { name: dice6, value: 6 }]
  const rollDiced1 = dice.find(d => boardState.dices[0] === d.value);
  const rollDiced2 = dice.find(d => boardState.dices[1] === d.value);
  console.log(boardState.players);

  return (<div className="board-wrapper">
    <div className="board">

      <div className="bottom">
        {boardState.gameCards[0].map((gc, idx) => {

          return <img style={gc.styles} id={gc.pos} src={gc.imgSrc} className={

            gc.type === 'visiting' ? "go" : 'image'


          } onClick={() => {
            console.log(idx)
            showInfo(idx, 0, 0)
          }} />;
        })}

      </div>

      <div className="top">
        {boardState.gameCards[2].map((gc, idx) => {
          return <img style={gc.styles} id={gc.pos} src={gc.imgSrc} className={

            gc.type === 'visiting' ? "go" : 'image'


          } onClick={() => {

            showInfo(idx, 2, boardState.gameCards[0].length + boardState.gameCards[1].length)
          }} />;
        })}
      </div>

      <div className="left">
        {boardState.gameCards[1].map((gc, idx) => {
          return <img style={gc.styles} id={gc.pos} src={gc.imgSrc} className={

            'image-side'


          } onClick={() => {
            console.log(idx)
            showInfo(idx, 1, boardState.gameCards[0].length)
          }} />;
        })}

      </div>

      <div className="right">
        {boardState.gameCards[3].map((gc, idx) => {
          return <img style={gc.styles} id={gc.pos} src={gc.imgSrc} className={

            'image-side'


          } onClick={() => showInfo(idx, 3, boardState.gameCards[0].length + boardState.gameCards[1].length + boardState.gameCards[2].length)} />;
        })}
      </div>
      <div >
        <img className="central-box" src={imageCenter} alt="" />
      </div>
      <div className="container">
        {boardState.players.map((p) => {

          return <img className="figure" src={p.colorSrc} alt="" style={p.styles} />

        })}


      </div>
      <div className='dice'>
        <img src={rollDiced1.name} alt="" />
        <img src={rollDiced2.name} alt="" />
      </div>
    </div>





    <div className="chest-cards cards">

      {boardState.showDeclineBuyButton && <button onClick={boardState.declineProperty}>Next move</button>}

      {boardState.showBuyButton && <button
        onClick={boardState.buyProperty}>
        Buy! {boardState.gameCardsFlatted[boardState.player.curPos].name}
      </button>}
      {boardState.showHotelBuyButton && <button onClick={boardState.buyHotel}>Buy Hotel</button>}
      {boardState.showPayRent && <button onClick={boardState.payRent}>pay rent {property.rent} $</button>}
      {boardState.players.map((player, idx) => {
        const isPlayerActive = boardState.currentPlayerIdx === idx;


        return <li className={isPlayerActive ? player.color : ''}>
          {player.name + " position is " + player.curPos + " bank account " + player.cash}
          <ul>


            {getPropertiesForPlayer1(idx).map(property => {
              return <li>{`name:${property.name} number of hotel: ${property.numOfHotels}`}</li>
            })}
          </ul>

        </li>
      })}
      
      
      

      <button onClick={() => boardState.moveCurrentPlayer(steps)}>Move</button>
      <br />

    </div>



    {/* boardState.setChestCards(arrayShuffle(boardState.chestCards)); boardState.setChanceCards(arrayShuffle(boardState.chanceCards)) */}









  </div>);

}
