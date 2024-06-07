//variables html
var home = document.getElementById("home")
var _name = JSON.parse(localStorage.getItem('name'))
list = JSON.parse(localStorage.getItem('list'))
console.log(list)




//home
home.innerHTML += `Hello ${_name}`
console.log("html")

