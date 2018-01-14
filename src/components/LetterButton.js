import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './LetterButton.css'


class LetterButton extends PureComponent {
	static propTypes = {
    letter: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
	}

	render() {
		const { index, letter, onClick, disabled, guesses} = this.props
    const buttonDisabled = (disabled || guesses.includes(letter))
		return (

      <button
				className="letter-button"
        key={index}
        id={letter}
        disabled={buttonDisabled}
        onClick={onClick}
				>
        	{letter}
        </button>
    )
	}
}

export default LetterButton
