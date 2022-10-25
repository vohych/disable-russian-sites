chrome.omnibox.onInputStarted.addListener(function () {
	console.log('qwdqwd')
	chrome.omnibox.setDefaultSuggestion({
		description: "Type the name of a CSS property"
	})
})

chrome.omnibox.onInputChanged.addListener(function () {
	console.log('qwdw')
})