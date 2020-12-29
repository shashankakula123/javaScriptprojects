console.clear();
function SearchinPos(array,number){
  
  var result=[];

  var count=0;
  for(var i=0;i<array.length;i++){
    if(array[i]==number){
      result[i]=i;
    }
   result = result.filter(function( element ) {
   return element !== undefined;
});
   
  }
  return result;
  
}
console.log(SearchinPos([1,2,1,3,1,4,1,5],1));
console.log(SearchinPos([44, 23, 63, 11, 97],11));
