import React from 'react';
import './Square.css';

export class Square extends React.Component {
    render() {
        var solvedvalue = "";
        if (typeof this.props.solverobj[this.props.x + this.props.y] === 'string') {
            solvedvalue = this.props.solverobj[this.props.x + this.props.y]
        } else {
        }
        return(
          <div className='grid-item'>
            <input onChange={e => this.props.inputhandler(this.props.x + this.props.y, e.target.value)} type='number' min='1' max='9' placeholder={solvedvalue} ></input>
          </div>
        )
      }
}

export default Square;