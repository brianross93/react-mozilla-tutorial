/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Ball{constructor(){this.ballRadius=10,this.color=\"#0095DD\",this.x=250,this.y=160,this.dx=2,this.dy=2}drawBall(t){t.beginPath(),t.arc(this.x,this.y,this.ballRadius,0,2*Math.PI),t.fillStyle=this.color,t.fill(),t.closePath()}move(t){(this.x+this.dx>t.width-this.ballRadius||this.x+this.dx<this.ballRadius)&&(this.dx=-this.dx),(this.y+this.dy>t.height-this.ballRadius||this.y+this.dy<this.ballRadius)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy}determineLoss(t,i){this.y+this.dy>t.height-this.ballRadius&&(this.x>i.x&&this.x<i.x+i.width?this.dy=-this.dy:(alert(\"GAME OVER\"),document.location.reload()))}}class Brick{constructor(t,i,s){this.x=t,this.y=i,this.status=s,this.color=\"#0095DD\",this.width=75,this.height=20}drawBrick(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}detectCollision(t){t.x>this.x&&t.x<this.x+this.width&&t.y>this.y&&t.y<this.y+this.height&&(t.dy=-t.dy,this.status=0)}}class Paddle{constructor(t){this.color=\"#0095DD\",this.width=75,this.height=10,this.x=(t.width-this.width)/2}drawPaddle(t,i,s,h){this.x>t.width-this.width?this.x=t.width-this.width:s&&(this.x-=7),this.x<0?this.x=0:h&&(this.x+=7),i.beginPath(),i.rect(this.x,t.height-this.height,this.width,this.height),i.fillStyle=this.color,i.fill(),i.closePath()}}const canvas=document.getElementById(\"myCanvas\"),ctx=canvas.getContext(\"2d\"),ball1=new Ball,brickRowCount=5,brickColumnCount=3,brickWidth=75,brickHeight=20,brickPadding=10,brickOffsetTop=30,brickOffsetLeft=30,bricks=[];for(let t=0;t<brickColumnCount;t++){bricks[t]=[];for(let i=0;i<brickRowCount;i++){const s=85*i+30,h=30*t+30;bricks[t][i]=new Brick(s,h,1)}}const paddle=new Paddle(canvas);let rightPressed=!1,leftPressed=!1;function keyDownHandler(t){\"Right\"==t.key||\"ArrowRight\"==t.key?rightPressed=!0:\"Left\"!=t.key&&\"ArrowLeft\"!=t.key||(leftPressed=!0)}function keyUpHandler(t){\"Right\"==t.key||\"ArrowRight\"==t.key?rightPressed=!1:\"Left\"!=t.key&&\"ArrowLeft\"!=t.key||(leftPressed=!1)}function renderObjectsOnCanvas(){ctx.clearRect(0,0,canvas.width,canvas.height),ball1.drawBall(ctx),ball1.move(canvas);for(let t=0;t<brickColumnCount;t++)for(let i=0;i<brickRowCount;i++)1==bricks[t][i].status&&(bricks[t][i].drawBrick(ctx),bricks[t][i].detectCollision(ball1));paddle.drawPaddle(canvas,ctx,leftPressed,rightPressed),ball1.determineLoss(canvas,paddle)}document.addEventListener(\"keydown\",keyDownHandler,!1),document.addEventListener(\"keyup\",keyUpHandler,!1),setInterval(renderObjectsOnCanvas,10);\n\n//# sourceURL=webpack://breakout/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;