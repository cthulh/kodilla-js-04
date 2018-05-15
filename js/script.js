'use strict';
(function(){

	var showModal = function(event){
		console.log(this);
    var targetModal = this.getAttribute('href');
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
    for (let modal of modals) {
      if (modal === document.querySelector(targetModal)) {
        console.log(modal.id + ' was clicked');
        modal.classList.add('show');
      } else {
        modal.classList.remove("show");
      }
    }
	};

	var modalLinks = document.querySelectorAll('.show-modal');

	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};

	var closeButtons = document.querySelectorAll('.modal .close');

	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}

	document.querySelector('#modal-overlay').addEventListener('click', hideModal);

	var modals = document.querySelectorAll('.modal');

	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}

})();
