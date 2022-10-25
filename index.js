const flags = ' -ru -рф';

window.addEventListener('load', function (e) {
	let tsf = document.querySelector('[action="/search"]');

	const hostValidate = window.location.hostname === 'www.google.com';
	
	const title = document.querySelector('title');
	if (hostValidate && !title.innerText.includes(flags) && window.location.pathname === '/search') {
		flagMinusRu(tsf);
		tsf.submit();
	}

	if (tsf) {

		let tsfButton = document.querySelector('#tsf button');
		if (tsfButton) {
			tsfButton.addEventListener('mousedown', function (e) {
				if (tsf) {
					flagMinusRu(tsf);
				}
			})
		}

		tsf.addEventListener('keydown', function (e) {
			if (tsf && e.key === 'Enter') {
				console.log(e.key, e.key === 'Enter')
				e.preventDefault();
				e.stopPropagation();
				flagMinusRu(tsf);
				tsf.submit();
			}
		})

		const getFlags = tsf.querySelector('[name="q"]');
		if (getFlags.value.includes(flags)) {
			getFlags.value = getFlags.value.split(flags)[0]
		}
	}

});

function flagMinusRu(tsf) {
	const tsfVALUE = tsf.querySelector('[name="q"]');
	const value = tsfVALUE.value;
	if (!value.includes(flags) && value.split('').length) {
		document.querySelector('[action="/search"] [name="q"]').value = value + flags;
	}
}
