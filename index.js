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
    const horizontal = this.endingLocation.horizontal - this.beginningLocation.horizontal;
    const vertical = this.endLocation.vertical - this.beginningLocation.vertical;
    return horizontal + vertical;
  }
}
