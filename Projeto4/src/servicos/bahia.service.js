import angular from 'angular';

class BahiaService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/bahia";
    }
    
    getBahias() {
        return this.$http.get(this.path);
    }
}

export default angular.module('services.bahia-service', [])
.service('bahiaService', BahiaService)
.name;