
//rectangle_2.js

module.exports = function(x,y,callback){
	try{

		if(x<0|| y<0){
			throw new Error("rectangle dimensions should be real numbers: l = " +x+ ', b =' +y);
		}else
			callback(null, {
				perimeter: function(){
					return (2*(x+y));
				},
				area: function(){
					return (x*y);
				}

			});
	}
	catch (error){
		callback(error, null);
	}

}