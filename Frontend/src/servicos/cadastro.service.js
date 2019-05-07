import angular from 'angular';

class CadastroService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/cadastro";
    }

    getCadastros() {
        return this.$http.get(this.path);
    }
}

export default angular.module('services.cadastro-service', [])
.service('cadastroService', CadastroService)
.name;
