// If life was easy, we could just do things the easy way:
//var getElementsByClassName = function (className) {
//  return document.getElementsByClassName(className);
//};


// But in stead we're going to implement it from scratch:


var getElementsByClassName = function (className) {

  var result = [];
  
  var documentBody = document.body.children; 
  
  var elementLoop = function(elementList) {

      for(var i = 0; i < elementList.length; i++){  
        if(elementList[i].classList.contains(className)){        
          result.push(elementList[i]);                  
        }
        elementLoop(elementList[i].children);
      }
  }

  elementLoop(documentBody);

  console.log(result);

  return result;	
    
  // your code here
};
