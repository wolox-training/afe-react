import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMatches } from '../../../redux/matches/actions';

import styles from './styles.module.scss';
import Board from './components/Board';
import Matches from './components/Matches';
import { calculateWinner } from './utils';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true
  };

  componentDidMount() {
    const { getMatches } = this.props;
    getMatches();
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
    const { xIsNext } = this.state;
    const { matches } = this.props;
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
      <div className={styles.game}>
        <Matches matches={matches} isLoading={matches.length !== 0} />
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
    );
  }
}

const mapStateToProps = state => ({
  matches: state.matches.matches
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(fetchMatches())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
