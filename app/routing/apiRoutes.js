//routes for API express

// get FRIENDS array in JSON format 
var FRIENDS = require("../data/friends.js");

module.exports = function(app)
{
	app.get('/api/friends', function(req,res){
		res.json(FRIENDS);
	});
	//comparesScores best match 
	app.post('/api/friends', function(req,res){

		res.json(compareScores(req.body));
		FRIENDS.push(req.body);
	});
}

//loop through scores of each friend to find the best match
function compareScores(user)
{
	var bff;

	var lowestTotal = 100;

	For(var key in FREINDS)
	{

		//friend array
		var friend = FRIENDS[Key];

		var total = 0; 

		for (var i = 0; i < user.scores.length; i++) {
			
		}

}