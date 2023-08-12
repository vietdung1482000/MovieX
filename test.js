
var person = { name: "John", age: 30 };
var jsonString = JSON.stringify(person); // Chuyển đối tượng thành chuỗi JSON
 
var jsonObject = JSON.parse(jsonString); // Chuyển chuỗi JSON thành đối tượng JS
console.log(jsonObject); // Output: "John"
