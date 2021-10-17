
import Board from "./Board";
import { Board2 } from "./Board2";
import Start from './Start';
import Players from './Players';
import { Dice } from './rollDice'
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { BoardContext, BoardProvider } from './BoardContext';
import { Root } from './BoardContext';

function App() {
  return (
    <div className="App">
      {/* <Root /> */}
      <BoardProvider value={{}}>
        <Router>

          <Switch>

            <Route path="/" exact component={Start}></Route>
            <Route path="/Board">

              <Board2 />

            </Route>
            <Route path="/Players" component={Players}></Route>
            <Route path="/BoardEXP" component={Board}></Route>
            <Route path="/Dice" component={Dice}></Route>
          </Switch>

        </Router >
      </BoardProvider>
    </div>
  );
}

export default App;
