'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=[];
  var a=0;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB[0].length;j++){
      if(collectionA[i]==collectionB[0][j]){
        result[a]=collectionA[i];
        a++;
      }
    }
  }
  return result;
}
