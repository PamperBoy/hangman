import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ButtonList from '../components/ButtonList'
import GameProgress from '../components/GameProgress'


class GameContainer extends PureComponent {

  render() {
    return(
      <main>

        <h1>
        <GameProgress word={this.props.word} guesses={this.props.guesses}/>
        </h1>
        <ButtonList guesses={this.props.guesses}/>
      </main>
    )
  }
}

const mapStateToProps = ({hangman}) => ({
    word: hangman.word,
    guesses: hangman.guesses
  })

export default connect(mapStateToProps)(GameContainer)
