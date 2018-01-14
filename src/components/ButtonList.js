import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import LetterButton from './LetterButton'

const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i))


function guess(letter) {
  console.log(letter)
}


class ButtonList extends PureComponent {
	static propTypes = {

	}

	render() {
		return (
      <div>
        {alphabet.map((letter, index) =>
          <LetterButton letter={letter} index={index} onClick={guess.bind(this, letter)}/>
        )}
      </div>
		)
	}
}

export default ButtonList
