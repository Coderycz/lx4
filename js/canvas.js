$(function () {
    /*  用canvas生成会动的背景图 */
    console.log($(window).height())
    var can = document.getElementById("canvas");
    var ctx = can.getContext('2d');
    can.height = $(window).height();
    can.width = $(window).width();
    var nodes = [];				//存储100个点
    var lines = [];				//存储100个点之间的所有的线段
    var focus = [];				//存储鼠标的实时坐标
    var mouseandnode = [];		//存储鼠标与各点之间的线段
    var mouseX = 100;			//初始化鼠标的X坐标
    var mouseY = 223;
    //生成100个点		
    for (let i = 0; i < 100; i++) {

        var node = {
            x: Math.random() * can.width,
            y: Math.random() * can.height,
            vx: Math.random() * 1 - 0.5,
            vy: Math.random() * 1 - 0.5,
            a: 1
        }
        nodes.push(node);
    }
    //将所有点的连线存储在一个数组中
    nodes.forEach(function (e) {
        nodes.forEach(function (e2) {
            if (e == e2) {
                return;
            }
            var line = {
                from: e,
                to: e2
            }
            lines.push(line);
        })

    })
    //鼠标在画布上的坐标
    can.onmousemove = function (e) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
        console.log(mouseX + "--" + mouseY)
    }
    //画出100个点 和鼠标焦点
    function drawdat(nodes) {
        ctx.fillStyle = "red";
        nodes.forEach(function (item) {
            ctx.beginPath();
            ctx.arc(item.x, item.y, 2, 0, Math.PI * 2, true);
            ctx.fill();
            //item.vy = item.vy+item.a

            border(item);
            //版本二，将鼠标事件与点事件写一起
            /*focus[0]={
                x: mouseX,
                y: mouseY
            }
            if(mouseandball(item)<canvas.width/6){
                ctx.strokeStyle = "red";
                var long = mouseandball(item);
                var maxlength = canvas.width/12
                ctx.lineWidth=   40/mouseandball(item);
                if (ctx.lineWidth >2) {
                    ctx.lineWidth =2
                }
                console.log(mouseandball(item)+"---"+ctx.lineWidth+"---"+maxlength+"---"+long / maxlength)
                ctx.beginPath();
                ctx.moveTo(mouseX,mouseY);
                ctx.lineTo(item.x,item.y);
                ctx.stroke();
            }*/
            //console.log(nodes.length)
        })
    }
    //计算每条线的长度		
    function length(line) {
        return Math.sqrt(Math.pow((line.from.x - line.to.x), 2) + Math.pow((line.from.y - line.to.y), 2))
    }
    //版本二用到
    function mouseandball(obj) {
        return Math.sqrt(Math.pow((mouseX - obj.x), 2) + Math.pow((mouseY - obj.y), 2))
    }
    //画出鼠标划过的点（鼠标事件）
    function drawdat1(nodes) {
        ctx.fillStyle = "red";
        nodes.forEach(function (item) {
            ctx.beginPath();
            ctx.arc(item.x, item.y, 2, 0, Math.PI * 2, true);
            ctx.fill();
        })
    }
    //画出满足条件的线条			
    function drawlines(lines) {
        //遍历线条数组		
        lines.forEach(function (iteml) {
            var long = length(iteml);
            var maxlength = canvas.width / 12;
            if (long > maxlength) {
                return
            }
            ctx.strokeStyle = "red";
            ctx.lineWidth = (1.0 - long / maxlength) * 2.5;
            ctx.beginPath();
            ctx.moveTo(iteml.from.x, iteml.from.y);
            ctx.lineTo(iteml.to.x, iteml.to.y);
            ctx.stroke();
            //console.log(length(iteml))
            //var maxlength = 
        })
    }
    //判断边界		
    function border(item) {
        item.x += item.vx;
        item.y += item.vy;
        if (item.y >= can.height) {
            item.vy = -item.vy;
            item.vx = item.vx;
            item.y = can.height
        }
        if (item.y <= 0) {
            item.vy = -item.vy;
            item.vx = item.vx;
            item.y = 0
        }
        if (item.x >= can.width) {
            item.vy = item.vy;
            item.vx = -item.vx;
            item.x = can.height
        }
        if (item.x <= 0) {
            item.vy = item.vy;
            item.vx = -item.vx;
            item.x = 0
        }
    }
    //画出鼠标与各点的连线		
    function drawlines1(lines) {
        //var focus =[];
        focus[0] = {
            x: mouseX,
            y: mouseY
        }
        //清空上一次的100个线条，重新生成100条线条			
        mouseandnode.splice(0)
        nodes.forEach(function (e) {
            var line = {
                from: focus[0],
                to: e
            }
            //存储鼠标与点之间的100条线段
            //mouseandnode数组中存储对象，对象中还有一个对象
            mouseandnode.push(line);
        })
        //console.log(mouseandnode.length)
        //画出鼠标划过事件
        lines.forEach(function (iteml) {
            var long = length(iteml); 			//
            var maxlength = canvas.width / 8;
            if (long > maxlength) {
                return
            }
            ctx.strokeStyle = "red";
            ctx.lineWidth = (1.0 - long / maxlength) * 2.5;
            //console.log(ctx.lineWidth)
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            //ctx.moveTo(iteml.from.x,iteml.from.y);
            ctx.lineTo(iteml.to.x, iteml.to.y);
            ctx.stroke();
        })
    }
    //定时器
    $(window).resize(function(){
        can.height = $(window).height();
        can.width = $(window).width();
    })	
    setInterval(function () {
        ctx.clearRect(0, 0, can.width, can.height)
        drawdat(nodes);
        drawdat1(focus);
        drawlines(lines);
        drawlines1(mouseandnode)
    }, 16)


})