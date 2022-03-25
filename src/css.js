const string = `.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}

.skin{
    position: relative;
    background-color:rgb(255, 230, 0);
    height: 100vh;
}

.nose{
    position: relative;
    z-index: 9;
}

@keyframes wave{
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(5deg);
  }
  66%{
    transform: rotate(-5deg);
  }
  100%{
    transform: rotate(0deg);
  }

}
.nose:hover{
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}


.san{
    border: 10px solid;
    border-color: black transparent transparent;
    border-bottom: 0px;
    margin-left: -10px;
    height: 15px;
    width: 15px;
    position: relative;
    left: 50%;
    top: 140px;
}

.yuan{
    background-color: black;
    height: 6px;
    width: 20px;
    position: relative;
    top: -15px;
    left: -10px;
    border-radius: 50% 50% 0 0;
}

.eye{
    border: 3px solid black;
    position: absolute;
    height: 64px;
    width: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 50%;
    background-color: rgb(46,46,46);
}

.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}

.eye::before{
    content: '';
    display: block;
    border: 3px solid black;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: -2px;
}

.face{
    border: 3px solid black ;
    width: 90px;
    height: 90px;
    position: absolute;
    left: 50%;
    top: 220px;
    margin-left: -45px;
    border-radius: 50%;
    background-color: red;
}

.face.left{
    transform: translateX(-160px);
}
.face.right{
    transform: translateX(160px);
}

.mouth{

    position: absolute;
    height: 200px;
    width: 160px;
    left: 50%;
    top: 170px;
    margin-left: -80px;
}

.lip{
    border: 3px solid black;
    height: 30px;
    width: 80px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    z-index: 1;
}

.lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-40px) translateY(-10px);
}
.lip.right{
  border-radius: 0 0 50px 0px;
  transform: rotate(15deg) translateX(40px)translateY(-10px);
}

.mouth .lip::before{
  content: '';
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}
.mouth .lip.left::before{
  right: -6px;

}
.mouth .lip.right::before{
  left: -6px;
}

.mouth .down{
  height: 180px;
  position: absolute;
  top: 15px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;

}

.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;

}
`

export default string;