//=== UNIVERSAL SELECTOR FUNCTION ====///
const $=function(selector){
   return document.querySelector(selector)
}
//===UNIVERSAL SELECTOR FUNCTION ====///
const $$=function(selector){
   return document.querySelectorAll(selector)
}



/// ======= DYNAMIC CREAT ELEMENT ======////

const createElement=function(tagName,className,content){
   const newElement=document.createElement(tagName);
   if(className){
      newElement.setAttribute('class', className);
   }
   
   if(content){
      newElement.innerHTML=content
   }
   return newElement;
}


