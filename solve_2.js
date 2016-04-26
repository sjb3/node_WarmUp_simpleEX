var rect = require('./rectangle_2.js');

function solveRect(l, b){

	console.log('Solving for rectangle with l = ' + l + ' and b = ' + b);

	// provisioning call back function
	rect(l,b, function(err, rectangle){
		if(err){
			console.log(err);


		}else{
			console.log('The area of a rectangle of dimensions length = ' +l+ ' and breadth = ' +b+
				' is ' + rectangle.area());

			console.log('The perimeter of a rectangle of dimensions length = ' +l+ ' and breadth = ' +b+
				' is ' + rectangle.perimeter());

		}


	});
};

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);