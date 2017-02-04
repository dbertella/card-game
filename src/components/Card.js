// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import cardSprite from '../img/cards.png';
const CardLayout = styled.div`
  box-sizing: border-box;
  height: 96px;
  width: 71px;
  margin: 4px;
  box-shadow: 0 0 5px rgba(177, 177, 177, .9);
`;
const FrontCard = styled(CardLayout)`
  backgroundImage: url(${cardSprite});
`;
const BackCard = styled(CardLayout)`
  border: 1px solid black;
  backgroundColor: tomato;
`;

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = { back: false }
    }
    flip = () => {
      const { back } = this.state;
      this.setState({
        back: !back,
      });
    }
    render() {
      const { back } = this.state;
      if (back) {
        return <BackCard {...this.props} onClick={this.flip} />;
      }
      return <FrontCard {...this.props} onClick={this.flip} />;
    }
};

const xPosition = n => `-${1 + 73 * n}px`;
const yPosition = {
  clubs: '-1px',
  spades: `-${1 + 98}px`,
  hearts: `-${1 + 98 * 2}px`,
  diamonds: `-${1 + 98 * 3}px`,
};
export const One = styled(Card)`
  backgroundPositionX: ${xPosition(0)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Two = styled(Card)`
  backgroundPositionX: ${xPosition(1)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Three = styled(Card)`
  backgroundPositionX: ${xPosition(2)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Four = styled(Card)`
  backgroundPositionX: ${xPosition(3)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Five = styled(Card)`
  backgroundPositionX: ${xPosition(4)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Six = styled(Card)`
  backgroundPositionX: ${xPosition(5)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Seven = styled(Card)`
  backgroundPositionX: ${xPosition(6)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Eight = styled(Card)`
  backgroundPositionX: ${xPosition(7)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Nine = styled(Card)`
  backgroundPositionX: ${xPosition(8)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Ten = styled(Card)`
  backgroundPositionX: ${xPosition(9)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Jack = styled(Card)`
  backgroundPositionX: ${xPosition(10)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const Queen = styled(Card)`
  backgroundPositionX: ${xPosition(11)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;

export const King = styled(Card)`
  backgroundPositionX: ${xPosition(12)};
  backgroundPositionY: ${props => yPosition[props.suit]}; 
`;
