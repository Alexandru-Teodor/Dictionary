const dictionary = new Set();

function addWord() {
    let input = document.getElementById("add-box").value;
    dictionary.add(input.toLowerCase());
    return false;
}

function searchWord() {
    let search = document.getElementById("search-box").value;
    let result = document.getElementById("result");
    if(dictionary.has(search.toLowerCase())) {
        result.innerHTML = "The word \"" + search + "\" is in the dictionary."
        result.style.color = "darkgreen";
    }
    else {
        result.innerHTML = "The word \"" + search + "\" is not in the dictionary."
        result.style.color = "red";
    }
    setTimeout(function(){
        result.innerHTML = "";
    }, 3000);
    return false;
}

