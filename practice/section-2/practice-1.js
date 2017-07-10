'use strict';

function countSameElements(collection) {
  var tag=collection[0];
  var k=0;
  var key=[];
  key [0]=tag;
  var count=[];
  count[k]=0;
  for(var i=0;i<collection.length;i++){
      if(collection[i]!=tag){
        key.push(collection[i]);
        tag=collection[i];
        count[++k]=1;
      }
      else{
        count[k]++;
      }
  }
  var result=[];
  for(var j=0;j<=k;j++){
    result[j]={};
    result[j]['key']=key[j];
    result[j]['count']=count[j];
  }
  return result;
}
