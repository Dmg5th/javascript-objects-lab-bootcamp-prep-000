function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object 
}

function deleteFromObjectByKey(object, key){
  let newObj = Object.assign({}, newObj, {key});
  delete newObj[key];
  return newObj
}





  











