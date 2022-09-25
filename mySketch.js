function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#ced4da");
	changeLightColor()
}

function draw() {
	translate(width/2,height/2);
	rectMode(CENTER);
	stroke(0)
	strokeWeight(5);
	fill(0)
	rect(0,0,500,300,30);
	fill("#8FB996")
	rect(5,-5,500,300,30);
	push()
	strokeWeight(0)
	fill(lightColor)
	textSize(16);
	textStyle(BOLDITALIC);
	text('STUST UNIVERSE ROBOTS', -220, -120);
	pop()
	push()
	strokeWeight(0)
	fill(0)
	textSize(200);
	textStyle(BOLDITALIC);
	text('V I P', -220, 70);
	pop()
	fill("#eaf4f4")
	rect(5,-5,120,100,20);
	fill(0)
	rect(5,-15,90,30,5);
	
	fill(255);
	if(frameCount%50==0){
		rect(-20,-15,20,10);
		rect(30,-15,20,10);
	}else{		
		rect(-20,-15,20,20);
		rect(30,-15,20,20);
	}
	fill(150)
	rect(5,25,50,20,0,0,10,10)
	fill("red")
	arc(5,33,30,20,PI,0,OPEN);
	
	fill(255)
	rect(-60,-5,15,40,10)
	rect(70,-5,15,40,10)
	
	if(frameCount%10==0){
		changeLightColor()
	}
}
function changeLightColor(){
	lightColor=color(random([
		"#FF7B00",
		"#FF8800",
		"#FF9500",
		"#FFA200",
		"#FFAA00",
		"#FFB700",
		"#FFC300",
		"#FFD000",
		"#FFDD00"
	]))
}