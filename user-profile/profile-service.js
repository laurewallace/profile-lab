"use strict";
function ProfileService($location) {
    const self = this;
    self.info = {
        name: "Bitsy",
        contact: "bitsyk@gmail.com",
        bio: "I'm an energetic puppy"
    }

    self.getInfo = () => {
        return self.info;
    }

    self.setInfo = (newInfo) => {
        self.info = newInfo;
        $location.path("/user-profile")
    }
    self.loadEdit = () => {
        $location.path("/edit-profile")
    }
}

angular
    .module("profileApp")
    .service("ProfileService", ProfileService)