 const buttons = document.querySelectorAll('.toggleButton');
 buttons.forEach(button => {
	 const activeText = button.querySelector('.activeText');
	 const unactiveText = button.querySelector('.unactiveText');
	 const loadingSpinner = button.querySelector('.loadingSpinner');

	 let isActive = false;
	 let loadingButton = false;

	 button.addEventListener('click', function() {
		loadingButton = true;
		 loadingSpinner.style.display = 'inline-block';
		 activeText.style.display = 'inlie-block';
		 unactiveText.style.display = 'inlie-block';

		 setTimeout(() => {
			loadingButton = false;
			 loadingSpinner.style.display = 'none';

			 isActive = !isActive;

			 if (isActive) {
				 activeText.style.display = 'none';
				 unactiveText.style.display = 'inline-block';
			 } else {
				 activeText.style.display = 'inline-block';
				 unactiveText.style.display = 'none';
			 }
		 }, 2000);
	 });
 });