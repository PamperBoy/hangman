import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class LetterButton extends PureComponent {
	static propTypes = {
    letter: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
	}

	render() {
		return (
      <button className="letter-button"
              key={this.props.index}
              id={this.props.letter}
              disabled=""
              onClick={this.props.onClick}>
              {this.props.letter}
                  </button>
    )
	}
}

export default LetterButton
