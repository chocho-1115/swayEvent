(function(){
	var last_update = 0,
	    last_x = null,
	    last_y = null,
	    last_z = null;
	window.DME = window.DME || {
		curTime : 100,//函数节流
		B : false,
		threshold : 5000,//阈值  控制摇动的力度  一般默认的5000  刚好差不多
		callback : null,
		handler : function (eventData) {
			var acceleration = eventData.accelerationIncludingGravity, 
				curTime = (new Date()).getTime(),
				self = window.DME;  
			if ((curTime - last_update) < self.curTime)return false;
			//更新数据
			var diffTime = curTime - last_update;    
			last_update = curTime;        
	 
			if(self.B){
				var speed = Math.abs(acceleration.x +acceleration.y + acceleration.z - last_x - last_y - last_z) / diffTime * 10000;   
				if (speed > self.threshold) {
					self.callback&&self.callback();  
				}
				last_x = acceleration.x;    
				last_y = acceleration.y;
				last_z = acceleration.z;    
			}  
		}
	}
}());


window.DOE = {
	callback : null,
	B : false,
	handler : function (eventData) {
		var self = window.DOE;
		if(self.B){
			self.callback(eventData.beta,eventData.gamma,eventData.alpha);
		}
	}
};

























