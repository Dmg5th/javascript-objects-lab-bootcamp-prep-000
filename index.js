function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value})
  return object 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  let newObject = Object.assign({}, object, {key});
  delete object[key];
}




  











