$('form').on('submit', function (evt) {
	evt.preventDefault();
	let title = $('#title').val();
	let rating = $('#rating').val();
	if (title.length < 2) {
		throw new Error('title must have at least 2 characters!');
	}
	if (rating < 0 || rating > 10) {
		throw new Error('rating must be between 1 and 10!');
	}
	$('h2').append(`movie: ${title}, rating: ${rating}`).append('<div></div>');
})
$('button').on('click', function (evt) {
	evt.preventDefault();
	$('h2').empty();
})
