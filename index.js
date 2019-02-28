let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

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
    const x = this.endingLocation.horizontal - this.beginningLocation.horizontal;
    
  }
  
  //blocksTravelled() {
  //  const horizontal = this.endingLocation.horizontal - this.beginningLocation.horizontal;
  //  const vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
  //  return horizontal + vertical;
  //}
}
