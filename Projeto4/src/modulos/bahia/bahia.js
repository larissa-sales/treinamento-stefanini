import angular from 'angular';
import uirouter from 'angular-ui-router';

import BahiaController from './bahia.controller';

import bahiaService from '../../servicos/bahia.service';

export default angular.module('myApp.bahia', [uirouter, bahiaService])
  .controller('BahiaController', BahiaController)
  .name;

  