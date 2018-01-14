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
        <p>{this.props.lost && "YOU LOSE!"}</p>
        <p>{this.isWinner(word, guesses) && "YOU WIN!"}</p>
        {this.showGuess(word, guesses)}
      </div>
    )
  }
}

export default GameProgress
