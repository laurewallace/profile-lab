"use strict"

angular
    .module("profileApp", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/edit-profile", {
                template: "<edit-profile></edit-profile>"
            })
            .when("/user-profile", {
                template: "<user-profile></user-profile>"
            })
    }])
