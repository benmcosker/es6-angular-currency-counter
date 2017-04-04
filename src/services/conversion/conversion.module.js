import conversionService from './conversion.service';
import OddService from '../../services/odd/odd.service';
import ValueService from '../../services/value/value.service';

export default angular
  .module('tgh.service.conversion', [OddService, ValueService])
  .service('conversionService', conversionService);
