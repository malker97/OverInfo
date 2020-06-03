// alert("这个文件已经被调用了！");
function changelanguage() {
    var language = navigator.language;
    // alert(language);
    var country = language.split("-");
    language = country[1];
    // alert(language);

    var bgimg = document.getElementById("tiltejpg");
    if (language == "CN"){
        bgimg.style.backgroundImage="url('images/maps/CN.jpg')";
    }
    else if (language == "RU"){
        bgimg.style.backgroundImage="url('images/maps/RU.jpg')";
    }
    else if (language == "GB"){
        bgimg.style.backgroundImage="url('images/maps/GB.jpg')";
    }
    else if (language == "FR"){
        bgimg.style.backgroundImage="url('images/maps/FR.jpg')";
    }
    else {
        bgimg.style.backgroundImage="url('images/maps/DEF.jpg')";
    }
    // switch (language) {
    //     case "CN":
    //         break;
    //     case  "US":
    //         break;
    //     case "RU":
    //         break;
    //     default:
    //     //默认设置成月球基地
    // }
}
setTimeout(changelanguage,2000);
// changelanguage();
