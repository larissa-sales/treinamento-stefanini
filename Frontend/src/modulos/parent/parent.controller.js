import { inherit } from "@uirouter/core";

export default class ParentController {

  constructor(parentService) {
    var vm = this;
    this.name = 'Parent';
    vm.deletar = deletar;

    init();

    function init(){
      parentService.getParents().then(function abc(resp) {
        vm.parents = resp.data;
      });
    }

    function deletar(){
        debugger;
        vm.parents;
        parentService.deletar(vm.parents);
    }
  }

}
ParentController.$inject = ['parentService'];
