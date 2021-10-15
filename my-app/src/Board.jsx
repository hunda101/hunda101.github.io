import React, { useEffect, useState } from 'react';
import { Dice } from './rollDice';
import image1 from "./img/1.png";
import image2 from "./img/2.png";
import image3 from "./img/3.png";
import image4 from "./img/4.png";
import image5 from "./img/5.png";
import image6 from "./img/6.png";
import image7 from "./img/7.png";
import image8 from "./img/8.png";
import image9 from "./img/9.png";
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
import image20 from "./img/20.png";
import image21 from "./img/21.png";
import image22 from "./img/22.png";
import image23 from "./img/23.png";
import imageCenter from "./img/Center.png";
import imageChance from "./img/Chance.png";
import imageChance1 from "./img/Chance1.png";
import imageCommunityChest from "./img/Community chest.png";
import imageElectric from "./img/Electric company.png"
import imageRail from "./img/Reading Railroad.png";
import imageTax from "./img/Income Tax.png";
import start from "./img/Start.png";
import visiting from "./img/Visiting.png";
import freePacking from "./img/Free Parking.png";
import railroadTop from "./img/R & O Railroad.png";
import imageRailPensylvania from "./img/Pennsylvania railroad.png";
import water from "./img/Water.png";
import shortLine from "./img/Short line.png"
import go from "./img/Go.png";
import figureRed from "./img/figures/figureRed.png";
import figureBlue from "./img/figures/figureBlue.png";
import figureGreen from "./img/figures/figureGreen.png";
import figureOrange from "./img/figures/figureOrange.png";
import figurePink from "./img/figures/figurePink.png";


import dice1 from "./img/dice1.png"
import dice2 from "./img/dice2.png"
import dice3 from "./img/dice3.png"
import dice4 from "./img/dice4.png"
import dice5 from "./img/dice5.png"
import dice6 from "./img/dice6.png"
import "./style/BoardStyle.css";
import { chestCards } from './BoardPage/chest-cards';
import { chanceCards } from './BoardPage/chance-cards';
import { properties } from './BoardPage/properties';


class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: Math.floor(Math.random() * (6 - 1 + 1) + 1),
      value2: Math.floor(Math.random() * (6 - 1 + 1) + 1),
      isClicked: true,
      leftRed: 769,
      topRed: 940,
      leftBlue: 769,
      topBlue: 950,
      color: "red",
      currentValue1: 0,
      previousValue1: 0,
      currentValue2: 0,
      previousValue2: 0,
      circleBlue: 1,
      circleRed: 1,

      gameCards: [
        [
          { imgSrc: start, type: 'visiting', id: "10", pos: '0', styles: {} },
          { imgSrc: image1, type: 'property', id: "9", pos: '1', styles: {} },
          { imgSrc: imageCommunityChest, type: 'Chestcard', id: "8", pos: '2', styles: {} },
          { imgSrc: image2, type: 'property', id: "7", pos: '3', styles: {} },
          { imgSrc: imageTax, id: "6", pos: '4', styles: {} },
          { imgSrc: imageRail, type: 'property', id: "5", pos: '5', styles: {} },
          { imgSrc: image3, type: 'property', id: "4", pos: '6', styles: {} },
          { imgSrc: imageChance, type: 'Chancecard', id: "3", pos: '7', styles: {} },
          { imgSrc: image4, type: 'property', id: "2", pos: '8', styles: {} },
          { imgSrc: image5, type: 'property', id: "1", pos: '9', styles: {} },
          { imgSrc: visiting, type: 'visiting', id: "0", pos: '10', styles: {} },
        ],
        [
          { imgSrc: image6, type: 'property', id: "39", pos: '11', styles: {} },
          { imgSrc: imageElectric, type: 'property', id: "38", pos: '12', styles: {} },
          { imgSrc: image7, type: 'property', id: "37", pos: '13', styles: {} },
          { imgSrc: image8, type: 'property', id: "36", pos: '14', styles: {} },
          { imgSrc: imageRailPensylvania, type: 'property', id: "35", pos: '15', styles: {} },
          { imgSrc: image9, type: 'property', id: "34", pos: '16', styles: {} },
          { imgSrc: imageCommunityChest, type: 'Chestcard', id: "33", pos: '17', styles: {} },
          { imgSrc: image10, type: 'property', id: "32", pos: '18', styles: {} },
          { imgSrc: image11, type: 'property', id: "31", pos: '19', styles: {} },
        ],
        [
          { imgSrc: freePacking, type: 'visiting', id: "30", pos: '20', styles: {} },
          { imgSrc: image12, type: 'property', id: "29", pos: '21', styles: {} },
          { imgSrc: imageChance1, type: 'Chancecard', id: "28", pos: '22', styles: {} },
          { imgSrc: image13, type: 'property', id: "27", pos: '23', styles: {} },
          { imgSrc: image14, type: 'property', id: "26", pos: '24', styles: {} },
          { imgSrc: railroadTop, type: 'property', id: "25", pos: '25', styles: {} },
          { imgSrc: image15, type: 'property', id: "24", pos: '26', styles: {} },
          { imgSrc: image16, type: 'property', id: "23", pos: '27', styles: {} },
          { imgSrc: water, type: 'property', id: "22", pos: '28', styles: {} },
          { imgSrc: image17, type: 'property', id: "21", pos: '29', styles: {} },
          { imgSrc: go, type: 'visiting', id: "20", pos: '30', styles: {} },
        ],
        [
          { imgSrc: image18, type: 'property', id: "19", pos: '31', styles: {} },
          { imgSrc: image19, type: 'property', id: "18", pos: '32', styles: {} },
          { imgSrc: imageCommunityChest, type: 'Chestcard', id: "17", pos: '33', styles: {} },
          { imgSrc: image20, type: 'property', id: "16", pos: '34', styles: {} },
          { imgSrc: shortLine, type: 'property', id: "15", pos: '35', styles: {} },
          { imgSrc: imageChance1, type: 'Chancecard', id: "14", pos: '36', styles: {} },
          { imgSrc: image21, type: 'property', id: "13", pos: '37', styles: {}, },
          { imgSrc: image22, type: 'property', id: "12", pos: '38', styles: {} },
          { imgSrc: image23, type: 'property', id: "11", pos: '39', styles: {} },
        ],

      ],
      popUpWindow: {
        object: '',
        style: { visibility: "hidden" },
      },
      button: false,
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicked = this.clicked.bind(this);
    this.buttonAccept = this.buttonAccept.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: "" })

  }

  handleClick(e) {
    console.log("click")
    const parent = e.target.parentNode.getBoundingClientRect();
    const element = e.target.getBoundingClientRect();
    const x = element.left - parent.left;
    const y = element.top - parent.top;


  }
  buttonAccept() {
    this.setState({ buttonAccept: true });
    const flattedGameCard = this.state.gameCards.flat();
    const gameCarde = flattedGameCard.find(fl => this.state.value1 + this.state.value2 + this.state.previousValue1 + this.state.currentValue1 === Number(fl.pos));
    console.log(gameCarde)
    if (this.state.buttonAccept) {
      this.state.popUpWindow.style = { visibility: "visible" };
      
    }else if (!this.state.buttonAccept) {
      this.state.popUpWindow.style = { visibility: "hidden" }
      gameCarde.styles = { filter: "hue-rotate(303deg)" };
    }

  }
  clicked() {
    this.setState(state => ({
      isClicked: !state.isClicked,
      value1: Math.floor(Math.random() * (6 - 1 + 1) + 1),
      value2: Math.floor(Math.random() * (6 - 1 + 1) + 1)
    }))
    console.log(`red moves ${this.state.value1 + this.state.value2} positions`);
    console.log(`Redvalue1 : ${this.state.value1} Redvalue2: ${this.state.value2}`)
    let circleRed = 0;
    let circleBlue = 0;
    if (this.state.isClicked) {
      const position1 = this.state.currentValue1 + this.state.previousValue1 + this.state.value1 + this.state.value2;
      if ((position1) <= 39) {
        this.setState({ previousValue1: this.state.currentValue1 });
        this.setState({ currentValue1: this.state.value1 + this.state.value2 + this.state.previousValue1 });

        this.setState({ leftRed: 810 - document.getElementById(position1).getBoundingClientRect().x, topRed: 40 + document.getElementById(position1).getBoundingClientRect().y });
        this.setState({ color: "blue" });
        console.log(`current red position1 is ${position1}`);
        const flattedGameCard = this.state.gameCards.flat();
        const gameCarde = flattedGameCard.find(fl => this.state.value1 + this.state.value2 + this.state.previousValue1 + this.state.currentValue1 === Number(fl.pos));
        if (gameCarde.type === "property") {
          const gameCard = properties.find(p => this.state.value1 + this.state.value2 + this.state.previousValue1 + this.state.currentValue1 === p.position);

          this.setState({ isAvailable: false })
          alert(`position is ${gameCard.position} and name is ${gameCard.name} and available ${gameCard.isAvailable}`);
          if (gameCard.isAvailable) {
            
            this.state.popUpWindow.object = gameCard.name;
            this.state.popUpWindow.style = {visibility: "visible"}
            
          }
          
          gameCard.isAvailable = false;
          

        }
        else if (gameCarde.type === "Chancecard") {
          const chanceCard = chanceCards.shift();
          alert(chanceCard.name);
          chanceCards.push(chanceCard)
        } else if (gameCarde.type === "Chestcard") {
          const chanceCard = chanceCards.shift();
          alert(chanceCard.name);
          chanceCards.push(chanceCard)
        }



      } else if (position1 > 39) {
        this.setState({ circleRed: circleRed + 1 });
        console.log("circleRed is " + this.state.circleRed);
        this.setState({ previousValue1: 0, currentValue1: 0 });
        this.setState({ leftRed: 810 - document.getElementById((position1) - 40).getBoundingClientRect().x, topRed: 40 + document.getElementById(position1 - 40).getBoundingClientRect().y });
        this.setState({ color: "blue" });
        console.log(`current red position1 is ${position1 - 40}`);
        const flattedGameCard = this.state.gameCards.flat();
        const gameCarde = flattedGameCard.find(fl => this.state.value1 + this.state.value2 + this.state.previousValue1 + this.state.currentValue1 - 40 === Number(fl.pos));
        if (gameCarde.type === "property") {
          const gameCard = properties.find(p => this.state.value1 + this.state.value2 + this.state.previousValue1 + this.state.currentValue1 - 40 === p.position);
          alert(`position is ${gameCard.position} and name is ${gameCard.name} and ava`)
          if (gameCard.isAvailable) {
            gameCarde.styles = { filter: "hue-rotate(303deg)" }
          }
          gameCard.isAvailable = false
        }
        else if (gameCarde.type === "Chancecard") {
          const chanceCard = chanceCards.shift();
          alert(chanceCard.name);
          chanceCards.push(chanceCard)
        } else if (gameCarde.type === "Chestcard") {
          const chanceCard = chanceCards.shift();
          alert(chanceCard.name);
          chanceCards.push(chanceCard)
        }
      }
    }

    if (!this.state.isClicked) {
      const position2 = this.state.currentValue2 + this.state.previousValue2 + this.state.value1 + this.state.value2;
      if (position2 <= 39) {
        this.setState({ previousValue2: this.state.currentValue2 })
        this.setState({ currentValue2: this.state.value1 + this.state.previousValue2 + this.state.value2 })
        this.setState({ leftBlue: 810 - document.getElementById(position2).getBoundingClientRect().x, topBlue: 40 + document.getElementById(position2).getBoundingClientRect().y })
        this.setState({ color: "red" })
        console.log(` current blue positions ${position2}`)
        console.log(`Bluevalue1 : ${this.state.value1} Bluevalue1: ${this.state.value2}`)
        const flattedGameCard = this.state.gameCards.flat();
        const gameCarde = flattedGameCard.find(fl => this.state.value1 + this.state.value2 + this.state.previousValue2 + this.state.currentValue2 === Number(fl.pos));
        if (gameCarde.type === "property") {
          const gameCard = properties.find(p => this.state.value1 + this.state.value2 + this.state.previousValue2 + this.state.currentValue2 === p.position);
          alert(`position is ${gameCard.position} and name is ${gameCard.name}`)
          if (gameCard.isAvailable) {
            gameCarde.styles = { filter: "hue-rotate(130deg)" }
          }
          gameCard.isAvailable = false
        }
        else if (gameCarde.type === "Chancecard") {

          const chanceCard = chanceCards.shift();
          alert(chanceCard.name);
          chanceCards.push(chanceCard)

        } else if (gameCarde.type === "Chestcard") {

          const chanceCard = chanceCards.shift();
          alert(chanceCard.name);
          chanceCards.push(chanceCard)
        }


      } else if (position2 > 39) {
        this.setState({ circleBlue: circleBlue + 1 });
        console.log("blue circle is " + this.state.circleBlue);
        this.setState({ previousValue2: 0, currentValue2: 0 });
        this.setState({ leftBlue: 810 - document.getElementById(position2 - 40).getBoundingClientRect().x, topBlue: 40 + document.getElementById(position2 - 40).getBoundingClientRect().y });
        this.setState({ color: "red" });
        console.log(`blue is in ${this.state.currentValue2 + this.state.previousValue2 + this.state.value - 40} position`);
        const flattedGameCard = this.state.gameCards.flat();
        const gameCarde = flattedGameCard.find(fl => this.state.value1 + this.state.value2 + this.state.previousValue2 + this.state.currentValue2 - 40 === Number(fl.pos));
        if (gameCarde.type === "property") {
          const gameCard = properties.find(p => this.state.value1 + this.state.value2 + this.state.previousValue2 + this.state.currentValue2 - 40 === p.position);
          alert(`position is ${gameCard.position} and name is ${gameCard.name}`)
          if (gameCard.isAvailable) {
            gameCarde.styles = { filter: "hue-rotate(130deg)" }
          }
          gameCard.isAvailable = false
        }
        else if (gameCarde.type === "Chancecard") {

          const chanceCard = chanceCards.shift();
          alert(chanceCard.name);
          chanceCards.push(chanceCard)

        } else if (gameCarde.type === "Chestcard") {

          const chanceCard = chanceCards.shift();
          alert(chanceCard.name);
          chanceCards.push(chanceCard)
        }
      }
    }

  }
  render() {
    const stylesRed = {
      position: "absolute",
      left: this.state.leftRed,
      top: this.state.topRed
    }
    const stylesBlue = {
      position: "absolute",
      left: this.state.leftBlue,
      top: this.state.topBlue
    }
    const showInfo = (idx, arrIdx, sum) => {
      const gameCard = this.state.gameCards[arrIdx][idx];
      if (gameCard.type === 'property') {
        const property = properties.find(p => idx + sum === p.position);
        alert(`${property.name} costs $${property.price}`);
      }
      else if (gameCard.type === 'Chestcard') {
        const chestCard = chestCards.shift();
        alert(chestCard.name);
        chestCards.push(chestCard)


      } else if (gameCard.type === 'Chancecard') {

        const chanceCard = chanceCards.shift();
        alert(chanceCard.name);
        chanceCards.push(chanceCard)


      }
      else if (gameCard.type === 'Visiting') {

        alert("You visiting the jail")


      }
    }
    const figure = [{ name: figureRed, styles: stylesRed }, { name: figureBlue, styles: stylesBlue }];
    const dice = [{ name: dice1, value: 1 }, { name: dice2, value: 2 }, { name: dice3, value: 3 }, { name: dice4, value: 4 }, { name: dice5, value: 5 }, { name: dice6, value: 6 }]
    const rollDiced1 = dice.find(d => this.state.value1 === d.value);
    const rollDiced2 = dice.find(d => this.state.value2 === d.value)




    return (
      <div className="board">
        <div className="bottom">
          {this.state.gameCards[0].map((gc, idx) => {
            return <img src={gc.imgSrc} id={gc.id} style={gc.styles} className={gc.type === 'visiting' ? "go" : 'image'} onClick={() => {
              console.log(gc.id)
              showInfo(idx, 0, 0)
            }} />;
          })}
        </div>
        <div className="top">
          {this.state.gameCards[2].map((gc, idx) => {
            return <img src={gc.imgSrc} id={gc.id} style={gc.styles} className={gc.type === 'visiting' ? "go" : 'image'} onClick={() => {
              console.log(gc.id)
              showInfo(idx, 2, this.state.gameCards[0].length + this.state.gameCards[1].length)
            }} />;
          })}
        </div>
        <div className="left">
          {this.state.gameCards[1].map((gc, idx) => {
            return <img src={gc.imgSrc} id={gc.id} style={gc.styles} className='image-side' onClick={() => {
              console.log(idx)
              console.log(gc.id)
              showInfo(idx, 1, this.state.gameCards[0].length)
            }} />;
          })}
        </div>
        <div className="right">
          {this.state.gameCards[3].map((gc, idx) => {
            return <img src={gc.imgSrc} id={gc.id} style={gc.styles} className='image-side' onClick={() =>
              showInfo(idx, 3, this.state.gameCards[0].length + this.state.gameCards[1].length + this.state.gameCards[2].length)} />;
          })}
        </div>
        <div >
          <img className="central-box" src={imageCenter} alt="" onClick={this.handleClick} />
        </div>
        <div className="container">
          <div className="row">
            {figure.map((f) => {

              return <img className="col figure" src={f.name} alt="" style={f.styles} />
            })}
          </div>
        </div>
        <div className="dice" onClick={this.clicked}>
          <img src={rollDiced1.name} alt="" />
          <img src={rollDiced2.name} alt="" />
        </div>
        {/* <div className="pop-up-window" style={this.state.popUpWindow.style}>
          <p>Do you want to buy + {this.state.popUpWindow.object}?</p>
          <div> <button onClick={this.buttonAccept}>Yes</button></div>
          <button>No</button>
        </div> */}


        
      </div>
    )
  }
}
export default Board;
