// // EXCERCISE 01
// console.log("Hello World!")

// // EXCERCISE 02
// let personName: string= "ERIC";
// console.log(`hellow ${personName}, would you like to learn some Python today?`);

// // EXCERCISE 03
// // LOWER CASE 
// let personname: string ="Babar"
// console.log("lowercase:", personname.toLowerCase());

// // UPPER CASE 
// console.log("uppercase:", personname.toLocaleUpperCase());

// //TITLE CASE
// console.log("titlecase:", personname.replace(/\bw/g,c => c.toUpperCase()));

// // EXCERCISE 04
// let qoute: string= "A person who never made a mistake never tried anything new";
// let author: string= "Albert Einstein"
// console.log(`${author} one said, "${qoute}`);

// // EXCERCISE 05
// let qoute: string= "A person who never made a mistake never tried anything new";
// let famous_person="Albert Einstein";
// let message=`${famous_person} once said, ${qoute}`;
// console.log(message);

// // EXCERCISE 06
// let personname: string = '\n\t USMAN GHANI\t\n';
// console.log(personname);
// let stripped: string = personname.trim();
// console.log(stripped);

// EXCERCISE 07 & 08
// console.log(5 + 3);
// console.log(11 - 3);
// console.log(4 * 2);
// console.log(16 / 2);

// // EXCERCISE 09
// let favoriteNumber: number= 4;
// console.log(`My favorite Number is ${favoriteNumber}`);

// EXCERCISE 10
// excercise:10
// my name is usman ghani
// date 29/2/2024
// this program will multiplication
// console.log(5 * 2);

// EXCERCISE 11
// let member: string[] =['yahya','junaid','asher','mani','arwan',];
// for(let i=0; i<member.length; i++){
//     console.log(member[i]);
// }

// EXCERCISE 12
// let member: string[] =['yahya','junaid','asher','mani','arwan',];
// let message: string='kal tum q nhi ai thy:';
// for(let i=0; i<member.length; i++){
//     console.log(message + member[i]);
// }

// EXCERCISE 13
//excercise 13
// let transportation : string [] = ['civic','bike','bus','suzuki','train',];
// for(let i=0; i<transportation.length;i++)(
//     console.log('I Would like to own a ' + transportation[i])
// );

// EXCERCISE 14
// var guest_list : string [] = ['mani','asher','junaid','arwan','yahya','aqib'];
// for(var i=0; i<guest_list.length; i++) {
//     console.log('respected friends' + guest_list[i]  + ',\nwe invited you on dinner tomorrow.\n\nthanks you')
// } 

// EXCERCISE 15
// var guest_list : string [] = [' mani ',' asher ',' junaid ',' arwan ',' yahya ',' aqib '];
// for(var i=0; i<guest_list.length; i++) {
//     console.log('respected friends' + 'guest_list' + [i]  + ',\nwe invited you on dinner tomorrow.\nthanks you\n')
// }
// let not_present : string = ' yahya ';
// let new_guest : string = ' waseem bhai ';
// guest_list[4] = new_guest;
// for(var i=0; i<guest_list.length; i++) {
//     console.log('respected friends' + guest_list[i]  + ',\nwe invited you on dinner tomorrow.\nthanks you\n')
// }
// console.log(`mr.${not_present} will not coming tomorrow dinner`)

// EXCERCISE 16
// let guest_list : string [] = [' mani ',' asher ',' arwan ',' junaid ',' yahya ',' aqib '];
// let not_present : string = ' yahya ';
// let new_guest : string = ' waseem bhai ';
// guest_list[4] = new_guest;
// for(let i=0; i<guest_list.length; i++) {
//     console.log('respected friends' + guest_list[i]  + ',\nwe invited you on dinner tomorrow.\nthanks you\n')
// }
// console.log(`mr.${not_present} will not coming tomorrow dinner`)

// guest_list.unshift(' tufail ', ' naimat', ' arif ');
// for(let i=0; i<guest_list.length; i++) {
//     console.log('respected friends' + guest_list[i]  + ',\nwe a bigger dinner table.\nthanks you\n')
// }

// EXCERCISE 17
// let guest_list : string [] = [' mani ',' asher ',' arwan ',' junaid ',' yahya ',' aqib '];
// let not_present : string = ' yahya ';
// let new_guest : string = ' waseem bhai ';
// guest_list[4] = new_guest;
// //for(let i=0; i<guest_list.length; i++) {
//   //  console.log('respected friends' + guest_list[i]  + ',\nwe invited you on dinner tomorrow.\nthanks you\n')
// //}
// console.log(`mr.${not_present} will not coming tomorrow dinner`)

// guest_list.unshift(' tufail ', ' naimat', ' arif ');
// //for(let i=0; i<guest_list.length; i++) {
//   //  console.log('respected friends' + guest_list[i]  + ',\nwe a bigger dinner table.\nthanks you\n')
// //}
// console.log('\nunfortunately we can not arrange big table , only two people allow.')
// while(guest_list.length>2){
//     let remove_guest = guest_list.pop();
//     console.log(`sorry friends.${remove_guest} you are not invited for dinner, `);
// }
// for(let i=0; i<guest_list.length; i++) {
//     console.log('respected friends' + guest_list[i]  + ',\nwe a bigger dinner table.\nthanks you\n')
// }
// guest_list.splice(0.2)
// console.log(guest_list)

// EXCERCISE 18
// var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
//     if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
//         if (ar || !(i in from)) {
//             if (!ar) ar = Array.prototype.slice.call(from, 0, i);
//             ar[i] = from[i];
//         }
//     }
//     return to.concat(ar || Array.prototype.slice.call(from));
// };
// //Seeing the World: Think of at least five places in the world you’d like to visit.
// //• Store the locations in a array. Make sure the array is not in alphabetical order.
// //• Print your array in its original order.
// var places = [' karachi ', ' punjab ', ' sindh ', ' islamabad ', ' balochistan '];
// console.log('orignal' + places);
// //Print your array in alphabetical order without modifying the actual list.
// console.log(' copy ' + __spreadArray([], places, true).sort());
// //Show that your array is still in its original order by printing it.
// console.log('orignal' + places);
// //Print your array in reverse alphabetical order without changing the order of the original list.
// console.log(' copy ' + __spreadArray([], places, true).sort().reverse());
// //Show that your array is still in its original order by printing it again.
// console.log(' copy ' + __spreadArray([], places, true).sort().reverse());
// //Reverse the order of your list. Print the array to show that its order has changed.
// console.log('orignal' + places.sort());
// //Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log('orignal' + places.sort().reverse());
// //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// EXCERCISE 19
// import { guest_list } from '../EX 14 Guest List/mainguestlist'
// console.log(`n\ printing number of guest invited`)
// console.log(`we had finally invited ${guest_list.length}from EX 14`)


// EXCERCISE 20
// let languages : string [] = ['english','urdu','hindi','french']
// console.log("list of languages ")
// for(let top of languages){
//     console.log(top)
// }


// EXCERCISE 21
// interface item {
//     name : string
//     price : number 
// }
// //create two object
// const book : item ={
//     name : 'essential typescript',
//     price : 450
// }
// const apple : item ={
//     name : 'apple ',
//     price : 200 
// }
// console.log(`book name : ${book.name},price : $${book.price}`)
// console.log(`apple name : ${apple.name},price : $${apple.price}`)

// EXCERCISE 22
// let array : (string | number) [] = ['babar','taha',3,5,8,"usman" ]
// console.log(array[5])
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])

// EXCERCISE 23
// // Test 1: Equality comparition (true)
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); //(true)

// // Test 2: strick aquality comparition (true)
// console.log("Is car === 'subaru'? I ture True.");
// console.log(car === 'subaru'); //(true)

// // Test 3: Ineguality comparition (false)
// console.log("Is car != 'subaru'? I predict false.");
// console.log(car != 'subaru'); //(false)

// // Test 4: strick inequality comparition (false)
// console.log("Is car !== 'subaru'? I predict false.");
// console.log(car !== 'subaru'); //(false)

// // Test 5: less than comparition (false)
// console.log("Is car < 'subaru'? I predict false.");
// console.log(car < 'subaru'); //(false) (lexicographic comparition)

// // Test 6: greater than comparition (false)
// console.log("Is car > 'subaru'? I predict false.");
// console.log(car < 'subaru'); //(false) (lexicographic comparition)

// // Test 7: less than or equal comparition (True)
// console.log("Is car <= 'subaru'? I predict True.");
// console.log(car <= 'subaru'); //(True) 

// // Test 8: Greater than or equal comparition (True)
// console.log("Is car >= 'subaru'? I predict True.");
// console.log(car >= 'subaru'); //(True)

// // Test 9: cheking truthiness (True)
// console.log("Is car? I predict True.");
// console.log(car); //(True) (non-empty string is truthy)

// // Test 10: cheking falsiness (false)
// console.log("Is car? I predict false.");
// console.log(car); //(false) (nagation of a truthy value)

// EXCERCISE 24
// let car : string = 'subaru';
// let age : number = 25;
// let number : number [] = [1, 2, 3, 4,]

// // **string Tests**

// // Test 1: Equality (true)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); //(true) (case-insensitive)

// // Test 2: strick aquality (false)
// console.log("Is car === 'subaru'? I ture false.");
// console.log(car === 'subaru'); //(false)

// // Test 3: Inequality (true)
// console.log("Is car != 'Toyota'? I predict True.");
// console.log(car == 'Toyota'); //(True)

// // Test 4: Inequality (false)
// console.log("Is car !== 'subaru'? I predict false.");
// console.log(car !== 'subaru'); //(false) (case-sensitive)

// // **Lowercase function tests**

// // Test 5: Lowercase conversation (True)
// console.log("is car === car. toLowerCase()? I predict false. ");
// console.log(car === car .toLowerCase()); //false (orignal value remains uppercase)

// // Test 6: Lowercase conversion (false)
// console.log("is car === car.toLowerCase()?I predict false ");
// console.log(age != 30); // (false)

// // **Numerical Tests **

// // Test 7: Equality  (True)
// console.log("is age != 30? I predict True ");
// console.log(age != 30); //(True)

// //  Test 8: Inequality (false)
// console.log("Is age != 30? I predict false");
// console.log(age != 30); //(false)

// //Test 9: greater than (false)
// console.log("Is age > 30? I predict false.");
// console.log(age > 30); //(false)

// //Test 10: less than or equal (True)
// console.log("Is age <=  25? I predict True. ");
// console.log(age <= 25);//(True)

// // **Logical operators**

// //Test 11: AND (true)
// console.log("Is age > 20 && age < 30? I predict True.");
// console.log(age > 20 && age < 30); //True (both condition met)

// //Test 12: OR (false)
// console.log("Is age > 30 || age < 18? I predict false." );
// console.log(age > 30 || age  < 18); //false (naither condition met)

// // **Array Test**
// // Test 13 : In Array (True)
// console.log("Is 3 in numbers? I predict True.") 
// console.log(3 in number ) // true (nagation of "in" operator)

// // Test 14: Not in array (False)
// console.log("is 5 not in number? I predict false.")
// console.log(5  in  number) // true (nagation of "in" operator)

// EXCERCISE 25
// Create a variable called alien_color
// let alien_color : string = "green";

// // Write an if statement to test whether the alien’s color is green. If it is, 
// // print a message that the player just earned 5 points.

// if (alien_color == "green"){
//     console.log("the player just earned  5 points.");
// }

// // Write one version of this program that passes the if test and another that fails. 
// // (The version that fails will have no output.)

// alien_color = "red";
// if (alien_color == "green"){
//     console.log("the player just earned  5 points.");
// }

// EXCERCISE 26
// choose a colour for  an alien as you 
// did in Excercise 25, and write an if-else chain

// let alien_color : string = "green";

// // if the aliens's colour is green, prints a statement that 
// // the player just earned 5 point for shooting the alien.

// if (alien_color == "green"){
//     console.log("the player just earned  5 points for shooting the alien.");
// }

// else{
//     console.log("the player just earned 10 point.")
// }

// alien_color = "red";
// if (alien_color == "green"){
//     console.log("the player just earned  5 points for shooting the alien.");
// }


// EXCERCISE 27
// let alien_color : string = "green";
// // if the alien is green, print a message that the player earned 5 point.

// if (alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }

// // if the alien is yellow, print a message that the player earned 10 point

// else if (alien_color == "yellow"){
//     console.log("the player just earned 10 points.");
// }  

// // if the alien is red, print a message that the player earned 15 point.

// else if (alien_color == "red"){
//     console.log("the player just earned 15 points.");
// }  

// else{
//     console.log("please select right colour")
// }

// // version 2 
// alien_color = "red";
// if (alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }

// else if (alien_color == "yellow"){
//     console.log("the player just earned 10 points.");
// }

// else if (alien_color == "red"){
//     console.log("the player just earned 15 points.");
// }

// // version 3 
// alien_color = "yellow";
// if (alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }

// else if (alien_color == "yellow"){
//     console.log("the player just earned 10 points.");
// }

// EXCERCISE 28
// stages of life : write an if-else chain that determines  a persons's stage of 
// set a value for the variable age, and then: 
// if the person is less than 2 year old, prints a message that 
// the person is a baby.

// let age: number = 18;
// if(age<2){
//     console.log("the person is a baby")
// }

// // if the person is at least 2 years old butt less than 4, prints
// // a message that the person is a toddle.

// else if (age>= 2 && age<4){
//     console.log("person is a toddle.")
// }

// // if the person is at least 4 years old butt less than 13, prints
// // a message that the person is a kid.

// else if (age>=4 && age<13){
//     console.log("person is a kid.")
// }

// // if the person is at least 13 years old butt less than 20, 
// // prints a message that the person is a teenager.

// else if (age>= 13 && age<20){
//     console.log("person is a teenager.")
// }

// // if the person is at least 20 years old butt less than 65, 
// // prints a message that the person is a adult.

// else if (age>= 20 && age<65){
//     console.log("person is a adult.")
// }

// // if the person is at least 65 or older, 
// // prints a message that the person is an elder.

// else{
//     console.log("persion is an elder.")
// }

// EXCERCISE 29
// Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.


// Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// let favorite_fruits : string [] = ["apple", "orange", "bannana", "grapes",]

// if(favorite_fruits.includes('apple')){
//     console.log('You really like apple')
// }

// if(favorite_fruits.includes('orange')){
//     console.log('You really like orange')
// }

// if(favorite_fruits.includes('bannana')){
//     console.log('You really like bannana')
// }

// if(favorite_fruits.includes('grapes')){
//     console.log('You really like grapes')
// }

// if(favorite_fruits.includes('pinapple')){
//     console.log('You really like pinapple')
// }


// EXCERCISE 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
//  that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let users : string [] = ["yahya", "asher", "junaid", "amir", "asim"]
// for( let user of users){
//     if (user === "admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }
// else{
//     console.log(`hello ${user}, 'thanks you for logging in again'`)
// }
// }

// EXCERCISE 31
// No Users: Add an if test to Exercise 31 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// var users = ["yahya", "asher", "junaid", "amir", "asim"];
// if (users.length === 0) {
//     console.log("We need to find some user");
// }
// // • Remove all of the usernames from your array, 
// // and make sure the correct message is printed
// else {
//     users = [];
//     console.log("all user have been remove " + users.length);
// }

// EXCERCISE 32
// // Checking Usernames: Do the following to create a program 
// that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one 
// or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// let current_users: string [] = ["yahya", "arwan", "mani", "junaid", "asher"];
// let new_users: string [] = ["arsalan", "aqib", "salman", "amir", "sameer"];

// new_users.forEach((newUser) => {
// if (
//     current_users.some(
//         (currentUser) => currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase()
//     )
    
// ) {
//     console.log(`${newUser}) will need to enter a new username. `);
// } else{
//     console.log(`${newUser} is available.`);
// }

// });

// EXCERCISE 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array,
//  such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// let mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// for loop

// for(let i = 0; i < mynumbers.length; i++){
 
//     // now we use condition
 
//     if(mynumbers[i] == 1){
//         console.log(`${mynumbers[i]}st`);

//     }else if(mynumbers[i] == 2){
//         console.log(`${mynumbers[i]}nd`);
//     }
//     else if(mynumbers[i] == 3){
//         console.log(`${mynumbers[i]}rd`);
//     }
//     else if(mynumbers[i] >= 4 && mynumbers[i] <= 9){
//         console.log(`${mynumbers[i]}th`);
//     }
// }

// EXCERCISE 34
// Pizzas: Think of at least three kinds of your favorite pizza. 
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of 
// printing just the name of the pizza. For each pizza you should have one line of output containing 
// a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop,
//  that states how much you like pizza. The output should consist of three or more lines about t
// he kinds of pizza you like and then an additional sentence, such as I really love pizza

// let mypizza = ["Pizza Bufalina", "Neapolitan pizza", "Sicilian pizza", "Pizza Quattro formaggi"];

// // print only names of pizza 

// for (let i = 0; i < mypizza.length; i++) {
//     console.log(mypizza[i]);
// }

// for (let i = 0; i < mypizza.length; i++) {
//     console.log(`I like to eat ${mypizza[i]}`);
// }

// console.log(
//     `\nI really like to eat pizzas. pizza come in a variety of flavors and toopings, allowing individuals to customize it to their liking `

// );

// EXCERCISE 35
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet. • 
//  Add a line at the end of your program stating what these animals have in common.
//  You could print a sentence such as Any of these animals would make a great pet


// let animals : string [] = ["dog", "cat", "bear"];

// animals.forEach(animals => {
//     console.log(`A  ${animals} would make a great pet.`);
// });

// console.log("Any of these animals would make a great per!");

// EXCERCISE 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of 
// a message that should be printed on the shirt. The function should print a sentence summarizing 
// the size of the shirt and the message printed on it. Call the function.

// function make_shirt(size: string, message: string){
//     console.log(`making a ${size} t-shirt with the message "${message}" printed on it.`);
// }

// make_shirt("medium", "code is life");

// EXCERCISE 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
//  I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
//  with a different message.

// function make_shirt (size: string = "large" , message: string = "i love typescript") {
//     console.log(`making a ${size} t-shirt with the message "${message}" printed on it. `);
// }

// make_shirt(); // Default large and message
// make_shirt("medium"); //default message, medium size
// make_shirt("small", "Dive into coding "); // custom message , small size 

// EXCERCISE 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
//  for the country a default value. Call your function for three different cities, at least one of which is not 
//  in the default country.


// function describe_city(nameOfcity: string, country: string = "pakistan"){
//     return`${nameOfcity} is in ${country}`;
// };

// // 3

// let city1 = describe_city("Āşimah,Kuwait");
// let city2 = describe_city("karachi,pakistan");
// let city3 = describe_city("Yokohama,japan");
// let city4 = describe_city("Moscow,russia");
// let city5 = describe_city("Granads,spain");

// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);
// console.log(city5);

// EXCERCISE 39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.


// function city_country (city: string, country: string){
//     // return `"${city}, ${country}"`
//     console.log(`"${city}, ${country}"`)
// }

// city_country("karachi", "pakistan");

// let mycities = city_country("karachi", "pakistan")
// console.log(mycities);

// console.log(city_country("dubai", "UAE"));
// console.log(city_country("London", "United kingdom"));
// console.log(city_country("Riyaz", "Saudia Arabia"));

// EXCERCISE 40
// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces 
// of information. Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks 
// on an album. If the calling line includes a value for the number of tracks, add that value 
// to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function myalbum(artistNamae, albumTitle) {
//     return "".concat(artistNamae, " is in ").concat(albumTitle);
// }
// ;
// var album1 = myalbum("usman", "Rang-e-mohabat");
// var album2 = myalbum("uzair", "Roshan Andhera");
// var album3 = myalbum("asher", "mousam-e-dill");
// console.log(album1);
// console.log(album2);
// console.log(album3);
// function myalbum2(artistNamae, albumTitle, numberoftracks) {
//     return { artistNamae: artistNamae, albumTitle: albumTitle, numberoftracks: numberoftracks };
// }
// var album4 = myalbum2("Nusrat fateh ali ", "Sochta Hoon Ke Woh Kitne Masoom Thay", 30);
// var album5 = myalbum2("Arijit Singh", "ve kamleya", 15);
// var album6 = myalbum2("Young Stunners", "AFSANAY", 21);
// console.log(album4);
// console.log(album5);
// console.log(album6);

// EXCERCISE 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.


// let magician : string [] = ["BREAD", "RAMEEZ", "AINAK WALA JIN"];

// function show_magicians(magician: string[]) {
//     magician.forEach(magician => {
//         console.log(magician);

//     });
// }

// show_magicians(magician);

// EXCERCISE 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.



// let magicians    : string [] = ["DON", "RAMEEZ", "CHARIS"];

// function make_great (magicians: string[]){
// for (let i= 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the great";
//     }
// }

// make_great(magicians); // modifies the orignal array
// // show_magician(magicians) // show modified name

// EXCERCISE 43
// Unchanged Magicians: Start with your work from Exercise 42.
//  Call the function make_great() with a copy of the array of magicians’
// //  names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array to 
// show that you have one array of the original names and one array with the Great added to each magician’s name.



// let magicianNames2 = ["yahya", "asher", "usama", "bilal"];

// // making a copy of an array
// let magicianNamesCopy = [...magicianNames2];

// function show_magicians(greet: string){
// let withGreetings = "";

// for(let item of magicianNamesCopy){
// withGreetings += `${greet} ${item}\n`;
// }
// return withGreetings;
// };
// let myGreetings = show_magicians("Hello");
// let makeArray = myGreetings.split('\n');
// console.log(makeArray);

// EXCERCISE 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects 
// as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.


// function make_sandwich(...item: string[]) {
//     console.log(`making a sandwish with: ${item.join(`, `)}.`);
// }


// make_sandwich("ham", "cheese");
// make_sandwich("turkey", "lettuce", "tomato");
// make_sandwich("avocado", "sprourts", "mustard", "mayo");


// EXCERCISE 45
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments. Call 
// the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// function carDetails (manufacturer: string, modelName: string, ...additionalInfo){

// const car = {manufacturer, modelName, ...Object.fromEntries(additionalInfo)};
// return car;
// };

// const myCarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);

// console.log(myCarDetails);