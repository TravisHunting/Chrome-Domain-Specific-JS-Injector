// Bare minimum skeleton found at https://gist.github.com/danharper/8364399

function logHelper(tab, logItemArray) {
	let logItems = "var content = [" + `${logItemArray}` + "];";
	chrome.tabs.executeScript(tab.id, {
		code: logItems
	}, function() {
		chrome.tabs.executeScript(tab.id, {file: 'console_logger.js'});
	});
}

function loadScript(tab) {
	var logItems = [];
	
	var domainMatcher = /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i;
	var matches = tab.url.match(domainMatcher);
	var domain = matches && matches[1]; // domain will be null if no match is found 
	var scriptPath = chrome.runtime.getURL(`/scripts/${domain}.js`);

	logItems.push(`"Domain: ${domain}"`)

	// async function, items below this code block will go into effect before this concludes
	chrome.tabs.executeScript(tab.id, 
		{ file: `/scripts/${domain}.js` }, 
		function(results) {
		if (results === undefined) {
			logItems.push(`"Please create the file '/scripts/${domain}.js' in the extension directory."`);
			alert("No script found for this domain.\nPlease check console for more information (F12).");
			logHelper(tab, logItems);
		}
		else {
			logItems.push(`"Script Path: ${scriptPath}"`)
			logHelper(tab, logItems);
		}
	});

}

// listen for browserAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// async function to get tab information
	chrome.tabs.getSelected(null, function(tab) {
		loadScript(tab);
	});
});
