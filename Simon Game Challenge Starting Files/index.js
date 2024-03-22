var array=["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];
var level=1;
var started="false";
function gamestart(){
    level=1;
    $("h1").html("press any key to start");
    gamepattern=[];
    userClickedPattern=[];
}
    $(document).keypress(function(event){
        if(started==="false"){
        started="true";
        nextSequence();
    }}) ;


gamestart();
function nextSequence(){
    var a = Math.floor(Math.random()*4);
    var randomChosenColor=array[a];
    gamepattern.push(randomChosenColor);
    $("h1").html(level)
    level=level+1;
    $('#'+ randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
$(".btn").click(function(){
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);   
    checklogic(userClickedPattern.length-1);
});
function checklogic(number){
       if(gamepattern[number]!=userClickedPattern[number]){
          $("body").addClass("game-over");
          $("h1").html("wrong !press any key to start");
          var audio=new Audio('sounds/wrong.mp3');
          audio.play();
          setTimeout(function(){
            $("body").removeClass("game-over");
          },1000);
          gamerestart();
        return ;
       }
    
    if(userClickedPattern.length==gamepattern.length){
    userClickedPattern=[];
    setTimeout(nextSequence,1000);
   
    }
}

function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}
function animatePress(name){
    $('#'+ name).addClass("pressed");
    setTimeout(function(){
        $('#'+ name).removeClass("pressed");
    },100);
    
}
function gamerestart(){
    userClickedPattern=[];
    gamepattern=[];
    started="false";
    level=1;
}




