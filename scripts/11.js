window.onload=function(){
	var btn2=document.getElementById("btn2")
		var btn3=document.getElementById("btn3")
		var go=document.getElementById("go")
		
		btn2.onclick=function(){
			alert(this.target)
		}
		var box=document.getElementById("box")
		box.onclick=function(){
			alert("这是一个盒子")
		}
		
		btn3.addEventListener('click',function(){
			alert(event.target)
			event.stopPropagation()
		},false)

		go.addEventListener('click',function(){
			event.stopPropagation()
			event.preventDefault()
		},false)
}