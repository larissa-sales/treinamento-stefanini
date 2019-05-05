import angular from 'angular';
import uirouter from 'angular-ui-router';

import ParentController from './parent.controller';

import parentService from '../../servicos/parent.service';

export default angular.module('myApp.parent', [uirouter, parentService])
  .controller('ParentController', ParentController)
  .name;

  