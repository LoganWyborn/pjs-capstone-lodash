const _ = {
clamp(number, lower, upper){
  if(number >= upper){
  return upper;
}else if(number <= lower){
  return lower;
  }else{
  return number;
  }
},
 inRange(number, lower, upper){
   if(!upper){
     upper = lower;
     lower = 0;
   }
   if(lower > upper){
     var temp = lower;
     lower = upper;
     upper = temp;
   }
   if(number >= upper||number < lower){
     return false;
   }else{
     return true;
   }
 },
  words(str){
    let wordArray = str.split(' ');
return wordArray;
},
 pad(str, length){
   let padding;
   if(str.length >= length){
     padding = 0;
   }else{
     padding = length - str.length;
   }
   if(padding % 2 === 1){
     str = str + ' ';
     padding--;
   }
   for(let i = 0; i < padding; i+=2){
     str = ' ' + str + ' ';
   }
   return str;
 },
  has(obj, key){ //Isn't working, messaged group.
  let keys = Object.keys(obj);
  return keys.includes(key);
 },
  invert(obj){
    let entries = Object.entries(obj);
    let newObj = {};
    console.log(entries);
    for(let i = 0; i < entries.length; i++){
      newObj[entries[i][1]] = entries[i][0];
    }
    return newObj;
  },
   findKey(obj, func){
    let arr = Object.entries(obj);
    for(let i = 0; i < arr.length; i++){
      if(func(arr[i][1])){
        return arr[i][0];
      }
    }
    return undefined;
  },
   drop(arr, dropped){
     if(dropped === undefined){
       dropped = 1;
     }
     let newArr = [];
     for(let i = dropped; i < arr.length; i++){
       newArr.push(arr[i]);
     }
     return newArr;
   },
   dropWhile(arr, func){
     let dropNum = arr.findIndex(function(element, index) {
       return !func(element, index, arr);
   });
   return this.drop(arr, dropNum);
 },
  chunk(arr, size){
    let returnArray = [];
    let tempArray = [];
    let chunks = arr.length/size;
    if(!size){
      size = 1;
    }
    for(let i = 0; i < chunks; i++){
      for(let j = 0; j < size; j++){
       if(arr[j])
        tempArray.push(arr[j]);
      }
      returnArray.push(tempArray);
      tempArray = [];
      arr = this.drop(arr, size);
      console.log(arr);
    }
    return returnArray;
  }

}



// Do not write or modify code below this line.
module.exports = _;
