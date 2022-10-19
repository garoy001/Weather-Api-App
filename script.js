const $form = $('#locationInput');
const $locationText = $('#locationText');
const $locationSubmit = $('#locationSubmit');
let weatherDataTemp = {};
let weatherData = {};
let part = '';

function tempConvert(type, temp) {
	if (type == 'celsius') {
	}
	if (type == 'f') {
	}
}

$form.submit((element) => {
	element.preventDefault();
	let locationText = $locationText.val();
	locationText = locationText.split(' ').join('+');
	console.log(locationText);
	const apiCallWeather = `https://api.openweathermap.org/data/2.5/weather?q=${locationText}&appid=2428f89e4496196c553a5b61abe465bf`;
	$.ajax(apiCallWeather).then((element) => {
		console.log(element);
		console.log(Object.values(element));
		Object.values(element).forEach((item, index) => {
			weatherDataTemp[index] = item;
		});
		Object.values(weatherDataTemp).forEach((item, index) => {
			if (index == 3) {
				weatherData['temperatures'] = item;
			} else if (index == 1) {
				weatherData['tempFeeling'] = item[0];
			} else if (index == 0) {
				weatherData['coord'] = item;
			} else if (index == 11) {
				weatherData['city'] = item;
			}
		});
		console.log(weatherData);
	});
});
