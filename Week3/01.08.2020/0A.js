let cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
        {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white",
        },
        {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3,
        },
    ],
};

console.log(cat);
//Add height and weight to Fluffy
cat["height"] = 30;
cat["weight"] = 5;
console.log("Add height and weight to Fluffy",cat)

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat["name"] ="Fluffyy"
console.log("Fluffy name is spelled wrongly. Update it to Fluffyy",cat)

//List all the activities of Fluffyy’s catFriends.
let arr =[]

for(let friend in cat.catFriends){
    arr.push(...cat.catFriends[friend].activities)
}
console.log("all the activities of Fluffyy’s catFriends",arr)


//Print the catFriends names.
let arr1 = [];
for (let friend in cat.catFriends) {
    arr1.push(cat.catFriends[friend].name);
}
console.log("catFriends names",arr1)

//Print the total weight of catFriends
let weight =0
for (let friend in cat.catFriends) {
    weight += cat.catFriends[friend].weight;
}
console.log("Print the total weight of catFriends :" + weight);

//Print the total activities of all cats (op:6)
output = [...cat.activities];
for (let friend in cat.catFriends) {
    output.push(...cat.catFriends[friend].activities);
}
console.log("Activities of all cats : " + output);

//Add 2 more activities to bar & foo cats

for (let friend in cat.catFriends) {
    cat.catFriends[friend].activities.push("scraching", "chasing rats");
}
console.log("cat after pushing",cat.catFriends[0].activities)

// Update the fur color of bar

cat.catFriends[0]["furcolor"] = "brown";