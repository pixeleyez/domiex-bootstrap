document.getElementById('liveAlertBtn').addEventListener('click', function () {
	const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

	if (!alertPlaceholder.querySelector('.alert')) {
		const alert = document.createElement('div');
		alert.className = 'alert alert-primary alert-dismissible fade show';
		alert.role = 'alert';
		alert.innerHTML = 'You have successfully completed this thing! ' +
			'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="ri-close-fill"></i></button>';

		alertPlaceholder.appendChild(alert);
	}
});