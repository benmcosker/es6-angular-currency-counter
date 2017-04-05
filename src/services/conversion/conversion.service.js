export default class ConversionService {

  constructor(ValueService) {

    this.ValueService = ValueService;
    this.currencyExchanger();
  }

  currencyExchanger(exchange) {

    let exchangeHelper;
    let converted = Array.from(this.ValueService.getUnits());

    for (let i of converted) {
      denominationParser(exchange, i);
    }

    function denominationParser (exchange, i) {

      function isOdd(n) {
        return Math.abs(n % 2) === 1;
      }

      switch (i.denomination) {

        case 1:

          i.value = exchange >= 1 && isOdd(parseInt(exchange, 10)) ? i.value = 1 : i.value = 0;
          break;
        case 2:

          i.value = parseInt(exchange / 2, 10);
          i.value = Number.isFinite(i.value) ? i.value : 0;
          exchangeHelper = (exchange - parseInt(exchange, 10)).toFixed(2);
          break;

        case 0.01:

          i.value = [i - 1].value * 2 !== parseFloat(exchangeHelper)
              .toFixed(2) * 100 ? i.value = 1 : i.value = 0;
          break;

        case 0.02:

          i.value = parseInt(exchangeHelper / i.denomination, 10);
          i.value = Number.isFinite(i.value) ? i.value : 0;
          break;

        default:

          if (exchangeHelper >= i.denomination) {

            i.value = parseInt(exchangeHelper / i.denomination, 10);
            i.value = Number.isFinite(i.value) ? i.value : 0;

            exchangeHelper = (exchangeHelper - i.denomination).toFixed(2);

          } else {

            i.value = 0;

          }

      }

    }
  }
}
