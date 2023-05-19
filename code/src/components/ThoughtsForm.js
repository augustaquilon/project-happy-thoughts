/* eslint-disable linebreak-style */
import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const ThoughtsForm = ({ newThought, onNewThoughtChange, handleFormSubmit }) => {
  // disabling the submit button if characters exceed maximum allowed
  const isSubmitButtonDisabled = newThought.length < 4 || newThought.length > 140;
  // display warning if characters exceed maximum allowed, otherwise display amount of characters
  const characterWarning = () => {
    if (newThought.length > 140) {
      return (<p>Warning! Too many characters...</p>)
    } else {
      return (
        <div className="character-div">
          <p>{newThought.length}/140</p>
        </div>
      )
    }
  }
  return (
    <section className="form-section">
      <form onSubmit={handleFormSubmit}>
        <label className="label" htmlFor="new-thought">
          <h1>Welcome to Happy Thoughts.</h1>
          <h2>Type a new thought below.</h2>
          <textarea
            value={newThought}
            onChange={onNewThoughtChange}
            placeholder="What is making you happy right now?"
            // defining a range of maximum rows and characters per row
            rows="4"
            cols="40"
            id="new-thought" />
          {characterWarning()}
        </label>
        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitButtonDisabled}>
        🍄 Send Happy Thought 🍄
        </button>
        <div className="form-animation">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_WnTNaLqbIz.json"
            style={{ height: '150px', width: '150px' }}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </div>
      </form>
    </section>
  )
}