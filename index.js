let checkIfArry = function(collection){
  return (Array.isArray(collection)) ? collection.slice() : Object.values(collection)
}
let myEach = function (collection,callback){
  
  let array = checkIfArry(collection)
  for(let i=0;i<array.length;i++){
    callback(array[i])
  }
  return collection
}

let myMap = function (collection,callback){
  let array = checkIfArry(collection)
  let newArray = []
  for(let i=0;i<array.length;i++){
    newArray.push(callback(array[i]))
  }
  return newArray
}

let myReduce = function(collection,callback,acc){
  let array = checkIfArry(collection)
  if(acc === undefined){
    acc = array[0]
    array = array.slice(1)
  }
  for(let i=0;i<array.length;i++){
    acc = callback(acc,array[i],collection)
  }
  return acc
}
let myFind = function(collection,callback){
  let array = checkIfArry(collection)
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])){
      return array[i]
    }
  } 
  return undefined
}
let myFilter = function(collection,callback){
  let array = checkIfArry(collection)
  let newArray = []
  for(let i = 0; i < array.length; i++){
  if(callback(array[i])){
    newArray.push(array[i])
    }
  }
  return newArray
}
let mySize = function(collection){
  let array = checkIfArry(collection)
  let counter = 0
  for(let i = 0; i < array.length; i++){
    counter++
  } 
  return counter
}
let myFirst = function(array,n){
  if(n===undefined){
    return array[0]
  }
  else{
    let newArray = array.slice(0,n)
    return newArray
  }
}

let myLast = function(array,n){
  if(n===undefined){
    return array[array.length-1]
  }
  else{
    let newArray = array.slice(-n)
    return newArray
  }
}

let myKeys = function(obj){
  let keys = []
  for(const key in obj){
    keys.push(key)
  }
  return keys
}
let myValues = function(obj){
  let values = []
  for(const key in obj){
    values.push(obj[key])
  }
  return values
}