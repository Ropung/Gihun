var slideNo = 0;   
var timeout;   

function slide(x){
    slideNo += x;
    if(slideNo>2) slideNo = 0;
    if(slideNo<0) slideNo = 2;


    //  변수지정
    var header = document.getElementById('header');  
    var slideBox = document.getElementById('slideBox');  
    var circle = document.getElementsByClassName('circle');  
    var headertext = document.getElementsByClassName('headertext'); 
  

    var newX = ((slideNo)  * -100/3) + '%';   //위치 
    slideBox.style.transform = 'translateX('+newX+")"; 


    var a;
    for(a=0;  a<=2;  a++){
        circle[a].style.backgroundColor = "rgba(255,255,255,.3)";
        circle[a].style.transform = "scale(1)";
        headertext[a].style.display = 'none';
    }        


    circle[slideNo].style.backgroundColor = "#fff";
    circle[slideNo].style.transform = "scale(1.4)";

    //해당 텍스트 보이기
    headertext[slideNo].style.display = 'block'

}

//서클 버튼 클릭했을 때 슬라이드 이동
function circle(x){
    clearInterval(timeout);   //자동 넘김 중단
    slideNo = x;   //클릭한 서클버튼 위치를 슬라이드 번호로 맞춤
    slide(0);   //함수에 추가로 번호가 더해지지 않도록 0을 넘겨줌
}


//자동 슬라이드 정지
function stopSlide(){
    clearInterval(loop);
}

//자동슬라이드 시작
function playSlide(){
    loop=setInterval('slide(1)',3000);
        //2초 간격으로 슬라이드 자동 실행(다음장면으로 넘어가도록 1을 넘김)
}


//섹션 2용 넘버
var no=0; 

function change(){
    no++;
    if(no>5){
        no=1;
    }
        var name = "images/secB0"+no+".jpeg";
        var name2= "images/secC0"+no+".jpeg";
        document.getElementById("secBimg").src = name;
        document.getElementById("secCimg").src = name2;

        setTimeout("change()" , 2000);
        console.log(no);
}


