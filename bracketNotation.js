//Accessing object properties by using bracket notation
//commonly used when the property of the object has a space in its name
// We can also use bracket notation on object properties without spaces
let color = "color_name"

const myObject2 = {
    "color_name": "Red",
    "color code": "#2e2e345",
    "color meaning": "Danger",
    "myColor":"Green"
}
console.log(myObject2[color])


//console.log(myObject2["color name"])//Red
//console.log(myObject2["color code"])//#2e2e345
//console.log(myObject2["myColor"])//Green

//Bracket notation can also be used to access a property which is stored as the value of a variable.
//useful for iterating through an object's propertiesor when accessing a lookup table.
const myObject3= {
    "color name": "Red",
    "color code": "#2e2e345",
    "color meaning": "Danger",
    "myColor":"Green"
}

//Assigning a property to the value of a new variable.
const newVar = "color name"

const myColor = myObject3[newVar]

//console.log(myColor)//Red
//updating Object properties and accessing them using the dot/bracket notation

const myObject4 ={
    "fName": "Daniel",
    "Second Name": "Waweru",
    "lName": "Ngugi",
    "favFood":["Rice","Omelette","Beans"]
}
//changing object propertys' values
//using the dot notation
myObject4.fName = "James"
myObject4.favFood = ["Seafood","Vegetable Salad","Black Beans"]
//using the bracket Notation
myObject4["Second Name"] = "Mwanzia"
//console.log(myObject4.favFood)

