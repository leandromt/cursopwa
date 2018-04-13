// Lista de Notas
let notes = {data: []};


// 
let updateList = function(){

	console.log('[Application] Start Watch');

	Array.observe(notes.data, function(changes) {
		
		let index = null;
		let value = '';
		let status = null;

		if(changes[0].type === 'splice'){
			index = changes[0].index;
			value = changes[0].object[index];
			status = (changes[0].addedCount > 0) ? 'created' : 'removed';
		}

		if(changes[0].type === 'update'){
			index = changes[0].name;
			value = changes[0].object[index];
			status = 'update';
		}

		if(!value && status === 'created' && status === 'update'){
			return;
		}

		let notesTag = document.getElementById('notes');

		if(status === 'updated'){
			console.log('implementar');
		}
		if(status === 'removed'){
			let listOfNotes = document.querySelectorAll('#notes li');
			notesTag.removeChild();
		}
		if(status === 'updated'){

		}

		console.log(changes);


	});
}


// let e utilizado para criacao de variavel menos global. Melhor de controlar
let createNote = function() {

	// querySelector funciona como seletor CSS do jquery
	let input = document.querySelector('#form-add-note input[type="text"]');
	let value = input.value;

	notes.data.push(value);

	input.value = "";

}



updateList();


// Equivalente ao document ready do jquery
document.addEventListener('DOMContentLoaded', function(event) {

	// Recupera um elemento pelo ID
	let formAddNotes = document.getElementById('form-add-note');

	// Adiciona um evento em um elemento
	formAddNotes.addEventListener('submit', function(e){

		// Cancela o envio do form. Stop qualquer evento padrao
		e.preventDefault();
		
		createNote();

	});

});



// Evento clic nas notas para serem removidas
// As notas serao adcionadas com Ajax, por isso o click nao pode esta amarrada nelas, e sim no pai
document.addEventListener('click', function(e) {

	// Recupera a lista de notas
	let notesTag = document.getElementById('notes');

	// 
	if(e.target.parentElement === notesTag){

		if(confirm('remover esta nota?')){

			let listOfNotes = document.querySelectorAll('#notes li');

			listOfNotes.forEach(function (item, index) {

				if(e.target === item){
					notes.data.splice(index, 1);
				}

			});

		}

	}


});