// 1. SUM the numeric values from the following array using only map, reduce, filter
const values = [ 0, 1, undefined, -10, "0", 42 ];

console.log( values.map(num => parseInt( num ) )
                    .filter( n => !isNaN( n ) )
                    .reduce( ( sum, value ) => sum + value ) );


// 2. SUM all the values in the following structure
const nested = [ 1, 2, [ 3, 4 ], [ [ 5 ], [ 6, 7 ] ], 8 ];

const arraySum = (array) => 
    array.reduce( (sum,item) => sum + (typeof item =='object' ?  arraySum(item) : item ),0);


console.log(arraySum(nested));
  
  // 3. TEST if the value 42 exists inside an array (HINT: with map and reduce)
  const array = [ 101, 67, 213, 94, 59, 42, 62, 40 ];
  
  console.log( array.map( item => item == 42 )
                    .reduce( ( a, b ) => a || b ) );
 