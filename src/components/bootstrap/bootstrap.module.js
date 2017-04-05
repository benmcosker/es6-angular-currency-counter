import BootstrapComponent from './bootstrap.component';
import '../footer/footer.module';
import '../header/header.module';
import '../../services/conversion/conversion.module';
import '../../services/regex/regex.module';
import '../../services/value/value.module';
import '../../views/home/home.module';

export default angular
  .module('tgh.component.bootstrap', [
    'tgh.component.footer',
    'tgh.component.header',
    'tgh.service.conversion',
    'tgh.service.regex',
    'tgh.service.value',
    'tgh.view.home'
  ])
  .directive('tghBootstrap', () => new BootstrapComponent());
