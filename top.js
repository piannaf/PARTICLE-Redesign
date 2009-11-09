function JSFX_FloatBottomLeft()
{
	var startX = 45, startY = 50;
	var ns = (navigator.appName.indexOf("Netscape") != -1);
	var d = document;
	function ml(id)
	{
		var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
		if(d.layers)el.style=el;
		el.sP=function(x,y){this.style.left=x+"px";this.style.top=y+"px";};
		el.x = startX; 
		el.y = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		el.y -= startY;
		return el;
	}
	window.stayBottomLeft=function()
	{
		var pY = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		fblObj.y += (pY - startY - fblObj.y);
		fblObj.sP(fblObj.x, fblObj.y);
		setTimeout("stayBottomLeft()", 40);
	}
	fblObj = ml("divStayBottomLeft");
	stayBottomLeft();
}