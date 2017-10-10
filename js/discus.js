$(function () {

    function test(data) {
        if (data < 10) {
            data = "0" + data
        }
        return data
    }
    function times() {
        var time = new Date()
        var hour1 = time.getHours()
        var min = time.getMinutes()
        var sec = time.getSeconds()
        var year = time.getFullYear()
        var date = time.getDate()
        var month = time.getMonth()
        //	console.log(hour+"--"+min+"__"+sec)	       
        var timenow = test(year) + "年" + test(month + 1) + "月" + test(date) + "日 " + test(hour1) + ":" + test(min) + ":" + test(sec)
        return timenow;
    }

    var c = new Vue({
        el: ".discus",
        data: {
            mydate: [],
            usein: "",
            repdate: ""
        },
        methods: {
            replyshow: function (n) {
                if ($(".reuse").eq(n).hasClass("show")) {
                    $(".reuse").eq(n).removeClass("show")
                } else {
                    $(".reuse").eq(n).addClass("show")
                }
            },
            /* 回复功能 */
            rep: function (n) {
                console.log(this.mydate[n].usein)
                //var repdate1 = this.mydate[n].usein;
                var repuse1 = this.mydate[n].usename;
                var reptime1 = this.mydate[n].time;
                //console.log(repdate1+"--"+repuse1+"--"+reptime1)
                this.mydate.unshift({
                    isrep: "true",
                    repdate: this.mydate[n].usein,
                    repuse: this.mydate[n].usename,
                    reptime: this.mydate[n].time,
                    usein: this.repdate,
                    usename: "回复狂魔",
                    time: times()
                })
                this.repdate = ""
                $(".reuse").eq(n).removeClass("show")
            },
            /* 在别人的回复框中回复别人 */
            show: function () {

                if (this.usein == "") {
                    return
                }
                this.mydate.unshift({
                    usein: this.usein,
                    usename: "老三豆腐馆",
                    time: times()
                })
                this.usein = ""
            }
        }
    })

})