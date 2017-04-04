export default class conversionService {

  constructor(OddService, ValueService) {
    this.oddService = OddService;
    this.valueService = ValueService;
  }

  currencyExchanger (exchange) {

    let exchangeHelper;
    let converted = this.valueService().getUnits;

    for (let i = 0; i < converted.length; i + 1) {
      denominationParser(exchange, i);
    }

    function denominationParser (exchange, i) {

      switch (converted[i].denomination) {

        case 1:

          converted[i].value = exchange >= 1 && this.oddService.isOdd(parseInt(exchange, 10)) ? converted[1].value = 1 : converted[1].value = 0;
          break;
        case 2:

          converted[i].value = parseInt(exchange / 2, 10);
          converted[i].value = Number.isFinite(converted[i].value) ? converted[i].value : 0;
          exchangeHelper = (exchange - parseInt(exchange, 10)).toFixed(2);
          break;

        case 0.01:

          converted[i].value = converted[i - 1].value * 2 !== parseFloat(exchangeHelper)
              .toFixed(2) * 100 ? converted[i].value = 1 : converted[i].value = 0;
          break;

        case 0.02:

          converted[i].value = parseInt(exchangeHelper / converted[i].denomination, 10);
          converted[i].value = Number.isFinite(converted[i].value) ? converted[i].value : 0;
          break;

        default:

          if (exchangeHelper >= converted[i].denomination) {

            converted[i].value = parseInt(exchangeHelper / converted[i].denomination, 10);
            converted[i].value = Number.isFinite(converted[i].value) ? converted[i].value : 0;

            exchangeHelper = (exchangeHelper - converted[i].denomination).toFixed(2);

          } else {

            converted[i].value = 0;

          }

      }

    }
  }
}
