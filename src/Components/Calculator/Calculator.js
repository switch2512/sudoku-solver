import React from 'react';
import './Calculator.css';

export class Calculator extends React.Component {
    render() {
        return(
            <div className='calcbutton'>
                <button onClick={() => this.props.calchandler()} >Calculate</button>
            </div>
        )
    }
}

export default Calculator