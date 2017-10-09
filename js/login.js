$(function(){
    //localStorage.clear();
 
    /* 登录事件 */
    $(".login .submit").click(function(){      
        var name = $(".login input:text").val()
        var psw = $(".login input:password").val()
        var arr= [];
        var flag = false;
        console.log(name+"--"+psw)
        var login = json1.login;
        console.log(login)
        for(var k in login){
            console.log(login)
            if(login[k].name == name&&login[k].psw == psw){
                flag= true ;             
            }       
        } 
        arr.push({
            "islogin":flag,
            "use":name
        }) 
        localStorage.setItem("use",JSON.stringify(arr))
        if(flag){
            location.href="index.html" 
        }else{
            alert("账号或者密码不正确")
        }
          
    })
    /* 注册事件 */
    $(".zhuce .submit").click(function(){      
        var name = $(".zhuce input:text").val()
        var psw = $(".zhuce input:password").val()
        console.log(name+"--"+psw)
        json1.login.push({
            "name": name,
            "psw": psw
        })
        console.log(json1)
    })

     
})