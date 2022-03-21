import React from 'react';
import './App.css';
import Grid from '../layout/layout.js';
import Calculator from '../Calculator/Calculator.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    

    this.inputhandler = this.inputhandler.bind(this)
    this.calchandler = this.calchandler.bind(this)
  }

  solverobj = {
    '11': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '12': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '13': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '14': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '15': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '16': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '17': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '18': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '19': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '21': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '22': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '23': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '24': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '25': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '26': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '27': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '28': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '29': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '31': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '32': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '33': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '34': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '35': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '36': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '37': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '38': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '39': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '41': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '42': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '43': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '44': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '45': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '46': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '47': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '48': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '49': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '51': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '52': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '53': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '54': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '55': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '56': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '57': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '58': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '59': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '61': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '62': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '63': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '64': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '65': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '66': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '67': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '68': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '69': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '71': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '72': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '73': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '74': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '75': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '76': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '77': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '78': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '79': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '81': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '82': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '83': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '84': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '85': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '86': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '87': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '88': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '89': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '91': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '92': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '93': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '94': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '95': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '96': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '97': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '98': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    '99': ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  }

  inputhandler(location, num) {
    this.solverobj[location] = num;
  }

  calchandler() {
    for (let x=1; x < 10; x++) {
      for (let y=1; y < 10; y++) {
        if (typeof this.solverobj[String(x)+String(y)] === 'string'){
          //removing options from row
          let right = 9 - x;
          //removing options from right
          for (let i = 10 - right; i < 10; i++) {
            let index = this.solverobj[String(i)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index > -1) {
              this.solverobj[String(i)+String(y)].splice(index, 1);
            } else {
              continue
            }
          }
          //removing options from left
          for (let i = 1; i < x; i++) {
            let index = this.solverobj[String(i)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index > -1) {
              this.solverobj[String(i)+String(y)].splice(index, 1);
            } else {
              continue
            }
          }
          //removing options from column
          let below = 9 - y;
          //removing from below
          for (let i = 10 - below; i < 10; i++){
            let index = this.solverobj[String(x)+String(i)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index > -1) {
              this.solverobj[String(x)+String(i)].splice(index, 1);
            } else {
              continue
            }
          }
          //removing options from above
          for (let i = 1; i < y; i++) {
            let index = this.solverobj[String(x)+String(i)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index > -1) {
              this.solverobj[String(x)+String(i)].splice(index, 1);
            } else {
              continue
            }
          }
          //removing from quadrant
          //top left
          if (String(x)+String(y) === '11' || String(x)+String(y) === '41' || String(x)+String(y) === '71' || String(x)+String(y) === '14' || String(x)+String(y) === '44' || String(x)+String(y) === '74' || String(x)+String(y) === '17' || String(x)+String(y) === '47' || String(x)+String(y) === '77') {
            //21
            let index21 = this.solverobj[String(x+1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index21 > -1) {
              this.solverobj[String(x+1)+String(y)].splice(index21, 1);
            }
            //31
            let index31 = this.solverobj[String(x+2)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index31 > -1) {
              this.solverobj[String(x+2)+String(y)].splice(index31, 1);
            }
            //12
            let index12 = this.solverobj[String(x)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index12 > -1) {
              this.solverobj[String(x)+String(y+1)].splice(index12, 1);
            }
            //22
            let index22 = this.solverobj[String(x+1)+String(y + 1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index22 > -1) {
              this.solverobj[String(x+1)+String(y + 1)].splice(index22, 1);
            }
            //32
            let index32 = this.solverobj[String(x+2)+String(y + 1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index32 > -1) {
              this.solverobj[String(x+2)+String(y + 1)].splice(index32, 1);
            }
            //13
            let index13 = this.solverobj[String(x)+String(y + 2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index13 > -1) {
              this.solverobj[String(x)+String(y + 2)].splice(index13, 1);
            }
            //23
            let index23 = this.solverobj[String(x + 1)+String(y + 2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index23 > -1) {
              this.solverobj[String(x + 1)+String(y + 2)].splice(index23, 1);
            }
            //33
            let index33 = this.solverobj[String(x + 2)+String(y + 2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index33 > -1) {
              this.solverobj[String(x + 2)+String(y + 2)].splice(index33, 1);
            }
          }
          //top middle
          else if (String(x)+String(y) === 21 || String(x)+String(y) === 51 || String(x)+String(y) === 81 || String(x)+String(y) === 24 || String(x)+String(y) === 54 || String(x)+String(y) === 84 || String(x)+String(y) === 27 || String(x)+String(y) === 57 || String(x)+String(y) === 87) {
            //11
            //31
            //12
            //22
            //32
            //13
            //23
            //33
          }
          //top right
          //midle left
          //middle middle
          //middle right
          //bottom left
          //bottom middle
          //bottom right
        //Filling in the only option
        } else if (this.solverobj[String(x)+String(y)].length === 1) {
          this.solverobj[String(x)+String(y)] = String(this.solverobj[String(x)+String(y)][0]);
        }
      }
    }
    console.log(this.solverobj)
  }

  render() {
    return(
      <div>
        <h1>SODUKU SOLVER</h1>
        <Calculator calchandler={this.calchandler} />
        <Grid solverobj={this.solverobj} inputhandler={this.inputhandler} />
      </div>
    )
  }
}

export default App;
