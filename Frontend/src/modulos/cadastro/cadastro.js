import angular from 'angular';
import uirouter from 'angular-ui-router';

import CadastroController from './cadastro.controller';

import cadastroService from '../../servicos/cadastro.service';

export default angular.module('myApp.cadastro', [uirouter, cadastroService])
  .controller('CadastroController', CadastroController)
  .name;
