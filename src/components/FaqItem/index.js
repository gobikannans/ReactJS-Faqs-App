import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isReveal: false}

  onToggleClick = () => {
    this.setState(prevState => ({isReveal: !prevState.isReveal}))
  }

  buttonClick = () => {
    const {isReveal} = this.state
    const imgUrl = isReveal
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgAltText = isReveal ? 'minus' : 'plus'

    return (
      <button type="button" className="btn-style" onClick={this.onToggleClick}>
        <img src={imgUrl} alt={imgAltText} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isReveal} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isReveal) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="list-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.buttonClick()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
