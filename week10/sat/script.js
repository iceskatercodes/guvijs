var Availability = /** @class */ (function () {
    function Availability() {
        this.petsData = [];
        this.typeOfPets = [];
    }
    Availability.prototype.insertPets = function (petsInfo) {
        this.petsData.push(petsInfo);
        var available = false;
        for (var petType in this.typeOfPets) {
            if (petsInfo.petType === this.typeOfPets[petType]) {
                available = true;
            }
        }
        if (!available) {
            this.typeOfPets.push(petsInfo.petType);
        }
    };
    Availability.prototype.getAllPetsData = function () {
        return this.petsData;
    };
    Availability.prototype.getCountOfAvailablePets = function () {
        var _this = this;
        var availablePets = {};
        var _loop_1 = function (pet) {
            var Type = this_1.petsData.filter(function (data) {
                return data.petType == _this.typeOfPets[pet];
            });
            availablePets[this_1.typeOfPets[pet]] = Type.length;
        };
        var this_1 = this;
        for (var pet in this.typeOfPets) {
            _loop_1(pet);
        }
        return availablePets;
    };
    return Availability;
}());
var Requests = /** @class */ (function () {
    function Requests() {
        this.requests = [];
    }
    Requests.prototype.insertRequest = function (request) {
        this.requests.push(request);
    };
    Requests.prototype.topFiveEnquiryStatus = function (availClass) {
        var topEnquiries = [];
        var availablePets = availClass.getAllPetsData();
        var _loop_2 = function (i) {
            var requestedData = this_2.requests[i];
            var petAvailability = true;
            var _loop_3 = function (request) {
                var value = availablePets.filter(function (item) {
                    return item.petType == requestedData.enquiries[request];
                });
                if (value.length === 0) {
                    petAvailability = false;
                    return "break";
                }
            };
            for (var request in requestedData.enquiries) {
                var state_1 = _loop_3(request);
                if (state_1 === "break")
                    break;
            }
            if (petAvailability) {
                this_2.requests[i].status = "Available";
            }
            else {
                this_2.requests[i].status = "Not Available";
            }
            topEnquiries.push(this_2.requests[i]);
        };
        var this_2 = this;
        for (var i = 0; i < 5; i++) {
            _loop_2(i);
        }
        return topEnquiries;
    };
    return Requests;
}());
var pets = new Availability();
pets.insertPets({ petType: "Cat", petAge: 4, petColor: "Brown", petGender: "male" });
pets.insertPets({ petType: "Dog", petAge: 7, petColor: "Black", petGender: "female" });
pets.insertPets({ petType: "Dog", petAge: 3, petColor: "white", petGender: "female" });
pets.insertPets({ petType: "Dog", petAge: 10, petColor: "black", petGender: "male" });
pets.insertPets({ petType: "Parrot", petAge: 2, petColor: "Green", petGender: "female" });
pets.insertPets({ petType: "Cat", petAge: 3, petColor: "white", petGender: "male" });
pets.insertPets({ petType: "Cat", petAge: 8, petColor: "Brown", petGender: "male" });
pets.insertPets({ petType: "Parrot", petAge: 11, petColor: "Green", petGender: "female" });
pets.insertPets({ petType: "Parrot", petAge: 5, petColor: "Green", petGender: "male" });
pets.insertPets({ petType: "Dog", petAge: 6, petColor: "Gold", petGender: "female" });
var enquiry = new Requests();
enquiry.insertRequest({ enquiries: ["Dog", "Parrot"], status: "On Hold" });
enquiry.insertRequest({ enquiries: ["Dog", "Cat"], status: "On Hold" });
enquiry.insertRequest({ enquiries: ["Cat"], status: "On Hold" });
enquiry.insertRequest({ enquiries: ["snake"], status: "On Hold" });
enquiry.insertRequest({ enquiries: ["Rabbit", "Parrot"], status: "On Hold" });
console.log("--------All the pets Data--------");
console.log(pets.getAllPetsData());
console.log("---------------------------------");
console.log("--------Count of each pet--------");
console.log(pets.getCountOfAvailablePets());
console.log("---------------------------------");
console.log("---------Top Five Enquiry---------");
console.log(enquiry.topFiveEnquiryStatus(pets));
console.log("----------------------------------");