export default class HomeComponent {
  constructor() {
    this.template = require('./home.component.html');
    this.restrict = 'E';
    this.controller = [HomeComponentController];
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {
      regex: '='
    };
  }
}

class HomeComponentController {
  constructor (ValueService, conversionService) {
    'ngInject';

    this.valueService = ValueService;
    this.conversionService = conversionService;
    /* eslint-disable no-console */
    console.log(this.conversionService().getUnits());
    /* eslint-enable no-console */
  }

  validateInput(form) {

    let vm = this;
    let currencyEntered = form.$modelValue;

    vm.converted = this.valueService().getUnits();

    if (currencyEntered.indexOf('£') !== -1 && currencyEntered.indexOf('p') === -1) {

      currencyEntered = currencyEntered.replace('£', '');
      this.displayResults(currencyEntered, form);

    } else if (currencyEntered.indexOf('p') !== -1 || currencyEntered.indexOf('£') !== -1) {

      currencyEntered = currencyEntered.replace('p', '');
      currencyEntered = currencyEntered.replace('£', '');
      currencyEntered *= 0.01;
      this.displayResults(currencyEntered, form);

    } else if (currencyEntered.match(vm.regex)) {

      currencyEntered = parseFloat(currencyEntered);
      currencyEntered *= 0.01;
      this.displayResults(currencyEntered, form);

    } else {

      form.$setValidity('pattern', false);
      this.displayForm = false;

    }

  }

  displayResults(input, form) {

    if (isNaN(input)) {
      this.setFormToFalse(form);
    } else {
      this.total = parseInt(input * 100, 0);
      this.displayForm = true;

      this.convertCurrency(input);
    }

  }

  convertCurrency (input) {
    this.conversionService().currencyExchanger(input);
  }

  resetForm (form) {
    this.displayForm = false;
    this.amount = '';
    this.setFormToFalse(form);
  }

  setFormToFalse (form) {
    form.$setValidity('pattern', false);
    this.displayForm = false;
  }
}
