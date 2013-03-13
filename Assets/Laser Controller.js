#pragma strict
var laserspeed:int;

function Start () {

}

function Update () {
//all the laser speed needs forward motion
	transform.Translate(Vector3.up*laserspeed*Time.deltaTime);//delta time to slow down to frame rate 

}

//when the laser exists the scene
function OnBecameInvisible()
{
	Destroy(this.gameObject);
} 