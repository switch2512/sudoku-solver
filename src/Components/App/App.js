import React from 'react';
import './App.css';
import Grid from '../layout/layout.js';
import Calculator from '../Calculator/Calculator.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1
    }
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
    this.fixingmistakes()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.onlylogichandler()
    this.removinghandler()
    this.columnlogichandler()
    this.removinghandler()
    this.rowlogichandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.onlylogichandler()
    this.removinghandler()
    this.columnlogichandler()
    this.removinghandler()
    this.rowlogichandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.onlylogichandler()
    this.removinghandler()
    this.columnlogichandler()
    this.removinghandler()
    this.rowlogichandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.onlylogichandler()
    this.removinghandler()
    this.columnlogichandler()
    this.removinghandler()
    this.rowlogichandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.removinghandler()
    this.lastremaininghandler()
    this.versioncounter()
    console.log(this.solverobj)
    console.log(this.state.counter)
  }

  fixingmistakes() {
    for (let x=1; x < 10; x++) {
      for (let y=1; y<10; y++) {
        if (this.solverobj[String(x)+String(y)] === "") {
          this.solverobj[String(x)+String(y)] = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        } else {
          continue
        }
      }
    }
  }

  rowlogichandler() {
    for (let p=1; p<10; p++) {
      for (let y=1; y<10; y++) {
        let tracker = {};
        let counter = 1;
        for (let x=1; x<10; x++) {
          if (typeof this.solverobj[String(x)+String(y)] === 'string') {
            continue
          }
          let index = this.solverobj[String(x)+String(y)].indexOf(String(p))
          if (index > -1) {
            let location = String(x) + String(y);
            tracker[counter] = location
            counter ++;
          } else {
            continue
          }
        }
        if (Object.keys(tracker).length === 1){
          this.solverobj[tracker[1]] = String(p)
      } else {
        continue
      }
    }
  }}

  columnlogichandler() {
    for (let p=1; p<10; p++) {
      for (let x=1; x<10; x++) {
        let tracker = {};
        let counter = 1;
        for (let y=1; y<10; y++) {
          if (typeof this.solverobj[String(x)+String(y)] === 'string') {
            continue
          }
          let index = this.solverobj[String(x)+String(y)].indexOf(String(p))
          if (index > -1) {
            let location = String(x) + String(y);
            tracker[counter] = location
            counter ++;
          } else {
            continue
          }
        }
        if (Object.keys(tracker).length === 1){
          this.solverobj[tracker[1]] = String(p)
      } else {
        continue
      }
    }
  }}

  onlylogichandler() {
    for (let p = 1; p < 10; p++) {
      for (let i = 1; i < 10; i ++) {
        let tracker = {};
        //additions for quadrants
        let xaddition = 0;
        let yaddition = 0;
        if (i === 2) {
          xaddition = 3;
        } else if (i === 3) {
          xaddition = 6;
        } else if (i === 4) {
          xaddition = 0;
          yaddition = 3;
        } else if (i === 5) {
          xaddition = 3;
          yaddition = 3;
        } else if (i === 6) {
          xaddition = 6;
          yaddition = 3;
        } else if (i === 7) {
          xaddition = 0;
          yaddition = 6;
        } else if (i === 8) {
          xaddition = 3;
          yaddition = 6;
        } else if (i === 9) {
          xaddition = 6;
          yaddition = 6;
        }
        let counter = 1;
        for (let x = 1; x < 4; x++) {
          for (let y = 1; y < 4; y++) {
            if (typeof this.solverobj[String(x + xaddition)+String(y + yaddition)] === 'string') {
              continue
            }
            let index = this.solverobj[String(x + xaddition)+String(y + yaddition)].indexOf(String(p))
            if (index > -1) {
              let location = String(x + xaddition) + String(y + yaddition);
              tracker[counter] = location
              counter ++;
            } else {
              continue
            }
          }
        }
        if (Object.keys(tracker).length === 1){
          this.solverobj[tracker[1]] = String(p)
          console.log(tracker)
          console.log(p)
        } else {
          continue
        }
      }
    }
  }

  versioncounter() {
    let plus = this.state.counter + 1;
    this.setState({counter: plus}, alert("CLICK OK TO DOWNLOAD 1 TROJAN HORSE VIRUS AND SOLVE THE PUZZLE"))
  }

  lastremaininghandler() {
    for (let x=1; x < 10; x++) {
      for (let y=1; y < 10; y++) {
        if (this.solverobj[String(x)+String(y)].length === 1) {
          this.solverobj[String(x)+String(y)] = String(this.solverobj[String(x)+String(y)][0]);
        }
      }
    }
  }

  removinghandler() {
    for (let x=1; x < 10; x++) {
      for (let y=1; y < 10; y++) {
        if (typeof this.solverobj[String(x)+String(y)] === "string"){
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
          else if (String(x)+String(y) === '21' || String(x)+String(y) === '51' || String(x)+String(y) === '81' || String(x)+String(y) === '24' || String(x)+String(y) === '54' || String(x)+String(y) === '84' || String(x)+String(y) === '27' || String(x)+String(y) === '57' || String(x)+String(y) === '87') {
            //11
            let index11 = this.solverobj[String(x-1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index11 > -1) {
              this.solverobj[String(x-1)+String(y)].splice(index11, 1);
            }
            //31
            let index31 = this.solverobj[String(x+1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index31 > -1) {
              this.solverobj[String(x+1)+String(y)].splice(index31, 1);
            }
            //12
            let index12 = this.solverobj[String(x-1)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index12 > -1) {
              this.solverobj[String(x-1)+String(y+1)].splice(index12, 1);
            }
            //22
            let index22 = this.solverobj[String(x)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index22 > -1) {
              this.solverobj[String(x)+String(y+1)].splice(index22, 1);
            }
            //32
            let index32 = this.solverobj[String(x+1)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index32 > -1) {
              this.solverobj[String(x+1)+String(y+1)].splice(index32, 1);
            }
            //13
            let index13 = this.solverobj[String(x-1)+String(y+2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index13 > -1) {
              this.solverobj[String(x-1)+String(y+2)].splice(index13, 1);
            }
            //23
            let index23 = this.solverobj[String(x)+String(y+2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index23 > -1) {
              this.solverobj[String(x)+String(y+2)].splice(index23, 1);
            }
            //33
            let index33 = this.solverobj[String(x+1)+String(y+2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index33 > -1) {
              this.solverobj[String(x+1)+String(y+2)].splice(index33, 1);
            }
          }
          //top right
          else if (String(x)+String(y) === '31' || String(x)+String(y) === '61' || String(x)+String(y) === '91' || String(x)+String(y) === '34' || String(x)+String(y) === '64' || String(x)+String(y) === '94' || String(x)+String(y) === '37' || String(x)+String(y) === '67' || String(x)+String(y) === '97') {
            //11
            let index11 = this.solverobj[String(x-2)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index11 > -1) {
              this.solverobj[String(x-2)+String(y)].splice(index11, 1);
            }
            //21
            let index21 = this.solverobj[String(x-1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index21 > -1) {
              this.solverobj[String(x-1)+String(y)].splice(index21, 1);
            }
            //12
            let index12 = this.solverobj[String(x-2)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index12 > -1) {
              this.solverobj[String(x-2)+String(y+1)].splice(index12, 1);
            }
            //22
            let index22 = this.solverobj[String(x-1)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index22 > -1) {
              this.solverobj[String(x-1)+String(y+1)].splice(index22, 1);
            }
            //32
            let index32 = this.solverobj[String(x)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index32 > -1) {
              this.solverobj[String(x)+String(y+1)].splice(index32, 1);
            }
            //13
            let index13 = this.solverobj[String(x-2)+String(y+2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index13 > -1) {
              this.solverobj[String(x-2)+String(y+2)].splice(index13, 1);
            }
            //23
            let index23 = this.solverobj[String(x-1)+String(y+2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index23 > -1) {
              this.solverobj[String(x-1)+String(y+2)].splice(index23, 1);
            }
            //33
            let index33 = this.solverobj[String(x)+String(y+2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index33 > -1) {
              this.solverobj[String(x)+String(y+2)].splice(index33, 1);
            }
          }
          //midle left
          else if (String(x)+String(y) === '12' || String(x)+String(y) === '42' || String(x)+String(y) === '72' || String(x)+String(y) === '15' || String(x)+String(y) === '45' || String(x)+String(y) === '75' || String(x)+String(y) === '18' || String(x)+String(y) === '48' || String(x)+String(y) === '78') {
            //11
            let index11 = this.solverobj[String(x)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index11 > -1) {
              this.solverobj[String(x)+String(y-1)].splice(index11, 1);
            }
            //21
            let index21 = this.solverobj[String(x+1)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index21 > -1) {
              this.solverobj[String(x+1)+String(y-1)].splice(index21, 1);
            }
            //31
            let index31 = this.solverobj[String(x+2)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index31 > -1) {
              this.solverobj[String(x+2)+String(y-1)].splice(index31, 1);
            }
            //22
            let index22 = this.solverobj[String(x+1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index22 > -1) {
              this.solverobj[String(x+1)+String(y)].splice(index22, 1);
            }
            //32
            let index32 = this.solverobj[String(x+2)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index32 > -1) {
              this.solverobj[String(x+2)+String(y)].splice(index32, 1);
            }
            //13
            let index13 = this.solverobj[String(x)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index13 > -1) {
              this.solverobj[String(x)+String(y+1)].splice(index13, 1);
            }
            //23
            let index23 = this.solverobj[String(x+1)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index23 > -1) {
              this.solverobj[String(x+1)+String(y+1)].splice(index23, 1);
            }
            //33
            let index33 = this.solverobj[String(x+2)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index33 > -1) {
              this.solverobj[String(x+2)+String(y+1)].splice(index33, 1);
            }
          }
          //middle middle
          else if (String(x)+String(y) === '22' || String(x)+String(y) === '52' || String(x)+String(y) === '82' || String(x)+String(y) === '25' || String(x)+String(y) === '55' || String(x)+String(y) === '85' || String(x)+String(y) === '28' || String(x)+String(y) === '58' || String(x)+String(y) === '88') {
            //11
            let index11 = this.solverobj[String(x-1)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index11 > -1) {
              this.solverobj[String(x-1)+String(y-1)].splice(index11, 1);
            }
            //21
            let index21 = this.solverobj[String(x)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index21 > -1) {
              this.solverobj[String(x)+String(y-1)].splice(index21, 1);
            }
            //31
            let index31 = this.solverobj[String(x+1)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index31 > -1) {
              this.solverobj[String(x+1)+String(y-1)].splice(index31, 1);
            }
            //12
            let index12 = this.solverobj[String(x-1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index12 > -1) {
              this.solverobj[String(x-1)+String(y)].splice(index12, 1);
            }
            //32
            let index32 = this.solverobj[String(x+1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index32 > -1) {
              this.solverobj[String(x+1)+String(y)].splice(index32, 1);
            }
            //13
            let index13 = this.solverobj[String(x-1)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index13 > -1) {
              this.solverobj[String(x-1)+String(y+1)].splice(index13, 1);
            }
            //23
            let index23 = this.solverobj[String(x)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index23 > -1) {
              this.solverobj[String(x)+String(y+1)].splice(index23, 1);
            }
            //33
            let index33 = this.solverobj[String(x+1)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index33 > -1) {
              this.solverobj[String(x+1)+String(y+1)].splice(index33, 1);
            }
          }
          //middle right
          else if (String(x)+String(y) === '32' || String(x)+String(y) === '62' || String(x)+String(y) === '92' || String(x)+String(y) === '35' || String(x)+String(y) === '65' || String(x)+String(y) === '95' || String(x)+String(y) === '38' || String(x)+String(y) === '68' || String(x)+String(y) === '98') {
            //11
            let index11 = this.solverobj[String(x-2)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index11 > -1) {
              this.solverobj[String(x-2)+String(y-1)].splice(index11, 1);
            }
            //21
            let index21 = this.solverobj[String(x-1)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index21 > -1) {
              this.solverobj[String(x-1)+String(y-1)].splice(index21, 1);
            }
            //31
            let index31 = this.solverobj[String(x)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index31 > -1) {
              this.solverobj[String(x)+String(y-1)].splice(index31, 1);
            }
            //12
            let index12 = this.solverobj[String(x-2)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index12 > -1) {
              this.solverobj[String(x-2)+String(y)].splice(index12, 1);
            }
            //22
            let index22 = this.solverobj[String(x-1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index22 > -1) {
              this.solverobj[String(x-1)+String(y)].splice(index22, 1);
            }
            //13
            let index13 = this.solverobj[String(x-2)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index13 > -1) {
              this.solverobj[String(x-2)+String(y+1)].splice(index13, 1);
            }
            //23
            let index23 = this.solverobj[String(x-1)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index23 > -1) {
              this.solverobj[String(x-1)+String(y+1)].splice(index23, 1);
            }
            //33
            let index33 = this.solverobj[String(x)+String(y+1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index33 > -1) {
              this.solverobj[String(x)+String(y+1)].splice(index33, 1);
            }
          }
          //bottom left
          else if (String(x)+String(y) === '13' || String(x)+String(y) === '43' || String(x)+String(y) === '73' || String(x)+String(y) === '16' || String(x)+String(y) === '46' || String(x)+String(y) === '76' || String(x)+String(y) === '19' || String(x)+String(y) === '49' || String(x)+String(y) === '79') {
            //11
            let index11 = this.solverobj[String(x)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index11 > -1) {
              this.solverobj[String(x)+String(y-2)].splice(index11, 1);
            }
            //21
            let index21 = this.solverobj[String(x+1)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index21 > -1) {
              this.solverobj[String(x+1)+String(y-2)].splice(index21, 1);
            }
            //31
            let index31 = this.solverobj[String(x+2)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index31 > -1) {
              this.solverobj[String(x+2)+String(y-2)].splice(index31, 1);
            }
            //12
            let index12 = this.solverobj[String(x)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index12 > -1) {
              this.solverobj[String(x)+String(y-1)].splice(index12, 1);
            }
            //22
            let index22 = this.solverobj[String(x+1)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index22 > -1) {
              this.solverobj[String(x+1)+String(y-1)].splice(index22, 1);
            }
            //32
            let index32 = this.solverobj[String(x+2)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index32 > -1) {
              this.solverobj[String(x+2)+String(y-1)].splice(index32, 1);
            }
            //23
            let index23 = this.solverobj[String(x+1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index23 > -1) {
              this.solverobj[String(x+1)+String(y)].splice(index23, 1);
            }
            //33
            let index33 = this.solverobj[String(x+2)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index33 > -1) {
              this.solverobj[String(x+2)+String(y)].splice(index33, 1);
            }
          }
          //bottom middle
          else if (String(x)+String(y) === '23' || String(x)+String(y) === '53' || String(x)+String(y) === '83' || String(x)+String(y) === '26' || String(x)+String(y) === '56' || String(x)+String(y) === '86' || String(x)+String(y) === '29' || String(x)+String(y) === '59' || String(x)+String(y) === '89') {
            //11
            let index11 = this.solverobj[String(x-1)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index11 > -1) {
              this.solverobj[String(x-1)+String(y-2)].splice(index11, 1);
            }
            //21
            let index21 = this.solverobj[String(x)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index21 > -1) {
              this.solverobj[String(x)+String(y-2)].splice(index21, 1);
            }
            //31
            let index31 = this.solverobj[String(x+1)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index31 > -1) {
              this.solverobj[String(x+1)+String(y-2)].splice(index31, 1);
            }
            //12
            let index12 = this.solverobj[String(x-1)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index12 > -1) {
              this.solverobj[String(x-1)+String(y-1)].splice(index12, 1);
            }
            //22
            let index22 = this.solverobj[String(x)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index22 > -1) {
              this.solverobj[String(x)+String(y-1)].splice(index22, 1);
            }
            //32
            let index32 = this.solverobj[String(x+1)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index32 > -1) {
              this.solverobj[String(x+1)+String(y-1)].splice(index32, 1);
            }
            //13
            let index13 = this.solverobj[String(x-1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index13 > -1) {
              this.solverobj[String(x-1)+String(y)].splice(index13, 1);
            }
            //33
            let index33 = this.solverobj[String(x+1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index33 > -1) {
              this.solverobj[String(x+1)+String(y)].splice(index33, 1);
            }
          }
          //bottom right
          else if (String(x)+String(y) === '33' || String(x)+String(y) === '63' || String(x)+String(y) === '93' || String(x)+String(y) === '36' || String(x)+String(y) === '66' || String(x)+String(y) === '96' || String(x)+String(y) === '39' || String(x)+String(y) === '69' || String(x)+String(y) === '99') {
            //11
            let index11 = this.solverobj[String(x-2)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index11 > -1) {
              this.solverobj[String(x-2)+String(y-2)].splice(index11, 1);
            }
            //21
            let index21 = this.solverobj[String(x-1)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index21 > -1) {
              this.solverobj[String(x-1)+String(y-2)].splice(index21, 1);
            }
            //31
            let index31 = this.solverobj[String(x)+String(y-2)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index31 > -1) {
              this.solverobj[String(x)+String(y-2)].splice(index31, 1);
            }
            //12
            let index12 = this.solverobj[String(x-2)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index12 > -1) {
              this.solverobj[String(x-2)+String(y-1)].splice(index12, 1);
            }
            //22
            let index22 = this.solverobj[String(x-1)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index22 > -1) {
              this.solverobj[String(x-1)+String(y-1)].splice(index22, 1);
            }
            //32
            let index32 = this.solverobj[String(x)+String(y-1)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index32 > -1) {
              this.solverobj[String(x)+String(y-1)].splice(index32, 1);
            }
            //13
            let index13 = this.solverobj[String(x-2)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index13 > -1) {
              this.solverobj[String(x-2)+String(y)].splice(index13, 1);
            }
            //23
            let index23 = this.solverobj[String(x-1)+String(y)].indexOf(this.solverobj[String(x)+String(y)]);
            if (index23 > -1) {
              this.solverobj[String(x-1)+String(y)].splice(index23, 1);
            }
          }

        //Filling in the only option
        } else {
          continue
        }
      }
    }
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
