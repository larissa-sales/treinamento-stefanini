import { inherit } from "@uirouter/core";

export default class BahiaController {

  constructor(bahiaService) {
    var vm = this;
    this.name = 'Bahia';

    init();

    function init(){
      bahiaService.getBahias().then(function abc(resp) {
        vm.bahias = resp.data;
      });
    }
  }
  
}
BahiaController.$inject = ['bahiaService'];
