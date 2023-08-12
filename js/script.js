const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let cities = ["Rio Branco", "Maceió", "Macapá", "Manaus", "Salvador", "Fortaleza", "Vitória",
"Goiânia", "São Paulo", "São Luís", "Rio de Janeiro", "Cuiabá", "Campo Grande", "Belo Horizonte", 
"Belém", "Porto Alegre", "Florianópolis", "Recife", "Teresina", "Natal", "João Pessoa", 
"Curitiba", "Porto Velho", "Boa Vista", "Aracaju", "Palmas", "Brasília"];

function addCity(selectedCity){
    options.innerHTML = "";
    cities.forEach(city => {
        let isSelected = city == selectedCity ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${city}</li>` ;
        options.insertAdjacentHTML("beforeend", li);        
    });
}
addCity();

function updateName(selectedLi){
    searchInp.value = "";
    addCity(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase();
    arr = cities.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Ops! Cidade não encontrada</p>`;
});

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});