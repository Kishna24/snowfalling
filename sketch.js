
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	backgroundIMG=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(backgroundIMG);  
  
  
  drawSprites();
  createSnow();
}

function createSnow(){
  if(frameCount%90===0){
    Snow.push(new Snow(random(width/2-10, width/2+10),10,10))
  }
}