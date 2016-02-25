import angular from 'angular';
import '../app-core/index';

import IntervalController from './controllers/interval.controller';
import IntervalService from './services/interval.service';
import IntervalDirective from './directives/interval.directive';

angular
  .module('app.content', ['app.core'])
  .controller('IntervalController', IntervalController)
  .service('IntervalService', IntervalService)
  .directive('IntervalDirective', IntervalDirective)
;