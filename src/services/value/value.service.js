export default class ValueService {
  constructor() {
    this.units = [
      {
        'unit': '2&pound;',
        'value': 0,
        'denomination': 2
      },
      {
        'unit': '1&pound;',
        'value': 0,
        'denomination': 1
      },
      {
        'unit': '50p',
        'value': 0,
        'denomination': 0.5
      },
      {
        'unit': '20p',
        'value': 0,
        'denomination': 0.2
      },
      {
        'unit': '2p',
        'value': 0,
        'denomination': 0.02
      },
      {
        'unit': '1p',
        'value': 0,
        'denomination': 0.01
      }
    ];
    this.getUnits();
  }

  getUnits() {
    return this.units;
  }
}
