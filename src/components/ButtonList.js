import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import LetterButton from './LetterButton'
import guess from '../actions/guess'
import { connect } from 'react-redux'


const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i).toUpperCase())


function clickHandler(letter) {
  console.log(letter)
  this.props.guess(letter)
}


class ButtonList extends PureComponent {
	static propTypes = {

	}

	render() {
		return (
      <div>
        {alphabet.map((letter, index) =>
          <LetterButton
            guesses={this.props.guesses}
            letter={letter}
            index={index}
            disabled={this.props.lost}
            onClick={() => this.props.guess(letter)}/>
        )}
      </div>
		)
	}
}

const mapDispatchToProps = {
  guess
}

export default connect(null, mapDispatchToProps)(ButtonList)
