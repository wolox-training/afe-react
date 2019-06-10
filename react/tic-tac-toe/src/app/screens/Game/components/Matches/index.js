import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Matches = (props) => (
  props.spinner
    ? (
      <table>
        <tbody>
          <tr>
            <th>Player one</th>
            <th>Player two</th>
            <th>Winner</th>
          </tr>
          {props.matches.map(data => (
            <tr key={data.id}>
              <td>{data.player_one}</td>
              <td>{data.player_two}</td>
              <td>{data.winner}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    )
    : (
      <div className={styles.spinner}>
        <Spinner name="three-bounce" />
      </div>
    )
);

Matches.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  matches: PropTypes.array
};

export default Matches;
