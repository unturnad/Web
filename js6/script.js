function filterBy(arr, type) {
    return arr.filter(item => typeof item !== type);
  }
  
  const mixedArray = ['hello', 'world', 23, '23', null, true, undefined, {}, [], () => {}];
  
  console.log(filterBy(mixedArray, 'string')); 
  console.log(filterBy(mixedArray, 'number')); 
  console.log(filterBy(mixedArray, 'object')); 
  