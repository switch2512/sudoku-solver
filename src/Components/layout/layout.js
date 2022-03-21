import React from 'react';
import './layout.css';
import Square from '../Square/Square.js'

export class Grid extends React.Component {
    render() {
      return(
        <div className='grid-container'>
          <div className='big-box'>
            <div className='grid-item'><Square x='1' y='1' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='1' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='1' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='1' y='2' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='2' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='2' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='1' y='3' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='3' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='3' z='1' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
          <div className='big-box'>
            <div className='grid-item'><Square x='4' y='1' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='1' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='1' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='4' y='2' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='2' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='2' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='4' y='3' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='3' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='3' z='2' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
          <div className='big-box'>
            <div className='grid-item'><Square x='7' y='1' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='1' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='1' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='7' y='2' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='2' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='2' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='7' y='3' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='3' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='3' z='3' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
          <div className='big-box'>
            <div className='grid-item'><Square x='1' y='4' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='4' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='4' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='1' y='5' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='5' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='5' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='1' y='6' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='6' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='6' z='4' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
          <div className='big-box'>
            <div className='grid-item'><Square x='4' y='4' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='4' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='4' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='4' y='5' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='5' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='5' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='4' y='6' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='6' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='6' z='5' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
          <div className='big-box'>
            <div className='grid-item'><Square x='7' y='4' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='4' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='4' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='7' y='5' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='5' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='5' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='7' y='6' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='6' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='6' z='6' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
          <div className='big-box'>
            <div className='grid-item'><Square x='1' y='7' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='7' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='7' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='1' y='8' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='8' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='8' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='1' y='9' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='2' y='9' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='3' y='9' z='7' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
          <div className='big-box'>
            <div className='grid-item'><Square x='4' y='7' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='7' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='7' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='4' y='8' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='8' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='8' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='4' y='9' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='5' y='9' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='6' y='9' z='8' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
          <div className='big-box'>
            <div className='grid-item'><Square x='7' y='7' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='7' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='7' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='7' y='8' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='8' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='8' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='7' y='9' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='8' y='9' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
            <div className='grid-item'><Square x='9' y='9' z='9' solverobj={this.props.solverobj} inputhandler={this.props.inputhandler} /></div>
          </div>
        </div>
      )
    }
  }

export default Grid;