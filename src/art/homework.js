import { makeNoise3D } from "fast-simplex-noise";
import { hsl, gray } from "../color.js";

let n = makeNoise3D();

/**
 * I call this shade function once for every pixel in the image, and 
 * set the color equal to whatever you return.
 * 
 * I call it 30 times a second so you can animate things
 * 
 * @param x - The x position in the image, from 0 (left) to 1 (right)
 * @param y - The y position in the image, from 0 (top) to 1 (bottom)
 * @param t - The time passed, in seconds
 * @returns The RGB color to display at the x,y location at time t
 */

function shade(x, y, t) {
    //❓❓ Question 2
    //❓❓ Question 3
    //❓❓ Question 4
    
    
    return [(155*y*Math.cos(t+180)+12)/100,(155*x*Math.sin(t+180)+17)/100,t]
}

/**
 * I call this draw function 30 times per second.
 * @param ctx - The 2d drawing context
 * @param t -The time in seconds
 */
function moon(ctx,t){
        //makes the moon and moves it across the screen
    ctx.beginPath();
    ctx.arc(155*Math.cos(t+180)+170,155*Math.sin(t+180)+170, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'grey';
    ctx.stroke();
    ctx.fillStyle = 'grey';
    ctx.fill();
}
function sun(ctx,t){
       //makes the sun and moves it across the screen
    ctx.beginPath();
    ctx.arc(155*Math.cos(t)+170,155*Math.sin(t)+170, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();

}
function windowshouseanddoor(ctx){
    //makes the house with roof, door, and windows
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.strokeRect(75, 140, 150, 110);
    ctx.fillRect(100,190,40,60);
    ctx.strokeRect(190,190,20,20)
    ctx.strokeRect(170,190,20,20)
    ctx.strokeRect(190,170,20,20)
    ctx.strokeRect(170,170,20,20)    
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
}

function draw(ctx, t) {
    //draws everything togther 
    //See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

    //❓❓ Question 5
    //❓❓ Question 6

    
    windowshouseanddoor(ctx);
    sun(ctx,t);
    moon(ctx,t);


}

export default { name: "Sun and Moon going around a house", shade, draw }