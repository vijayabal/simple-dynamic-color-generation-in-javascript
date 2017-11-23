$(document).ready(function(){
var dir = "frd";
var iCounter = 0;
var min,max;
var speed = $("#range").val();
			min = 0;
			max = 15;
var loop;
var counter = (function(){

    return function(){
               
        if (dir == "rev"){
            iCounter --;
        }else if (dir == "frd"){
            iCounter ++;
        }        
        iCounter = (iCounter == min) ? max - 1 : iCounter;
        iCounter = (iCounter == max) ? min + 1 : iCounter;        
        return iCounter;        
    };

})();

function applyColor(){
    
    var curDiv = "#color" + counter();
    var setColor = "#" + makeColorCode();
    //document.getElementById(curDiv).style.backgroundColor = setColor;
  $(curDiv).css("background-color",setColor);
    
}

function makeColorCode(){
    var color2 = "";
    for(i=0;i<6;i++){
      var color1 = Math.round(Math.random()*15);  
      switch(color1){
        case 10 : color1 = 'A';
                  break;
        case 11 : color1 = 'B';
                  break;  
        case 12 : color1 = 'C';
                  break;
        case 13 : color1 = 'D';
                  break;
        case 14 : color1 = 'E';
                  break;
        case 15 : color1 = 'F';
                  break;
        default : color1 = color1;
                  break;
      }
      color2 += color1;
     }
  return color2;
  }
 
 var loopfun = function(){
 									loop = setInterval(function() { applyColor() }, speed);
				 			};
   

$("input[name='reverse']").on("click", function(){
		dir = $(this).val();
    if(dir == "frd"){
    	$("#check1").attr("checked", true);
      $("#check2").removeAttr("checked");
    } else{
    	$("#check2").attr("checked", true);
      $("#check1").removeAttr("checked");
    }
    clearInterval(loop);
    loopfun();
});

$("#range").on("change", function(){
		speed = $(this).val();
		var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		$("#speedVal").html(speed + " ms");
		$(this).css('background-image',
					'-webkit-gradient(linear, left top, right top, '
					+ 'color-stop(' + val + ', #94A14E), '
					+ 'color-stop(' + val + ', #C5C5C5)'
					+ ')'
					);
		clearInterval(loop);
		loopfun();
});

$(document).on("click", "#start, #stop", function(){
	var btn = $(this).val();
	if(btn == "Start"){
		loopfun();
		$("#color15").html("Color are coming!");
	} else if(btn == "Stop"){
		clearInterval(loop);
		$("#color15").html("Stopped!");
	}
	
});

});