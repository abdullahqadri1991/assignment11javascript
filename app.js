// Question # 1
document.write("<h1>Question # 1</h1>")

var firstName = "Abdulah"
var lastName = "Hashim"
var fullName = firstName + " " + lastName

document.write(fullName)


// Question # 2
document.write("<h1>Question # 2</h1>")

var mobail = prompt(" Enter Your Favorite Mobile phone Model")
var favoriteMobilePhone = mobail

document.write(" My favorite Mobile Phone is :" + mobail + "<br>")
document.write(" length of String is :" + mobail.length)


// Question # 3
document.write("<h1>Question # 3</h1>")


var text = "pakistani"

document.write("String:" + " " + text + "<br>")
document.write("index of 'n'" + text.indexOf("n"))


// Question # 4 
document.write("<h1>Question # 4 </h1>")

var hello = "Hello World"

document.write("String:" + " " + hello + "<br>")
document.write("Last index of 'l'" + " " + hello.lastIndexOf('l'))




// Question # 5
document.write("<h1>Question # 5</h1>")


var text = "pakistani"

document.write("String:" + " " + text + "<br>")
document.write("character at 3rd index is" + " " + text.charAt(3))



// Question # 6
document.write("<h1>Question # 6</h1>")

var firstName = "Abdulah"
var lastName = "Hashim"

var concat = firstName.concat(" " + lastName)

document.write(concat)



// Question # 7
document.write("<h1>Question # 7</h1>")

var city = "Hyderabad"
var findtext = "Hyder"
var rep = city.replace(findtext, "Islam")

document.write("City :" + " " + city + "<br>")
document.write("after Replacement:" + " " + rep)


// Question # 8
document.write("<h1>Question # 8</h1>")


var text = "Ali and Sami are best friends. They play cricket and football together."
var findText = "and"
var rep = text.replaceAll("and", "&")

document.write(rep)


// Question # 9
document.write("<h1>Question # 9</h1>")


var value1 = "472"
document.write("value1 472 " + "<br>" + "Type :" + typeof (value1) + "<br>");
var num1 = Number(value1);
document.write("convert String  to Number Type is  :" + " " + typeof (num1) + "<br><br>");


var value2 = 472
document.write("value1 472 " + "<br>" + "Type :" + typeof (value2) + "<br>");
var num2 = toString(value2);
document.write("convert Number to String  Type is  :" + " " + typeof (num2));



// Question # 10
document.write("<h1>Question # 10</h1>")

var user = prompt("Enter Your Name for  Upper Case")
var input = user.toUpperCase()

document.write(input)


// Question # 11
document.write("<h1>Question # 11</h1>")

var userInput = prompt("Enter Your Name")

var firstletter = userInput[0].toUpperCase()
var titleCase = firstletter + userInput.slice(1)
document.write("User Input:" + " " + userInput + "<br>")
document.write("Title Case:" + " " + titleCase + "<br>")


// Question # 12
document.write("<h1>Question # 12</h1>")


var num = 35.56
var withoutDot = num.toString().replace(".", "");

document.write("Number" + " " + num + "<br>")
document.write("Result" + " " + withoutDot)



// Question # 13
document.write("<h1>Question # 13</h1>")


var user = prompt("Enter user Name with special symbol among [@ . , !]")
var special = ["!", "@", ",", "."]

if (user == special) {
  alert("thank Yor")
  document.write("thank Yor")
} else {
  alert("place Enter A Valid User Name")
  document.write("place Enter A Valid User Name")
}


// Question # 14
document.write("<h1>Question # 14</h1>")

var flag = "no"
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var order = prompt("Welcome Zamzam Bekery . What do you want to order Sir/ ma'am?")

for (i = 0; i <= bakery.length; i++) {
  if (order.toLowerCase() === bakery[i]) {
    var flag = "yes"
  }
}
if (flag == "yes") {
  document.write(order + " " + "is avaible at index" + " (" + bakery.indexOf(order) + ") " + "in our bakery")

} else if (flag == "no") {
  document.write("we are sorry  (" + " (" + order + ") " + ") is not avaible in our bakery ")
}

// Question # 15
document.write("<h1>Question # 15</h1>")


// var password = prompt("Please enter your password (requirements:alphabets and numbers,not start with a number,must at least 6 characters):");
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var flags = true;

// if (password.length >= 6) {
//   for (let i = 0; i < password.length; i++) {

//     if (password(nums[i]) && password[0] != nums[i]) {
//       flags = true;
//       break;
//     }
//     else {
//       flags = false;
//       //break;
//     }
//   }
// }
// if (flags == true) {
//   document.write("Valid Password");
// } else {
//   document.write("Invalid Password! Password must contain alphabets and numbers, and should not be started with number,Minimum 6 characters are required");
// }



// Question # 16
document.write("<h1>Question # 16</h1>")

var university = "University of Karachi";
var Array = university.split("");

for(var i=0; i<Array.length; i++){
    document.write(Array[i] + "<br>")
}


// Question # 17
document.write("<h1>Question # 17</h1>")


var User = prompt("Please enter a word");
var lastChar = User.slice(-1);

document.write("User Input: " + User + "<br> Last Character of User Input: " + lastChar);




// Question # 18
document.write("<h1>Question # 18</h1>")


var text= "the quick brown fox jumps over the lazy dog";
document.write (" TEXT :the quick brown fox jumps over the lazy dog" + "<br>")

var count = (text.match(/fox/g) || []).length;
document.write("There are" + " " +  count + " " + " occurrences of word “the' ")

