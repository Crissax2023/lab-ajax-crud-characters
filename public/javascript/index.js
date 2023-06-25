
window.addEventListener('load', () => {

  const charactersAPI = new APIHandler('http://localhost:8000',buildCharacterBox);


  function buildCharacterBox(character){
    let newDiv = document.createElement('div');
    let nameDiv= document.createElement('p');
    let idDiv = document.createElement('p');
    let ocupationDiv = document.createElement('p');
    let weaponDiv = document.createElement('p');

    newDiv.classList.add('character-info');

    nameDiv.append(`Name: ${character.name}`);
    idDiv.append(`ID: ${character.id}`);
    ocupationDiv.append(`Ocupation: ${character.ocupation}`);
    weaponDiv.append(`Weapon: ${character.weapon}`);

    newDiv.append(nameDiv);
    newDiv.append(idDiv);
    newDiv.append(ocupationDiv);
    newDiv.append(weaponDiv);

    document.querySelector(".characters-container").append(newDiv);

  }



  document.
  getElementById('fetch-all')
  .addEventListener('click', function (event) {
      charactersAPI.getFullList()
  });

  document.getElementById('fetch-one')
  .addEventListener('click', function (event) {
   let id = document.querySelector(".operation input").value
    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    let id = document.querySelector(".operation.delete input").value
    charactersAPI.deleteOneRegister(id)
 
  });

  document.getElementById('edit-character-form')
  .addEventListener('submit', function (event) {

    event.preventDefault();
    let id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
    let occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    let name = document.querySelector('#edit-character-form input[name="name"]').value;
    let weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    let character = {id,occupation,name,weapon}
    charactersAPI.updateOneRegister(character)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    let name = document.querySelector('#new-character-form input[name="name"]').value;
    let weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    let iscartoon = document.querySelector('#new-character-form input[name="cartoon"]').value;

    let character = {occupation,name,weapon,iscartoon}
    charactersAPI.createOneRegister(character)
  });
});
