'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result=[];
  var key;
  var count;
  var k=0;
  for(var i=0;i<collectionA.length;i++){
    key = collectionA[i]['key'];
    count = collectionA[i]['count'];
    for(var j=0;objectB['value'].length;j++){
      if(collectionA[i]['key']==objectB['value'][j]){
        count=count-1;
      }
    }
    result[k++]={"key":key,"count":count};
  }
  return result;
}
