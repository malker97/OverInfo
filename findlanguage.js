function guesstheregion() {
    var language = navigator.language;
    // alert(language);
    var country = language.split("-");
    language = country[1];
    alert(language);
    switch (language) {
        case "CN":
            break;
        case  "US":
            break;
        case "RU":
            break;
        default:
        //默认设置成月球基地
    }
}