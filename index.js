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
}
//calculates the number of years driven given an endDate ‣
//TypeError: driver.yearsExperienceFromBeginningOf is not a function
//    at Context.<anonymous> (test/indexTest.js:21:21)expect(driver.yearsExperienceFromBeginningOf//('2017')).to.equal(22);

