"use strict";
const editProfile = {
    templateUrl: "edit-profile/editprofile.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.info = angular.copy(ProfileService.getInfo());
        console.log(vm.info)
        vm.saveInfo = (newInfo) => {
            ProfileService.setInfo(newInfo);
        };
    }]
}


angular
    .module("profileApp")
    .component("editProfile", editProfile);