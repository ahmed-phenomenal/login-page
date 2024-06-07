
//signin
var email = document.getElementById("email")
var password = document.getElementById("password")
var login = document.getElementById("login")
var text = document.getElementById("text")
console.log(5)
var list;

//sign in
login.onclick = function(){
    console.log("work")
    console.log(email.value)
    console.log(password.value)
    list = JSON.parse(localStorage.getItem('list'))
    console.log(list)
    obj = {
        login_email:email.value,
        login_password:password.value
    }
    console.log(obj.login_email)
    console.log(obj.login_password)

    for(var i=0;i<list.length;i++){
        console.log("site email",list[i].site_email)
        console.log("site password",list[i].site_password)
        if(obj.login_email == list[i].site_email && obj.login_password == list[i].site_password){
            console.log("true")
            login.classList.add("btnclick")
            window.location.href = "./home/home.html"
            text.innerHTML = `success`
            console.log("success")
            localStorage.setItem('name',JSON.stringify(list[i].site_Name))
        }
        else{
            text.innerHTML = `All inputs is required`
            text.classList.add("my-2")
            login.classList.add("btnclick")
            console.log("fail")
        }
    }
    // if(cmp_email === obj.login_email && cmp_password === obj.login_password){
    //     login.classList.add("btnclick")
    //     window.location.href = "home.html"
    //     console.log("success")
    // }
    // else{
    //     text.innerHTML = `All inputs is required`
    //     text.classList.add("my-2")
    //     login.classList.add("btnclick")
    //     console.log("fail")
    // }
}

