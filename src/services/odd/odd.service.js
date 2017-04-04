export default class OddService {
  constructor() {
  }

  isOdd(n) {
    return Math.abs(n % 2) === 1;
  }
}
