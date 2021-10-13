//loops

for(var i = 0 ; i <= 10; i++){

	console.log(i);

}

var names = [

	"Alex",
	"Jamila",
	"Joshua",
	"Aisha",
	"Bob"
];
//not so usual in arrays
for(var i = 0; i < names.length ; i++){

console.log(names[i]);

}
console.log("====+======+====")
console.log("forof");

//for of more used in arrays
for(const name of names){

	console.log(name);

}
console.log("======+====+====");
console.log("foreach");

names.forEach(function(name){

	console.log(name);

})