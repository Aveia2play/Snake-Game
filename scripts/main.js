window.onload = function(){
 
    var stage = document.getElementById('level');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);
//===========================

    const vel = 1;//velocity
    var vx = vy = 0;//starting velocity

    //starting position
    var px =10;
    var py = 15;

    //stage
    var tp = 30;//size 
    var qp = 20;//number of spaces
    
    var ax=ay=15;//apple start location
    
    var trail = [];//snake trail
    tail = 5;//snake tail
    
    function game(){
        px += vx;
        py += vy;

        //if the snake reaches the edge
        if (px <0) {
            px = qp-1;
        }
        if (px > qp-1) {
            px = 0;
        }
        if (py < 0) {
            py = qp-1;
        }
        if (py > qp-1) {
            py = 0;
        }

        //stage style
        ctx.fillStyle = "gray";
        ctx.fillRect(0,0, stage.width, stage.height);
        //apple style
        ctx.fillStyle = "red";
        ctx.fillRect(ax*tp, ay*tp, tp,tp);
        //snake style
        ctx.fillStyle = "whitesmoke";

        //snake life
        for (var i = 0; i < trail.length; i++) {
            
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
            if (trail[i].x == px && trail[i].y == py)
            {
                vx = vy=0;
                tail =5;
            
            }
        }
        //=======================
        //snake movement
        trail.push({x:px,y:py })
        while (trail.length > tail) {
        trail.shift();
        }
        //if the head touches the tail
        if (ax==px && ay==py){
            tail++;
            //put the apple in a random place in stage
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
        }

    }
    //===================
    function keyPush(event){

        switch (event.keyCode) {
            case 37: // Left
                vx = -vel;
                vy = 0;
                break;
            case 38: // up
                vx = 0;
                vy = -vel;
                break;
            case 39: // right
                vx = vel;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = vel;
                break;         
            default:
               
            break;
        }

        

    }

}
