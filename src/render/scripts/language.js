// get language
var params = new URL(window.location).searchParams;
var language = "nl";
if (params.has("lang") && params.get("lang") === "en"){
    language = "en";
}

// apply language
var divs = document.getElementsByClassName("lang");
for (var i=0; i<divs.length; i++){
    var huidig = divs[i];
    if (huidig.classList.contains("lang-"+language)){
        huidig.classList.add("lang-current");
    }
    else {
        huidig.classList.remove("lang-current");
    }
}

// update references to remember language
var refs = document.getElementsByTagName("a");
for (var i=0; i<refs.length; i++){
    var url = new URL(refs[i].href);
    if (url.hostname === "limo.a-eskwadraat.nl" && !refs[i].parentElement.classList.contains("lang-change")){
        url.searchParams.set("lang",language);
    }
    refs[i].href = url.toString();
}