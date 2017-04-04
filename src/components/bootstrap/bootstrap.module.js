import BootstrapComponent from './bootstrap.component';
import '../footer/footer.module';
import '../header/header.module';
import '../../services/conversion/conversion.module';
import '../../services/odd/odd.module';
import '../../services/regex/regex.module';
import '../../views/home/home.module';

export default angular
  .module('tgh.component.bootstrap', [
    'tgh.component.footer',
    'tgh.component.header',
    'tgh.service.odd',
    'tgh.service.regex',
    'tgh.service.conversion',
    'tgh.view.home'
  ])
  .directive('tghBootstrap', () => new BootstrapComponent());
