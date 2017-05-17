# devicemotion

 [shake.js](https://github.com/alexgibson/shake.js)

当页面同时注册了devicemotion 和 deviceorientation 事件的时候，最好先注册 devicemotion 事件，然后注册 deviceorientation 事件。因为经过测试在很少一部分手机（比如sm-a7009）下，如果顺序不对，将导致devicemotion事件失效。（原因未知，测试时间2017/05/17）
