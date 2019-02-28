class Driver {
  constructor(name, year) {
    this.name = name;
    this.startDate = new Date(year);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    if (this.startingLocation === "Park") {
      return this.endingLocation.vertical - this.beginningLocation.vertical;
    } else {
      return this.beginningLocation.vertical - this.endingLocation.vertical;
    }
    
  }
}


// blocksTravelled
// calculates the number of blocksTravelled ‣
// TypeError: route.blocksTravelled is not a function
//     at Context.<anonymous> (test/indexTest.js:35:20)let route = new Route(
//   { horizontal: 'Park', vertical: '34' },
//   { horizontal: 'Park', vertical: '45' }
// );
// expect(route.blocksTravelled()).to.equal(11);