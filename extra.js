// un snippet care extrage cu un singur reduce min si max dintr-un array

console.log( [1,2,0,7,2,90,4,].reduce(
    (acc, val) => {
        min = ( acc[0] == undefined || val < acc[0]  ? val : acc[0])
        max = ( acc[1] == undefined || val > acc[1]  ? val : acc[1])
        return [ min, max ];
    }
) );

// flat array function

const initialArray = [1,[2,3],[[4]],[5, 6, 7]];

const flatten = (arr) => {
    return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
  
console.log(flatten(initialArray));

//implementati map si filter cu reduce

function arrayMap(arr, fn) {
    return arr.reduce((prev, current) => {
        return fn(current);
    }, []);
}

arrayMap([1,2,3,4],console.log);


function filter(array, fn) {
    return array.reduce((acc,val) => {
      return fn( val ) ? acc.concat(val) : acc;
    },[])
  }
  
  
  
  items = [1,3,45,732,543,21,3];
  console.log(filter(items, function(item) {
    return item > 10;
  }));