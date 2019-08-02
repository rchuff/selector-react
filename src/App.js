import React, {Component} from 'react';
import Box from './Box';
import * as tracker from './gameTracker.js'


//Main component which manages state for the application.

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: tracker.boxChoices
    };
  }

//Called every time a box is clicked.
  showBox(boxClicked, idxClicked) {
    //First unmatched click
    if (tracker.boxTracker.length === 0) {
      tracker.updateBox.call(this, idxClicked);
    }
    //Second click
    else if (tracker.boxTracker.length === 1) {
      //If second click doesn't equal first click
      if (idxClicked !== tracker.boxTracker[0].index) {
        tracker.updateBox.call(this, idxClicked);
        //After 1 sec determine if clicks are a matching pair.
        setTimeout(tracker.matchPair.bind(this), 1000);
      }
    }
  }

  render() {
    let boxes = this.state.boxes.map((box, idx) => (
      <Box
        color={box.color}
        complete={box.complete}
        selected={box.selected}
        onSelect={this.showBox.bind(this, box, idx)}
        key={idx}
      />));

    return (<div>
      <h1>Selector Game</h1>
      {boxes}
    </div>);
  }
}


export default App;
