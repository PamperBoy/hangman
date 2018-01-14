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

  isWinner(word, guesses) {
    return this.showGuess(word, guesses).replace(/\s/g, '') ===  word
  }


  render() {
    const { word, guesses } = this.props

    return(
      <div>
        <h1 className="hangman-word">{this.isWinner(word, guesses) && "YOU WIN!"}</h1>
        <h1 className="hangman-word">{this.showGuess(word, guesses)}</h1>
      </div>
    )
  }
}

export default GameProgress
