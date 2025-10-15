function fetchProductsThen(){
const req = fetch(www.course-api.com/javascript-store-products).then((response)=>{
     console.log (response);
     return response.json
}).then((data)=>{
    console.log(data);
});}
const btn=document.querySelector("button")
btn.addEventListener("click", function(){call();
})
//fetch and then data