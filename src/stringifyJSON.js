// this is what you would do if you liked things to be easy:
//var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  //return obj;

	var result;

	if(Array.isArray(obj)){
      result = '['; 
	  for(var i = 0; i < obj.length ;i++){
        result = result + stringifyJSON(obj[i]) + (i === (obj.length - 1) ? '' : ',');
      }
      result = result + ']';
	}
	else if(obj !== null && typeof(obj) === "object"){
	  result = '{';      	  
      for(var key in obj){
        if(typeof(obj[key]) === "function" || obj[key] === undefined){
	      delete(obj[key]);
	    }        
      }
      var j = 0;
      var objLength = Object.keys(obj).length
	  for(var key in obj){
	  	j ++;
        result = result + ('"' + key + '"') + ':' +  stringifyJSON(obj[key]) + (j === objLength ? '' : ',');
	  }
	  result = result + '}';
	}
	else if(typeof(obj) === "string"){			
/*
	  obj = obj.replace(/\\/g, '\\\\"');
	  obj = obj.replace(/"/g, '\\\"');
*/
	  obj = obj.replace(/"/g, '\\\"');
	  obj = obj.replace(/\\\\/g, '\\\\\\');
	  result = '"' + obj + '"';
	}
	else{
	  result = obj + '';
    }

	return result;
	
  // your code goes here
};
