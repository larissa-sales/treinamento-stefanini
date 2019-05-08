import angular from 'angular';

class CadastroService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/parent";
    }

    getCadastros() {
        return this.$http.get(this.path);
    }

    salvar(estado){
        this.$http.post(this.path, estado);
    }
}

export default angular.module('services.cadastro-service', [])
.service('cadastroService', CadastroService)
.name;
