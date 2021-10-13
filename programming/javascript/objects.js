
var person = {

	 firstName: "N",
	 age:23,
	 isMale: true,
	 balance: 203.03,
	 bornDate: new Date(1998,3,12).toJSON(),
	 adress:{
	 	city: "Paris",
	 	postCode: "75004"
	 }

}
console.log(person)
console.log("===============end============")
console.log(person.adress)
console.log("===============end============")
console.log(Object.values(person))
console.log("===============end=============")
console.log(Object.keys(person))
console.log("===============end=============")
console.log("========JSON=========")
console.log(JSON.stringify(person))
