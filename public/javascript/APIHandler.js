class APIHandler {
  constructor (baseUrl,buildCharacterBox) {
    this.BASE_URL = baseUrl;
    this.buildCharacterBox =buildCharacterBox
  }

  getFullList () {
axios
.get(`${this.BASE_URL}/characters`)
.then(result =>{
  console.log(result.data)
    result.data.forEach(character => {
      this.buildCharacterBox(character)

    })
})
.catch(erro =>{
  console.log(error)
});
  }

  getOneRegister(id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(result=>{
        let character = result.data
        this.buildCharacterBox(character)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  createOneRegister (character) {

    axios
    .post(`${this.BASE_URL}/characters`,character)
    .then((result)=>{
      fetchAllCharacters()

      document.querySelector('#new-character-form input[name="occupation"]').value = "";
      document.querySelector('#new-character-form input[name="name"]').value="";
      document.querySelector('#new-character-form input[name="weapon"]').value="";
      document.querySelector('#mew-character-form input[name="cartoon"]').value="";


    })
    .catch((err)=>{alert("Hay un error",err)})


  }

  updateOneRegister (character) {

    console.log(character)

    const {id, name,occupation,weapon} = character

    axios
    .put(`${this.BASE_URL}/characters/${id}`,{name,occupation,weapon})
    .then(()=>{

      document.querySelector(".characters-container").innerHTML ="";
      axios.get(`${this.BASE_URL}/characters/${id}`).then((response)=>{

        let char = response.data
        this.buildCharacterBox(char)

        document.querySelector('#edit-character-form input[name="chr-id"]').value = "";
        document.querySelector('#edit-character-form input[name="occupation"]').value = "";
        document.querySelector('#edit-character-form input[name="name"]').value="";
        document.querySelector('#edit-character-form input[name="weapon"]').value="";

      })


    })
    .catch((err)=>{console.log(err)})

  }

  deleteOneRegister(id) {
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(() =>fetchAllCharacters())
    .catch((error)=>console.log(error))
  }
}
