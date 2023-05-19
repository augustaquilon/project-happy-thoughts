/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const ThoughtsList = ({ loading, thoughtsList, handleLike }) => {
  if (loading) {
    return (
      <div className="loading-div">
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_sVtsEmSVTI.json"
          style={{ height: '300px', width: '300px' }}>
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        <h1>Loading in progress...</h1>
      </div>
    )
  }
  return (
    <section className="thought-section">
      {thoughtsList.map((thought) => (
        <div className="single-thought" key={thought._id}>
          <h4>{thought.message}</h4>
          <div className="thought-details">
            <div className="likes-wrapper">
              <button
                className={thought.hearts === 0 ? 'heart-button-nolikes' : 'heart-button'}
                type="button"
                onClick={() => handleLike(thought._id)}>
                  ❤️
              </button>
              <span>x {thought.hearts}</span>
            </div>
            <span className="time">{formatDistanceToNow(
              new Date(thought.createdAt),
              Date.now(),
              { addSuffix: true }
            )}
                &nbsp;ago
            </span>
          </div>
        </div>
      )).reverse()}
    </section>
  );
}