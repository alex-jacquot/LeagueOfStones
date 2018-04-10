
subscribe(email, pseudo, mdp)
{
	adr = "http://localhost:8080/users/subscribe?email=" + $email + "&name=" + $pseudo + "&password=" + $mdp;

	fetch(adr)
	.then(function(data) {
		let result = data.results; // Get the results
		return result
		})


}

unsubscribe(email, mdp)
{
	adr = "http://localhost:8080/users/unsubscribe?email=" + $email +  "&password=" + $mdp;

	fetch(adr).then()
	{

		let result = data.results;
		return result;
	}
	

}

connect(email, mdp)
{
	adr = "http://localhost:8080/users/connect?email=" + $email +  "&password=" + $mdp;

	fetch(adr).then()
	//id,email,name,token

}

disconnect()
{
	//siconnecté
		adr = "http://localhost:8080/users/disconnect";
		fetch(adr).then()


}