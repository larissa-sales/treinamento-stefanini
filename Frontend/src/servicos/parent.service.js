import angular from 'angular';

class ParentService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/parent";
    }
    
    getParents() {
        return this.$http.get(this.path);
    }
}

export default angular.module('services.parent-service', [])
.service('parentService', ParentService)
.name;