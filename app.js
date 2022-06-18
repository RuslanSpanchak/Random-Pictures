getPhoto();

let x = setInterval(() => {

	getPhoto();

}, 5000)

reqInfo.onclick = function() {

	clearInterval(x);
	clearInterval(y);

}

let y;

search.onclick = function() {

	let info = reqInfo.value;

	getPhoto(info);

	y = setInterval(() => {

		getPhoto(info);

	}, 5000)

}

function getPhoto(info = "random") {

	fetch("https://source.unsplash.com/1980x1080/?" + info)

	.then(res => {

		console.log(res);
		wrap.style.backgroundImage = "url("+ res.url + ")";

	})

}

