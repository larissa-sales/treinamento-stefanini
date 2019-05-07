'use strict';

import angular from 'angular'
import uirouter from 'angular-ui-router';
var blockUI = require('angular-block-ui');

import 'bootstrap';
import './scss/app.scss';

import routing from './app.config';

import parent from './modulos/parent/parent.js';
import home from './modulos/home/home.js';
//import cadastro from '.modulos/cadastro/cadastro.js';

angular
.module('myApp', [
  uirouter,
  blockUI,
  parent,
  home
  //cadastro
])
.config(routing);
