import { inherit } from "@uirouter/core";

export default class ParentController {

  constructor(parentService) {
    var vm = this;
    this.name = 'Parent';

    init();

    function init(){
      parentService.getParents().then(function abc(resp) {
        vm.parents = resp.data;
      });
    }
  }
  
}
ParentController.$inject = ['parentService'];
