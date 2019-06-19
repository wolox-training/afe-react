import React, { Component, Fragment } from 'react';

import matchesService from '../../../services';

import styles from './styles.module.scss';
import Board from './components/Board';
import Matches from './components/Matches';
// import Topbar from './components/Topbar';
import { calculateWinner } from './utils';


class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true,
    matches: [],
    isLoading: false
  };

  async componentDidMount() {
    const response = await matchesService.getMatches();
    if (response.ok) {
      this.setState({
        matches: response.data,
        isLoading: true
      });
    } else {
      console.error(response);
    }
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo = step =>
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const { isLoading, matches, xIsNext } = this.state;
    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    return (
      <Fragment>
        {/* <Topbar /> */}
        <div className={styles.game}>
          <Matches matches={matches} isLoading={isLoading} />
          <div className={styles.gameBoard}>
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className={styles.gameInfo}>
            {status}
            <ol>{moves}</ol>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Game;
