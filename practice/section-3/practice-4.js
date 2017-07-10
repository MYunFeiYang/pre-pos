'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result=[];
  var key;
  var count;
  var p=0;
  var collectionC=collcetionATocollectionC(collectionA);
  for(var i=0;i<collectionC.length;i++){
    key=collectionC[i].key;
    count=collectionC[i].count;
    for(var j=0;j<objectB.value.length;j++) {
      if (collectionC[i].key == objectB.value[j]){
        count=count-parseInt(count/3);
      }
        }
        result[p++]={'key':key,'count':count};
  }
  return result;
}
function collcetionATocollectionC(collectionA){
  var result=[];
  var tag=collectionA[0];
  var key;
  var count;
  var p=0;
  for (var i=0;i<collectionA.length;i++){
    if(i<collectionA.length-1){
      var key = collectionA[i];
      if (key != collectionA[i + 1]) {
        result={'key':key,'count':count};
        count=1;
      }
      else {
        count++;
      }
    }
    else{
      var strs=collectionA[i].split("-");
      result={'key':strs[0],'count':parseInt(strs[1])};
    }
  }
  console.log(result);
  return result;
}
