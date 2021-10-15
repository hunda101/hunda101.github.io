import React, { useState } from 'react';
import { Dice } from './rollDice';
import figureRed from "./img/figures/figureRed.png";
import figureBlue from "./img/figures/figureBlue.png";
import figureGreen from "./img/figures/figureGreen.png";
import figureOrange from "./img/figures/figureOrange.png";
import image1 from "./img/1.png";
import image10 from "./img/10.png";
import image11 from "./img/11.png";
import image12 from "./img/12.png";
import image13 from "./img/13.png";
import image14 from "./img/14.png";
import image15 from "./img/15.png";
import image16 from "./img/16.png";
import image17 from "./img/17.png";
import image18 from "./img/18.png";
import image19 from "./img/19.png";
import image2 from "./img/2.png";
import image20 from "./img/20.png";
import image21 from "./img/21.png";
import image22 from "./img/22.png";
import image23 from "./img/23.png";
import image3 from "./img/3.png";
import image4 from "./img/4.png";
import image5 from "./img/5.png";
import image6 from "./img/6.png";
import image7 from "./img/7.png";
import image8 from "./img/8.png";
import image9 from "./img/9.png";

import imageChance from "./img/Chance.png";
import imageChance1 from "./img/Chance1.png";
import imageCommunityChest from "./img/Community chest.png";
import imageElectric from "./img/Electric company.png";
import freePacking from "./img/Free Parking.png";
import go from "./img/Go.png";
import imageTax from "./img/Income Tax.png";
import imageRailPensylvania from "./img/Pennsylvania railroad.png";
import railroadTop from "./img/R & O Railroad.png";
import imageRail from "./img/Reading Railroad.png";
import shortLine from "./img/Short line.png";
import start from "./img/Start.png";
import visiting from "./img/Visiting.png";
import water from "./img/Water.png";
import { property } from 'lodash';
export const BoardContext = React.createContext({});

const App = ({ children }) => {
  return <h1>Hello world {children}</h1>;
}

export const Root = () => {
  return <App>from Beautiful Colorado</App>;
}


export const BoardProvider = ({ children }) => {
  const [dices, setDices] = useState([Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1)]);

  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [showBuyButton, setShowBuyButton] = useState(
    false
  );
  const [showHotelBuyButton, setShowHotelBuyButton] = useState(false);
  const [showDeclineBuyButton, setShowDeclineBuyButton] = useState(false);
  const [showPayRent, setShowPayRent] = useState(false);
  const [chestCards, setChestCards] = useState([{
    name: 'Advance to Go.',
    collect: 200,
    curPos: 0
  }, {
    name: 'Bank error in your favor.',
    collect: 200,
    curPos: ""
  }, {
    name: 'Doctor’s fee.',
    collect: -50
  }, {
    name: 'From sale of stock.',
    collect: 50
  }, {
    name: 'Get Out of Jail Free.',
    collect: 0
  }, {
    name: 'Go to Jail. Go directly to jail, do not pass Go',
    collect: 0
  }, {
    name: 'Holiday fund matures.',
    collect: 100
  }, {
    name: 'Income tax refund',
    collect: 20
  }, {
    name: 'It is your birthday. Collect $10 from every player',
    collect: 10
  }, {
    name: 'Life insurance matures.',
    collect: 100
  }, {
    name: 'Pay hospital fees',
    collect: -100
  }, {
    name: 'Pay school fees',
    collect: 50
  }, {
    name: 'Consultancy fee',
    collect: 25
  }, {
    name: 'You are assessed for street repair.$40 per house. $115 per hotel',
    collect: 0
  }, {
    name: 'You have won second prize in a beauty contest.',
    collect: 10
  }, {
    name: 'You inherit.',
    collect: 100
  },])
  const [chanceCards, setChanceCards] = useState([


    {
      name: 'Advance to Boardwalk',
      collect: -75
    }, {
      name: 'Advance to Go (Collect $200)',
      collect: 200
    }, {
      name: 'Advance to Illinois Avenue. If you pass Go, collect $200',
      collect: 200
    }, {
      name: 'Advance to St. Charles Place. If you pass Go, collect $200',
      collect: 200
    }, {
      name: 'Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled',
      collect: -75
    }, {
      name: 'Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled',
      collect: 500
    }, {
      name: 'Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown.',
      collect: 75
    }, {
      name: 'Bank pays you dividend of $50',
      collect: 50
    }, {
      name: 'Get Out of Jail Free'
    }, {
      name: 'Go Back 3 Spaces'
    }, {
      name: 'Go to Jail. Go directly to Jail, do not pass Go, do not collect $200',
      collect: 200
    }, {
      name: 'Make general repairs on all your property. For each house pay $25. For each hotel pay $100',
      collect: 100,
    }, {
      name: 'Speeding fine $15',
      collect: -15
    }, {
      name: 'Take a trip to Reading Railroad. If you pass Go, collect $200',
      collect: 200
    }, {
      name: 'You have been elected Chairman of the Board. Pay each player $50',
      collect: -150
    }, {
      name: 'Your building loan matures. Collect $150',
      collect: 150
    }])
  const [properties, setProperties] = useState([

    {

      position: 1,
      name: 'Mediterannian avenue',
      price: 60,
      rent: 6,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 1,
      numOfHotels: 0
    }, {
      position: 3,
      name: 'Baltic avenue',
      price: 60,
      rent: 6,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 1,
      numOfHotels: 0
    },
    {
      position: 5,
      name: 'Reading railroad',
      price: 200,
      rent: 20,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 0,
      numOfHotels: 0
    },
    {
      position: 6,
      name: 'Oriental avenue',
      price: 100,
      rent: 10,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 2,
      numOfHotels: 0
    },
    {
      position: 8,
      name: 'Vermont avenue',
      price: 100,
      rent: 10,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 2,
      numOfHotels: 0
    },
    {
      position: 9,
      name: 'Connecticut avenue',
      price: 120,
      rent: 12,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 2,
      numOfHotels: 0
    },
    {
      position: 11,
      name: 'St. charles place',
      price: 140,
      rent: 14,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 3,
      numOfHotels: 0
    },
    {
      position: 12,
      name: 'Electic company',
      price: 150,
      rent: 15,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 4,
      numOfHotels: 0
    },
    {
      position: 13,
      name: 'States avenue',
      price: 140,
      rent: 14,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 3,
      numOfHotels: 0
    },
    {
      position: 14,
      name: 'Virginia avenue',
      price: 160,
      rent: 16,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 3,
      numOfHotels: 0
    },
    {
      position: 15,
      name: 'Pensylvania Railroad',
      price: 200,
      rent: 20,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 0,
      numOfHotels: 0
    },
    {
      position: 16,
      name: 'St. james place',
      price: 180,
      rent: 18,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 5,
      numOfHotels: 0
    },
    {
      position: 18,
      name: 'Tennessee avenue',
      price: 180,
      rent: 18,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 5,
      numOfHotels: 0
    },
    {
      position: 19,
      name: 'New york avenue',
      price: 200,
      rent: 20,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 5,
      numOfHotels: 0
    },
    {
      position: 21,
      name: 'Kentucky avenue',
      price: 220,
      rent: 22,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 6,
      numOfHotels: 0
    },
    {
      position: 23,
      name: 'Indiana avenue',
      price: 220,
      rent: 22,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 6,
      numOfHotels: 0
    },
    {
      position: 24,
      name: 'Illinos avenue',
      price: 240,
      rent: 24,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 6,
      numOfHotels: 0
    },
    {
      position: 25,
      name: 'B & 0 railroad',
      price: 200,
      rent: 20,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 0,
      numOfHotels: 0
    },
    {
      position: 26,
      name: 'Atlantic avenue',
      price: 260,
      rent: 26,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 7,
      numOfHotels: 0
    },
    {
      position: 27,
      name: 'Ventor avenue',
      price: 260,
      rent: 26,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 7,
      numOfHotels: 0
    },
    {
      position: 28,
      name: 'Water works',
      price: 150,
      rent: 15,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 4,
      numOfHotels: 0
    },
    {
      position: 29,
      name: 'Marvin gardens',
      price: 280,
      rent: 28,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 7,
      numOfHotels: 0
    },
    {
      position: 31,
      name: 'Pacific avenue',
      price: 300,
      rent: 30,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 8,
      numOfHotels: 0
    },
    {
      position: 32,
      name: 'North carolina avenue',
      price: 300,
      rent: 30,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 8,
      numOfHotels: 0
    },
    {
      position: 34,
      name: 'Pensylvania avenue',
      price: 320,
      rent: 32,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 8,
      numOfHotels: 0
    },
    {
      position: 35,
      name: 'Short  line',
      price: 200,
      rent: 20,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 0,
      numOfHotels: 0
    },
    {
      position: 37,
      name: 'Park place',
      price: 350,
      rent: 35,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 9,
      numOfHotels: 0
    },

    {
      position: 39,
      name: 'Boardwalk',
      price: 400,
      rent: 40,
      isAvailable: true,
      ownerIdx: "",
      propertyType: 9,
      numOfHotels: 0
    },
  ]);
  const [gameCards, setGameCards] = useState([
    [
      { imgSrc: start, type: 'visiting', pos: '0', styles: {} },
      { name: 'Mediterannian avenue', imgSrc: image1, type: 'property', pos: '1', styles: {} },
      { imgSrc: imageCommunityChest, type: 'Chestcard', pos: '2', styles: {} },
      { name: 'Baltic avenue', imgSrc: image2, type: 'property', pos: '3', styles: {} },
      { imgSrc: imageTax, type: 'tax', pos: '4', styles: {}, pay: 200 },
      { name: 'Reading railroad', imgSrc: imageRail, type: 'property', pos: '5', styles: {} },
      { name: 'Oriental avenue', imgSrc: image3, type: 'property', pos: '6', styles: {} },
      { imgSrc: imageChance, type: 'Chancecard', pos: '7', styles: {} },
      { name: 'Vermont avenue', imgSrc: image4, type: 'property', pos: '8', styles: {} },
      { name: 'Connecticut avenue', imgSrc: image5, type: 'property', pos: '9', styles: {} },
      { imgSrc: visiting, type: 'visiting', pos: '10', styles: {} },
    ],
    [
      { name: 'St. charles place', imgSrc: image6, type: 'property', pos: '11', styles: {} },
      { name: 'Electic company', imgSrc: imageElectric, type: 'property', pos: '12', styles: {} },
      { name: 'States avenue', imgSrc: image7, type: 'property', pos: '13', styles: {} },
      { name: 'Virginia avenue', imgSrc: image8, type: 'property', pos: '14', styles: {} },
      { name: 'Pensylvania Railroad', imgSrc: imageRailPensylvania, type: 'property', pos: '15', styles: {} },
      { name: 'St. james place', imgSrc: image9, type: 'property', pos: '16', styles: {} },
      { imgSrc: imageCommunityChest, type: 'Chestcard', pos: '17', styles: {} },
      { name: 'Tennessee avenue', imgSrc: image10, type: 'property', pos: '18', styles: {} },
      { name: 'New york avenue', imgSrc: image11, type: 'property', pos: '19', styles: {} },
    ],
    [
      { imgSrc: freePacking, type: 'visiting', pos: '20', styles: {} },
      { name: 'Kentucky avenue', imgSrc: image12, type: 'property', pos: '21', styles: {} },
      { imgSrc: imageChance1, type: 'Chancecard', pos: '22', styles: {} },
      { name: 'Indiana avenue', imgSrc: image13, type: 'property', pos: '23', styles: {} },
      { name: 'Illinos avenue', imgSrc: image14, type: 'property', pos: '24', styles: {} },
      { name: 'B & 0 railroad', imgSrc: railroadTop, type: 'property', pos: '25', styles: {} },
      { name: 'Atlantic avenue', imgSrc: image15, type: 'property', pos: '26', styles: {} },
      { name: 'Ventor avenue', imgSrc: image16, type: 'property', pos: '27', styles: {} },
      { name: 'Water works', imgSrc: water, type: 'property', pos: '28', styles: {} },
      { name: 'Marvin gardens', imgSrc: image17, type: 'property', pos: '29', styles: {} },
      { imgSrc: go, type: 'visiting', pos: '30', styles: {} },
    ],
    [
      { name: 'Pacific avenue', imgSrc: image18, type: 'property', pos: '31', styles: {} },
      { name: 'North carolina avenue', imgSrc: image19, type: 'property', pos: '32', styles: {} },
      { imgSrc: imageCommunityChest, type: 'Chestcard', pos: '33', styles: {} },
      { name: 'Pensylvania avenue', imgSrc: image20, type: 'property', pos: '34', styles: {} },

      { name: 'Short  line', imgSrc: shortLine, type: 'property', pos: '35', styles: {} },
      { imgSrc: imageChance1, type: 'Chancecard', pos: '36', styles: {} },
      { name: 'Park place', imgSrc: image21, type: 'property', pos: '37', styles: {}, },
      { imgSrc: image22, type: "tax", pos: '38', styles: {}, pay: 75 },
      { name: 'Boardwalk', imgSrc: image23, type: 'property', pos: '39', styles: {} },
    ],

  ]);

  const [players, setPlayers] = useState([
    { idx: 0, name:"",  position: 0, prevPos: 0, curPos: 0, cash: 1200, colorSrc: figureRed, styles: { position: "absolute", left: 780, top: 900 }, color: "red", cf: 0.3, top: 0, border: "1.5px solid red", movesToSkip: false },
    {idx: 1,name:"",  position: 0, prevPos: 0, curPos: 0, cash: 1200, colorSrc: figureBlue, styles: { position: "absolute", left: 780, top: 940 }, color: "blue", cf: 0.3, top: 1, border: "1.5px solid #00a9f3", movesToSkip: false },
    {idx: 2, name:"", position: 0, prevPos: 0, curPos: 0, cash: 1200, colorSrc: figureGreen, styles: { position: "absolute", left: 750, top: 900 }, color: "green", cf: -0.1, top: 0, border: "1.5px solid #05d243", movesToSkip: false },
    {idx: 3,name:"",  position: 0, prevPos: 0, curPos: 0, cash: 1200, colorSrc: figureOrange, styles: { position: "absolute", left: 750, top: 940 }, color: "orange", cf: -0.1, top: -3, border: "1.5px solid #ff8022", movesToSkip: false },



  ]);
  const [playersProperties, setPlayersProperties] = useState(
    { 0: [], 1: [], 2: [], 3: [] })
  const updatedPlayers = players.slice();
  const _ = require('lodash');
  console.log(players)
  const gameCardsFlatted = gameCards.flat();
  const player = updatedPlayers[currentPlayerIdx];
  const updatedPlayersProperties = {
    ...playersProperties,
  }
  const newProperty = properties.slice();
  const HoteledProperty = properties.slice();
  const newCurrentPlayerIdx = currentPlayerIdx + 1;
  const stoppedPlayer = [];

  players.map((pl) => {
    if (pl.movesToSkip) {
      stoppedPlayer.push(pl);
    }
  })

  const moveCurrentPlayer = (steps) => {

    player.prevPos = player.curPos;
    player.curPos = player.prevPos + steps;
    player.position = player.curPos;



    if (player.curPos >= 40) {
      player.curPos = player.position - 40;
      player.cash += 200;
      player.prevPos = player.curPos
    }

    if (gameCardsFlatted[player.curPos].type === "property") {
      const oneTypeProperty = [];
      const property = properties.find(p => p.position === player.curPos);
      properties.map((fl) => {
        if (fl.propertyType === property.propertyType) {
          oneTypeProperty.push(fl.position);
        }

      });
      let intersection = playersProperties[currentPlayerIdx].filter(x => oneTypeProperty.includes(x));
      if (property.isAvailable && player.cash >= property.price) {

        setShowBuyButton(true);
        setShowDeclineBuyButton(true);
      } else if (!property.isAvailable && currentPlayerIdx === property.ownerIdx && _.isEqual(intersection, oneTypeProperty) && property.numOfHotels < 4 && player.cash > property.price * 2) {


        setShowHotelBuyButton(true);

      }
      else if (!property.isAvailable && property.ownerIdx !== currentPlayerIdx) {
        setShowPayRent(true)
      }

    } else {
      setShowBuyButton(false);
      setShowHotelBuyButton(false);
      if (gameCardsFlatted[player.curPos].type === "tax") {
        player.cash -= gameCardsFlatted[player.curPos].pay;
        setCurrentPlayerIdx(newCurrentPlayerIdx);
      }
      else if (gameCardsFlatted[player.curPos].type === "Chestcard") {
        const chestCard = chestCards.shift();
        alert(chestCard.name);
        player.cash += chestCard.collect;
        chestCards.push(chestCard);
        setCurrentPlayerIdx(newCurrentPlayerIdx);
      } else if (gameCardsFlatted[player.curPos].type === "Chancecard") {
        const chanceCard = chanceCards.shift();
        alert(chanceCard.name);
        player.cash += chanceCard.collect;
        chanceCards.push(chanceCard);
        setCurrentPlayerIdx(newCurrentPlayerIdx);
      } else if (gameCardsFlatted[player.curPos].type === "visiting") {
        player.movesToSkip = true;
        alert(`moves to skip: ${player.movesToSkip}`)
        setCurrentPlayerIdx(newCurrentPlayerIdx);
      }
    }
    player.styles = { position: "absolute", left: document.getElementById(player.curPos).getBoundingClientRect().x + 80 * player.cf, top: document.getElementById(player.curPos).getBoundingClientRect().y + 100 * player.cf * player.top }
    setPlayers(updatedPlayers);
    setPlayersProperties(updatedPlayersProperties);
    const updatedDice = Dice();
    setDices(updatedDice);
  }
  

  const buyHotel = () => {
    const propertyWithHotel = HoteledProperty.find(p => p.position === player.curPos);
    propertyWithHotel.rent *= 2.5;
    player.cash -= propertyWithHotel.price * 2;
    propertyWithHotel.numOfHotels++;
    propertyWithHotel.price *= 1.5;
    setShowHotelBuyButton(false);
    setCurrentPlayerIdx(newCurrentPlayerIdx);
  }
  const buyProperty = () => {
    const property = newProperty.find(p => p.position === player.curPos);
    updatedPlayersProperties[currentPlayerIdx].push(player.curPos);
    property.isAvailable = false;
    property.ownerIdx = currentPlayerIdx;
    player.cash -= property.price
    setProperties(newProperty)
    gameCardsFlatted[player.curPos].styles = { border: player.border };
    setPlayersProperties(updatedPlayersProperties);
    setShowBuyButton(false);
    setShowDeclineBuyButton(false);
    setCurrentPlayerIdx(newCurrentPlayerIdx);

  }
  const declineProperty = () => {
    setCurrentPlayerIdx(newCurrentPlayerIdx);
    setShowBuyButton(false);
    setShowDeclineBuyButton(false);

  }
  const payRent = () => {
    const property = properties.find(p => p.position === player.curPos);
    if (player.cash < property.rent) {
      const deletedProperty = updatedPlayersProperties[currentPlayerIdx].shift();
      const propertyDeleted = newProperty.find(p => p.position === deletedProperty);
      const gameCardDeleted = gameCardsFlatted[propertyDeleted.position]
      propertyDeleted.isAvailable = true;
      propertyDeleted.ownerIdx = "";
      gameCardDeleted.styles = {};
      console.log(gameCardDeleted, propertyDeleted.isAvailable)
      player.cash += propertyDeleted.price;

    }
    player.cash -= property.rent;
    players[property.ownerIdx].cash += property.rent
    setCurrentPlayerIdx(newCurrentPlayerIdx);
    setShowBuyButton(false)
    setShowPayRent(false);
  }

  if (currentPlayerIdx > 3) {

    setCurrentPlayerIdx(0);

  }
  if (_.isEqual(stoppedPlayer[0], player) && stoppedPlayer.length !== 0) {
    
    setCurrentPlayerIdx(newCurrentPlayerIdx);
  
    console.log(stoppedPlayer)
    
    
  }
  stoppedPlayer.map((stp)=>{
    if(!stp.movesToSkip){
      stoppedPlayer.shift();
    }
  })
  
  


  return <BoardContext.Provider value={{
    players,
    setPlayers,
    currentPlayerIdx,
    properties,
    playersProperties,
    player,
    showDeclineBuyButton,
    moveCurrentPlayer,
    dices,
    chestCards,
    chanceCards,
    setChestCards,
    setChanceCards,
    gameCards,
    buyProperty,
    showBuyButton,
    gameCardsFlatted,
    showHotelBuyButton,
    buyHotel,
    declineProperty,
    payRent,
    showPayRent,
    property
  }}>
    {children}
  </BoardContext.Provider>;
}