//object invocation with parameters
// new SampleObject("paramOne", "paramTwo");
// new Point(2,3)

//with no parameters
//new Object; //this is fine
// new ObjectTwo;

//three ways of creating objects

//object literal
let o = {
  item1: "test",
  item2: "test2",
  item3: "test3",
  item4: undefined,
};

//object.create
let p = Object.create({}); //when passed to thirdparty libs, prevent against modifications
p["test_prop"] = "res";

let p2 = Object.create(null); //object has no inherited properties,

//new Object
let q = new Object();
q["item"] = "prop";

console.log("q item", q.item);

//another example
let d = new Date();

console.log(o.toString());
console.log(o.toLocaleString());

//get the keys of the object
let o_keys = Object.keys(o);
console.log("keys", o_keys);

//get only the values of each prop object
let o_values = Object.values(o);
console.log("o_values", o_values);

//get each key value pair as an array
let o_entries = Object.entries(o);
console.log(o_entries);

//all the preceding arrays can be looped over
//with for/of loop, or even map

for (let prop in o) {
  console.log("prop", prop);
}

//access object properties
let customers = Object.create({});

for (let index = 0; index < 10; index++) {
  //the bracket notation allows dynamic setting
  //properties like this, since we use a formatted string, esp if it has
  //spaces
  customers[`address ${index}`] = index;
}

//we can access an item like this
console.log("customer 1 address", customers["address 1"]);

//the dot notation works for simple identifiers
console.log("dot notation", o.item1);

//deleting, removing properties
delete o.item1; //returns true if success

//checking if properties exit
console.log("has own property item1", o.hasOwnProperty("item1"));

//or
let res = "item4" in o; //if there but is undefined then true, if deleted then it returns false
console.log("item4 in o", res);
console.log("is item there", o.item4 !== undefined);

o.propertyIsEnumerable("item1"); // if its enumerable and a property
