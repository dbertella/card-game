import React, { Component } from 'react';
import styled from 'styled-components';
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}  from './components/Card';
import Dice from './components/Dice';

const Board = styled.div`
  display: flex;
  justifyContent: center;
  alignItems: center;
  padding: 10px;
  &:nth-child(even) {
    background: #f7f7f7;
  }
`;

const initialState = {
  number: 1,
  number2: 1,
  times: 20,
  times2: 30,
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }
  throDice = (times: string, n: string) => {
    const number = Math.ceil(Math.random() * 6);
    if (this.state[times] > 1) {
      setTimeout(() => {
        this.setState({ [times]: this.state[times] - 1, [n]: number });
        this.throDice(times, n);
      }, 100 - (this.state[times] * 3))
    } else {
      this.setState({ [times]: initialState[times], [n]: number });
    }
  };
  render() {
    const {
      number,
      number2
    } = this.state;
    console.log(100 - this.state.times * 3);
    return (
      <div className="App">
        <h1>Cards</h1>
        <Board>
          <h2>Clubs</h2>
          <One suit="clubs" />
          <Two suit="clubs" />
          <Three suit="clubs" />
          <Four suit="clubs" />
          <Five suit="clubs" />
          <Six suit="clubs" />
          <Seven suit="clubs" />
          <Eight suit="clubs" />
          <Nine suit="clubs" />
          <Ten suit="clubs" />
          <Jack suit="clubs" />
          <Queen suit="clubs" />
          <King suit="clubs" />
        </Board>
        <Board>
          <h2>Spades</h2>
          <One suit="spades" />
          <Two suit="spades" />
          <Three suit="spades" />
          <Four suit="spades" />
          <Five suit="spades" />
          <Six suit="spades" />
          <Seven suit="spades" />
          <Eight suit="spades" />
          <Nine suit="spades" />
          <Ten suit="spades" />
          <Jack suit="spades" />
          <Queen suit="spades" />
          <King suit="spades" />
        </Board>
        <Board>
          <h2>Hearts</h2>
          <One suit="hearts" />
          <Two suit="hearts" />
          <Three suit="hearts" />
          <Four suit="hearts" />
          <Five suit="hearts" />
          <Six suit="hearts" />
          <Seven suit="hearts" />
          <Eight suit="hearts" />
          <Nine suit="hearts" />
          <Ten suit="hearts" />
          <Jack suit="hearts" />
          <Queen suit="hearts" />
          <King suit="hearts" />
        </Board>
        <Board>
          <h2>Diamonds</h2>
          <One suit="diamonds" />
          <Two suit="diamonds" />
          <Three suit="diamonds" />
          <Four suit="diamonds" />
          <Five suit="diamonds" />
          <Six suit="diamonds" />
          <Seven suit="diamonds" />
          <Eight suit="diamonds" />
          <Nine suit="diamonds" />
          <Ten suit="diamonds" />
          <Jack suit="diamonds" />
          <Queen suit="diamonds" />
          <King suit="diamonds" />
        </Board>
        <Board>
          <h2>Dice</h2>
          <Dice onClick={() => this.throDice('times', 'number')}>
            {number}
          </Dice>
          <Dice onClick={() => this.throDice('times2', 'number2')}>
            {number2}
          </Dice>
        </Board>
      </div>
    );
  }
}

export default App;
