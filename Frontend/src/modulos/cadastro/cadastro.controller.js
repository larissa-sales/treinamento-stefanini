import { inherit } from "@uirouter/core";

export default class CadastroController {

  constructor(cadastroService) {
    var vm = this;
    this.name = 'Cadastro';
    vm.salvar = salvar;

    function salvar(){
        //debugger;
        vm.estado;
        cadastroService.salvar(vm.estado);
    }
  }

}
CadastroController.$inject = ['cadastroService'];
