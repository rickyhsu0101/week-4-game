$(document).ready(function(){
    var desiredNumber = 0;
    var total = 0;
    var win = 0;
    var lose = 0;
    function reset(){
        total = 0;
        $("#gameScore").text(total);
        desiredNumber = Math.floor(Math.random()*102)+19;
        console.log(desiredNumber);
        $("#desired").text(desiredNumber);
        $("#crystal1").attr("value", Math.ceil(Math.random()*12));
        $("#crystal2").attr("value", Math.ceil(Math.random()*12));
        $("#crystal3").attr("value", Math.ceil(Math.random()*12));
        $("#crystal4").attr("value", Math.ceil(Math.random()*12));
    }
    function change(){
        $("#gameScore").text(total);
        if(total == desiredNumber){
            alert("You Win");
            win++;
            $("#win").text(win);
            reset();
        }else if(total > desiredNumber){
            alert("You Lose");
            lose++;
            $("#lose").text(lose);
            reset();
        }
    }
    $(".button").each(function(){
        $(this).on("click", function(){
            var val = parseInt($(this).attr("value"));
            console.log(val);
            total += val;
            change()
        });
    });
    reset();
});

/*
function prime(val){
    if(val>1 && Math.isInteger(val)){
        var maxVal = Math.floor(Math.sqrt(val));
        for(int i = 2; i <= maxVal; i++){
            if(maxVal % i == 0){
                return false;
            }
        }
        return true;
    }
    return false;

}


*/
/*
var img = [];
var vid = [];
var imgExt = ["jpg", "gif", "jpeg", "png"];
var vidExt = ["avi", "mov", "mpeg", "mp4", "mpg"];
files.forEach(function(value){
    var s = value.split(".")[1];
    if(imgExt.includes(s){
        img.push(value);
    } else if (vidExt.includes(s)){
        vid.push(value);
    }
});

*/