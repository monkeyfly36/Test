function myReady(fn){
	function IEcontentLoaded(fn){
		var done=false;
		//只执行一次用户的回调函数init()
		var init= function(){
			if (!done) {
				done=true;
				fn();
			}
		};
	}
}