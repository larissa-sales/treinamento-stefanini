import { inherit } from "@uirouter/core";

export default class CadastroController {

  constructor(cadastroService) {
    var vm = this;
    this.name = 'Cadastro';

    init();

    function init(){
      cadastroService.getCadastros().then(function abc(resp) {
        vm.cadastros = resp.data;
      });
    }
  }

}
CadastroController.$inject = ['cadastroService'];
