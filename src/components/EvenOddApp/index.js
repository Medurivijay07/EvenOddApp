// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}
  onIncrement = () => {
    this.setState(prevState => {
      const randomnum = Math.ceil(Math.random() * 100)
      const newCount = prevState.count + randomnum
      if (newCount % 2 === 0) {
        return {count: newCount, isEven: true}
      }
      return {count: newCount, isEven: false}
    })
  }

  render() {
    const {count, isEven} = this.state
    const oddOrEven = isEven ? 'Even' : 'Odd'
    const buttonClass = isEven ? 'button' : 'clicked-btn'
    return (
      <div className="main-container">
        <div className="increment-card">
          <h1>Count {count}</h1>
          <p>Count is {oddOrEven}</p>
          <button
            type="button"
            onClick={this.onIncrement}
            className={`normal-button ${buttonClass}`}
          >
            Increment
          </button>
          <p>*Increase By Random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
