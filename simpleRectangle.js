var rectangle  = {
		perimeter: function(x,y){
			return (2*(x+y));
		},
		area: function(x,y){
			return (x*y);
		}
	};

function solveRectangle(l,b){
	console.log('Solving for rectangle with l = ' + l + ' and b =' + b);

	if (l<0 || b<0) {
		console.log('Rectangle should be real numbers!');	
	} else {
		console.log('The are of a rectangle of dimensions length = ' 
		+ l + ' and breadth = ' + b + ' is ' + rectangle.area(l,b));
	}

	};

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(-3,5);

