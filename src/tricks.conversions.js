// numeric string used with + gives string type
let result;

result = '3' + 2;
console.log(result) // "32"

result = '3' + true;
console.log(result); // "3true"

result = '3' + undefined;
console.log(result); // "3undefined"

result = '3' + null;
console.log(result); // "3null"

// numeric string used with - , / , * results number type

result = '4' - '2';
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

// non-numeric string used with - , / , * results to NaN

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

// if boolean is used, true is 1, false is 0

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

// null is 0 when used with number

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4

// Arithmetic operation of undefined with number, boolean or null gives NaN

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN

// Convert to Number Explicitly
// To convert numeric strings and boolean values to numbers, you can use Number(). For example,


// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

// In JavaScript, empty strings and null values return 0. For example,

result = Number(null);
console.log(result);  // 0

result = Number(' ')
console.log(result);  // 0

// If a string is an invalid number, the result will be NaN. For example,

result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

// NOTE: You can also generate numbers from strings using 
//      parseInt(), parseFloat(), unary operator + and Math.floor(). For example


result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

// If a string is an invalid number, the result will be NaN. For example,


result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

// 2. Convert to String Explicitly

//number to string

result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

// 3. Convert to Boolean Explicitly
// In JavaScript, undefined, null, 0, NaN, '' converts to false. For example,

result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

// All other values give true. For example,

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true

/** 
 * JavaScript Type Conversion Table
The table shows the conversion of different values to String, Number, and Boolean in JavaScript.

Value	String Conversion	Number Conversion	Boolean Conversion
1	"1"	1	true
0	"0"	0	false
"1"	"1"	1	true
"0"	"0"	0	true
"ten"	"ten"	NaN	true
true	"true"	1	true
false	"false"	0	false
null	"null"	0	false
undefined	"undefined"	NaN	false
''	""	0	false
' '	" "	0	true
 * 
 */

