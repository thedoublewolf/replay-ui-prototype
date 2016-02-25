import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import SERVER from './constants/intervalconstant';

angular
  .module('app.core', ['ui.router'])
  .config(config)
  .constant('SERVER', SERVER)
;