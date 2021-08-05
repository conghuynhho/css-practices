const searchContainer = document.querySelector(".search-container");
const searchInput = searchContainer.querySelector(".search-input");
const suggestBox = searchContainer.querySelector(".suggest");
const icon = searchContainer.querySelector(".search-icon");
const aTag = searchContainer.querySelector("a");

searchInput.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArr = [];
  if (userData) {
    emptyArr = suggest.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArr = emptyArr.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    showSuggest(emptyArr);
    suggestBox.classList.add("active");
    let allList = suggestBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
    if (searchInput.value) {
      icon.addEventListener('click',()=>{
        let webLink = 'https://www.google.com/search?q=' + searchInput.value;
        aTag.href = webLink;
        aTag.click();
      })
      // icon.onclick = function(){
      //   let webLink = 'https://www.google.com/search?q=' + searchInput.value;
      //   aTag.href = webLink;
      //   aTag.click();
      // }
    }
  } else {
    suggestBox.classList.remove("active");
  }
};

function showSuggest(List) {
  if (!List.length) {
    var userInput = searchInput.value;
    var suggList = "<li>" + userInput + "</li>";
  } else {
    var suggList = List.join("");
  }
  suggestBox.innerHTML = suggList;
}

function select(element) {
  let userSelect = element.textContent;
  searchInput.value = userSelect;
  let webLink = 'https://www.google.com//search?q=' + userSelect;
  aTag.href = webLink;
  aTag.click();

  suggestBox.classList.remove("active");
}
