var req1;
var req;
var no_of_Req = 0;
var data_global = [];
var Avail1_pet = /** @class */ (function () {
    function Avail1_pet() {
    }
    Avail1_pet.prototype.Details = function () {
        var complexPetsArray = [];
        var myPets = [
            { Species: "dog", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 5000 },
            { Species: "fish", Age: .5, Food_Type: "Fish_Food", Accessories: "Tank", price: 1000 },
            { Species: "cat", Age: 3, Food_Type: "Dry,Wet", Accessories: "Cages,crates", price: 20000 },
            { Species: "rat", Age: 1, Food_Type: "spieces", Accessories: "Cages", price: 4000 },
            { Species: "rabbit", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages", price: 5000 },
            { Species: "small_Animal", Age: 1, Food_Type: "Dry", Accessories: "Cages", price: 10000 },
            { Species: "dog", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 25000 },
            { Species: "dog", Age: 3, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 50000 },
            { Species: "dog", Age: 1, Food_Type: "Dry,Wet", Accessories: "Cages,Tag", price: 15000 },
            { Species: "cat", Age: 3, Food_Type: "Dry,Wet", Accessories: "Cages,crates", price: 2000 },
            { Species: "cat", Age: 2, Food_Type: "Dry,Wet", Accessories: "Cages,crates", price: 30000 },
            { Species: "cat", Age: 1, Food_Type: "Dry,Wet", Accessories: "Cages,crates", price: 10000 }
        ];
        for (var _i = 0, myPets_1 = myPets; _i < myPets_1.length; _i++) {
            var p = myPets_1[_i];
            complexPetsArray.push(p);
        }
        data_global = complexPetsArray;
    };
    return Avail1_pet;
}());
var Req1_detail = /** @class */ (function () {
    function Req1_detail() {
    }
    Req1_detail.prototype.req_status = function (enq) {
        console.log(data_global);
        this.enquiry_data = enq.trim();
        var count = 0;
        for (var i = 0; i < data_global.length; i++) {
            if (data_global[i] !== undefined && this.enquiry_data == data_global[i].Species) {
                if (count == 0) {
                    delete data_global[i];
                }
                count++;
            }
        }
        alert(this.enquiry_data + "-" + count);
    };
    return Req1_detail;
}());
function get_Result() {
    no_of_Req++;
    if (no_of_Req > 5) {
        alert("Maximum Request exceeded!!");
        return;
    }
    req1 = document.getElementById("Pname").value;
    req = req1.toLowerCase();
    var objRequest1 = new Req1_detail();
    objRequest1.req_status(req);
}
var pets_Array = new Avail1_pet();
pets_Array.Details();
