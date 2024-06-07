//signup
var main_email = document.getElementById("main_email")
var main_password = document.getElementById("main_password")
var signup = document.getElementById("signup")
var text2 = document.getElementById("text2")
var _name = document.getElementById("name")

//array
var list;

if(localStorage.getItem('list') == null){
    list = []
}
else{
    list = JSON.parse(localStorage.getItem('list'))
}

//sign up
signup.onclick = function(){
    console.log(main_email.value)
    console.log(main_password.value)
    console.log(_name.value)
    mainobj = {
        site_email :main_email.value,
        site_password:main_password.value,
        site_Name:_name.value
    }
    list.push(mainobj)
    console.log(list)
    localStorage.setItem('list',JSON.stringify(list))
    if(main_email.value === '' || main_password.value === '' || _name.value === ''){
        text2.innerHTML = `All inputs is required `
        text2.style.color = '#dc3545'
        console.log("failed")
    }
    else{
        text2.innerHTML = `success`
        text2.style.color = '#28a745'
        console.log("success")
    }
    main_email.value = main_password.value = _name.value = null
}
