module.exports = function longestConsecutiveLength(array) {
  let maxLength = 0 , currentLength = 1;
  array.sort((a,b) => a-b);

  for(let index = 0 ; index < array.length; index++){
    if(array[index+1] === array[index]) continue;
    if(array[index+1] - array[index] === 1) currentLength++;
    else {
      currentLength = 1;
    }
    if(maxLength < currentLength) {
      maxLength = currentLength;
    }
}
  return maxLength;
}
