// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat(3); //pretty much just go to the deepest nested element and count out how many layers deep it is, or pick a larger number 

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const greeting2 = greeting.flatMap(entry => entry.join(' '));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

const greeting3 = `${greeting2[0]} ${greeting2[1]} ${greeting2[2]}`
//or, using flatMap:
const greeting4 = greeting.flatMap(x => x.join(' ')).join(' ');

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const trapped2 = trapped.flat(Infinity); //infinity provides an easier way to flatten in case you don't know # of nested arrays

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

console.log(userEmail3.trimStart());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

const users2 = Object.entries(users);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const updated = users2.map(user => [user[0], user[1] * 2]);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

const updated2 = Object.fromEntries(updated);