import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import LetterButton from './LetterButton'
import guess from '../actions/guess'
import { connect } from 'react-redux'


const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i).toUpperCase())


class ButtonList extends PureComponent {
	static propTypes = {
		guesses: PropTypes.array.isRequired,
		lost: PropTypes.bool,
	}

	render() {
		return (
      <div className="button-list-container">
        {alphabet.map((letter, index) =>
          <LetterButton
            guesses={this.props.guesses}
            key={letter}
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
