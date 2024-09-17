var Features = document.getElementById("Features");
var company = document.getElementById("Company");
var subcompany = document.getElementById("subcompany");
var subfeature = document.getElementById("subfeature");
// var f=document.getElementById("Features")

Features.addEventListener("click",function(){
    subcompany.classList.remove("subfeatureshow")
    subfeature.classList.toggle("subfeatureshow")
});
company.addEventListener("click",function(){
    subfeature.classList.remove("subfeatureshow")
    subcompany.classList.toggle("subfeatureshow")
});