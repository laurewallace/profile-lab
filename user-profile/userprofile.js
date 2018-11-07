"use strict";
const userProfile = {
    templateUrl: "user-profile/userprofile.html",
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.profile = ProfileService.getInfo();
        console.log(vm.profile)
    }]
}


angular
    .module("profileApp")
    .component("userProfile", userProfile);