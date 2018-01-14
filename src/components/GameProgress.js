import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

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

  gameLost(word, guesses) {
    const wrongGuesses = this.wrongGuessCount(word, guesses)
    if (wrongGuesses >= 6) {
      return "YOU LOSE!"
    }
    return wrongGuesses
  }

  wrongGuessCount(word, guesses) {
    return guesses.filter(letter => word.indexOf(letter) === -1).length
  }

  isWinner(word, guesses) {
    return this.showGuess(word, guesses).replace(/\s/g, '') ===  word
  }

  render() {
    const { word, guesses } = this.props

    return(
      <div>
        <p>{this.gameLost(word, guesses)}</p>
        {this.showGuess(word, guesses)}
      </div>
    )
  }
}

export default GameProgress
