export default class RegexService {
  constructor() {
    this.regex = /^[£|/.|[0]*]?0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9][p]*$/;
    this.getRegex();
  }

  getRegex() {
    return this.regex;
  }
}
