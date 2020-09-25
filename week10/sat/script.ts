interface petShopData{
    petType: string;
    petAge: number;
    petColor: string;
    petGender: string;
    
}

class Availability{
    petsData: Array<petShopData>
    typeOfPets: Array<string>

    constructor(){
        this.petsData = []
        this.typeOfPets = []
    }

    insertPets(petsInfo: petShopData){
        this.petsData.push(petsInfo) 
        let available = false;  
        for(let petType in this.typeOfPets){
            if (petsInfo.petType === this.typeOfPets[petType]){
                available = true;
            }
        }
        if (!available){
            this.typeOfPets.push(petsInfo.petType)
        }

    }

    getAllPetsData(): Array<petShopData>{
        return this.petsData
    }
    getCountOfAvailablePets(): object{
        let availablePets: object = {}
        for(let pet in this.typeOfPets){
            let Type = this.petsData.filter((data)=>{
                return data.petType == this.typeOfPets[pet]
            })
            availablePets[this.typeOfPets[pet]] = Type.length;
        }
        return availablePets;
    }

}

type enquiryStatus = "Available" | "Not Available"| "On Hold";

interface enquiryData{
    enquiries: Array<string>
    status: enquiryStatus
}

class Requests{
    requests: Array<enquiryData>
    constructor(){
        this.requests = []
    }

    insertRequest(request: enquiryData): void{
        this.requests.push(request);
    }
    topFiveEnquiryStatus(availClass: Availability): Array<enquiryData>{
        let topEnquiries: Array<enquiryData> = []
        let availablePets: Array<petShopData> = availClass.getAllPetsData();
        for(let i = 0; i<5; i++){
            let requestedData = this.requests[i]
            let petAvailability = true;
            for(let request in requestedData.enquiries){
                let value:Array<petShopData> = availablePets.filter((item)=>{
                    return item.petType == requestedData.enquiries[request];
                });
                if (value.length === 0){
                    petAvailability = false
                    break;
                }

            }
            if (petAvailability){
                this.requests[i].status = "Available"
            }
            else{
                this.requests[i].status = "Not Available"
            }
            topEnquiries.push(this.requests[i])
        }
        return topEnquiries;
    }

}

let pets = new Availability()

pets.insertPets({petType:"Cat", petAge: 4, petColor:"Brown", petGender:"male"});
pets.insertPets({petType:"Dog", petAge: 7, petColor:"Black", petGender:"female"});
pets.insertPets({petType:"Dog", petAge: 3, petColor:"white", petGender:"female"});
pets.insertPets({petType:"Dog", petAge: 10, petColor:"black", petGender:"male"});
pets.insertPets({petType:"Parrot", petAge: 2, petColor:"Green", petGender:"female"});
pets.insertPets({petType:"Cat", petAge: 3, petColor:"white", petGender:"male"});
pets.insertPets({petType:"Cat", petAge: 8, petColor:"Brown", petGender:"male"});
pets.insertPets({petType:"Parrot", petAge: 11, petColor:"Green", petGender:"female"});
pets.insertPets({petType:"Parrot", petAge: 5, petColor:"Green", petGender:"male"});
pets.insertPets({petType:"Dog", petAge: 6, petColor:"Gold", petGender:"female"});

let enquiry = new Requests();

enquiry.insertRequest({enquiries:["Dog", "Parrot"], status:"On Hold"});
enquiry.insertRequest({enquiries:["Dog", "Cat"], status:"On Hold"});
enquiry.insertRequest({enquiries:["Cat"], status:"On Hold"});
enquiry.insertRequest({enquiries:["snake"], status:"On Hold"});
enquiry.insertRequest({enquiries:["Rabbit", "Parrot"], status:"On Hold"});


console.log("--------All the pets Data--------");
console.log(pets.getAllPetsData());
console.log("---------------------------------");

console.log("--------Count of each pet--------");
console.log(pets.getCountOfAvailablePets());
console.log("---------------------------------");

console.log("---------Top Five Enquiry---------");
console.log(enquiry.topFiveEnquiryStatus(pets));
console.log("----------------------------------")