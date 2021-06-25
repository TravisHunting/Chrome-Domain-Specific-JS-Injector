(function() {
	// Takes in an array in a variable named 'content'

	// Example Usage:
	// let logItem = `var content = "${your_var}";`;
	// chrome.tabs.executeScript(tab.id, {
	// 	code: logItem
	// }, function() {
	// 	chrome.tabs.executeScript(tab.id, {file: 'logger_helper.js'});
	// });

	content.forEach(e => console.log(e));
	
})();
