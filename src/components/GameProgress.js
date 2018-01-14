import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './GameProgress.css'

class GameProgress extends PureComponent {

  showGuess(word, guesses) {
    const splitWord = word.split("")
    const blank = "_"

    return splitWord.map(letter => {
      if (guesses.join("").includes(letter)) {
        return letter
      } else {
        return blank
      }
    }).join(" ")
  }

  isWinner(word, guesses) {
    return this.showGuess(word, guesses).replace(/\s/g, '') ===  word
  }


  render() {
    const { word, guesses } = this.props

    return(
      <div>
        <h2 className="win">{this.isWinner(word, guesses) && "YOU WIN!"}</h2>
        <h1 className="hangman-word">{this.showGuess(word, guesses)}</h1>
      </div>
    )
  }
}

export default GameProgress
