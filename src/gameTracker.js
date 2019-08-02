//jshint esversion: 6
const arrayShuffle = require('array-shuffle');

// Manages all of the tracking and setup for the selector game to work.
// Includes updating boxes based on the click and checking to see if the clicked
// boxes are a matching pair.

export var boxTracker = [];

//Updates Box component's property to selected (if not previously selected)
export function updateBox(idxClicked){
  let boxes = this.state.boxes.map((box, idx) => {
    if (idxClicked === idx && !box.selected && !box.complete) {
      box.selected = !box.selected;
      boxTracker.push({item: box, index: idxClicked});
      return box;
    } else
      return box;
    }
  );
  this.setState({boxes});
}

//Determines if a pair are matching.
export function matchPair() {
  if (boxTracker[0].item.color === boxTracker[1].item.color) {
    let boxes = this.state.boxes.map((box, idx) => {
      box.selected = false;
      if (idx === boxTracker[0].index || idx === boxTracker[1].index) {
        box.complete = true;
        return box;
      } else
        return box;
      }
    );
    this.setState({boxes});
    boxTracker = [];
  } else {
    boxTracker = [];
    let boxes = this.state.boxes.map((box, idx) => {
      box.selected = false;
      return box;
    });
    this.setState({boxes});
  }
}



//Boxes to populate the game with. arrayShuffle randomly shuffles the array.
export const boxChoices = arrayShuffle([
  {
    color: "Chartreuse",
    complete: false,
    selected: false
  }, {
    color: "Chartreuse",
    complete: false,
    selected: false
  }, {
    color: "Crimson",
    complete: false,
    selected: false
  }, {
    color: "Crimson",
    complete: false,
    selected: false
  }, {
    color: "DarkOrange",
    complete: false,
    selected: false
  }, {
    color: "DarkOrange",
    complete: false,
    selected: false
  }, {
    color: "DarkOrchid",
    complete: false,
    selected: false
  }, {
    color: "DarkOrchid",
    complete: false,
    selected: false
  }, {
    color: "DarkTurquoise",
    complete: false,
    selected: false
  }, {
    color: "DarkTurquoise",
    complete: false,
    selected: false
  }, {
    color: "ForestGreen",
    complete: false,
    selected: false
  }, {
    color: "ForestGreen",
    complete: false,
    selected: false
  }, {
    color: "Fuchsia",
    complete: false,
    selected: false
  }, {
    color: "Fuchsia",
    complete: false,
    selected: false
  }, {
    color: "GoldenRod",
    complete: false,
    selected: false
  }, {
    color: "GoldenRod",
    complete: false,
    selected: false
  }
]);
