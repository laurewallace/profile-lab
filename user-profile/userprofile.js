"use strict";
const userProfile = {
    templateUrl: "user-profile/userprofile.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.info = ProfileService.getInfo();
        vm.loadEdit = () => {
            ProfileService.loadEdit();
        }
    }]
};


angular
    .module("profileApp")
    .component("userProfile", userProfile);