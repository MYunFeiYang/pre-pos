'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result=[];
  var collectionC=[];
  var tag=collectionA[0];
  var k=0;
  var key;
  key=tag;
  var count=[];
  count[k]=0;
  for(var i=0;i<collectionA.length;i++){
    if(collectionA[i]!=tag){
      key=collectionA[i];
      tag=collectionA[i];
      count[++k]=1;
    }
    else{
      count[k]++;
    }
    collectionC[k++]={'key':key,'count':count[k]};
  }
  for(var i=0;i<collectionC.length;i++){
    key=collectionC[i].key;
    count=collectionC[i].count;
    for(var j=0;objectB.value.length;j++){
      if(collectionC[i].key==objectB.value[j]){
        count=count-parseInt(count/3);
      }
    }
    result={'key':key,'count':count};
  }
  return result;
}
