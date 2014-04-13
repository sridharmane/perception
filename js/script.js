/**
 * Global Variables
 */
$stage="";
$queue="";
/**
 *Wait for the DOM to load. Init eveything once loaded.
 */
$(document).ready(function(){
	
	init();
});

function init(){
		if(!$stage){
			$stage= new createjs.Stage("myCanvas");
			$stage.height=600;
			$stage.width=800;
			createBubble();
		}
	$queue = new createjs.LoadQueue(false);
	$queue.installPlugin(createjs.Sound);
	$queue.addEventListener("complete",handleLoadComplete);
	$queue.loadManifest([{id:"blop",src:"sound/blop.mp3"}]);
}


function createBubble(){
	console.log(1);
	createjs.Sound.registerSound("sound/blop.mp3","blop");
	//createjs.Sound.addEventListener("loadComplete",handleLoadComplete);
	console.log(11);	
	
}



function handleLoadComplete(event){
	console.log(2);
	var bubble = new createjs.Shape();
	bubble.graphics.beginFill("#00ff00");
	bubble.graphics.drawCircle(0,0,50);
	bubble.x = 100;
	bubble.y = 100;
	bubble.addEventListener("click",bubbleClick);
	console.log(3);
	createjs.Tween.get(bubble,{loop:true}).to({x:500},3000).to({x:50},3000);
	//createjs.Tween.get(bubble,{loop:true}).to({x:500},3000).to({x:100},3000);
	createjs.Ticker.addEventListener("tick",updateStage);
console.log(4);
	
	$stage.addChild(bubble);
}

function updateStage(event){
	$stage.update();
}

function bubbleClick(event){
	console.log("click");
	createjs.Sound.play("blop");
}
