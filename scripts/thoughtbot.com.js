(function() {

	console.log("Thoughtbot Injection Running");

	// The following code is an example of how to fill out a form, or alter other input values
	document.getElementById("user_name").value = "Username";
	document.getElementById("password").value = "Password123";
	// These lines result in the value being entered into the input box & your cursor resting in the input box at the end of the string that was input
	var token = document.getElementById("2fa_code");
	token.value = "1234";
	token.focus().val(token.val());

})();
