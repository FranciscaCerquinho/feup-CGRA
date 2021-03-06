/**
 * MyBall
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

function MyBall(scene) {
	CGFobject.call(this,scene);

  this.ball= new MyLamp(scene, 20,20);
	};

MyBall.prototype = Object.create(CGFobject.prototype);
MyBall.prototype.constructor=MyBall;

MyBall.prototype.display = function()
{
    this.scene.pushMatrix();
		this.scene.ballAppearance.apply();
		this.ball.display();
    this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.ballAppearance.apply();
		this.ball.display();
    this.scene.popMatrix();
}
