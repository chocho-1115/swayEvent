

;window.DeviceMotionEventEasy = {
	curTime : 100,//100,
	last_update : 0,
	shake : {
		callback : function(){},//摇一摇的回调函数
		B : false,//摇一摇的开关
		threshold : 5000,//阈值  控制摇动的力度  一般默认的5000  刚好差不多
	},
	variable : {
			last_x : null,
			last_y : null,
			last_z : null  
	},
	direction : {
		callback : function(){},//重力感应的回调函数
		B : false,//重力感应的开关
	},
	deviceMotionHandler : function (eventData) {
		var acceleration = eventData.accelerationIncludingGravity, 
			curTime = (new Date()).getTime(),
			this_ = window.DeviceMotionEventEasy;  
		if ((curTime - this_.last_update) < this_.curTime)return false;//函数节流
		//更新数据
		var diffTime = curTime -this_.last_update;    
		this_.last_update = curTime;        
 
		if(this_.shake.B){
			var speed = Math.abs(acceleration.x +acceleration.y + acceleration.z - this_.variable.last_x - this_.variable.last_y - this_.variable.last_z) / diffTime * 10000;   
			if (speed > this_.shake.threshold) {
				this_.shake.callback();  
			}
			this_.variable.last_x = acceleration.x;    
			this_.variable.last_y = acceleration.y;
			this_.variable.last_z = acceleration.z;    
		}
		if(this_.direction.B){
			this_.direction.callback(acceleration.x,acceleration.y,acceleration.z); 
		}
		
		  
		   
	}
};

//;


























