"use strict";
function ProfileService() {
    const self = this;
    self.info = {
        name: "Bitsy",
        contact: "bitsyk@gmail.com",
        bio: "I'm an energetic puppy"
    }

    self.getInfo = () => {
        return self.info;
    }

    self.saveInfo = () => {

    }
}

angular
    .module("profileApp")
    .service("ProfileService", ProfileService)