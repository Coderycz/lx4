$(function(){
    /* 检验是否处于登录状态 */
    function testlogin(){
        var message = JSON.parse(localStorage.getItem("use"));
        console.log(message)
        if(message == null){
            $(".wraplogin").hide()
            $(".login1").show()
            return
        }else if(message[0].islogin == true){
           var name = message[0].use 
           $(".login1").hide()
           $(".wraplogin").show()
           $(".persontop .use-name").html(name)
        }else{
            $(".wraplogin").hide()
            $(".login1").show() 
        }
    }
    
    testlogin()   
    /*  */
    $(".persontop").click(function(){
        $(".sonmenu").slideToggle()
       //$(".sonmenu").fadeOut()
    })
    /* 退出登录 */
    $(".exit").click(function(){
       /*  var arr = [{
            "islogin": false,
            "name": "suiyi"
        }]
        localStorage.setItem("use",JSON.stringify(arr)) */
        localStorage.clear()
        testlogin() 
    })
    $(".login1").on("click","span",function(){
        var index = $(this).index()
        localStorage.setItem("index",index)
    })

})