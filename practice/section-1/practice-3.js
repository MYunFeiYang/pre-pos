'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
  var a=0;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<objectB['value'].length;j++){
      if(collectionA[i]==objectB['value'][j]){
        result[a]=collectionA[i];
        a++;
      }
    }
  }
  return result;
}
