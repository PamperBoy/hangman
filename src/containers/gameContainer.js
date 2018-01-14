import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ButtonList from '../components/ButtonList'
import GameProgress from '../components/GameProgress'

const images = [
  require('../assets/images/hang0.png'),
  require('../assets/images/hang1.png'),
  require('../assets/images/hang2.png'),
  require('../assets/images/hang3.png'),
  require('../assets/images/hang4.png'),
  require('../assets/images/hang5.png'),
  require('../assets/images/hang6.png'),
]

class GameContainer extends PureComponent {

  gameLost(word, guesses) {
    return this.wrongGuessCount(word, guesses) >= 6
  }

  wrongGuessCount(word, guesses) {
    return guesses.filter(letter => word.indexOf(letter) === -1).length
  }

  loadImage(word, guesses) {
    const number = this.wrongGuessCount(word, guesses)
    return images[number]
  }


  render() {
    const { word, guesses } = this.props
    return(
      <main>
        <img src={this.loadImage(word, guesses)} />
        <h1>
          <GameProgress
            word={word}
            guesses={guesses}
            lost={this.gameLost(word, guesses)}
            />
        </h1>
        <ButtonList guesses={guesses}
          lost={this.gameLost(word, guesses)}
          />
      </main>
    )
  }
}

const mapStateToProps = ({hangman}) => ({
    word: hangman.word,
    guesses: hangman.guesses
  })

export default connect(mapStateToProps)(GameContainer)
