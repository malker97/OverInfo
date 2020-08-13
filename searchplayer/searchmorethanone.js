var url = "http://owapi.io/profile/pc/us/";
function creatilne() {
    let output = '';
    for (var i = 0;i <20;i++){
        output = output + "<h1><a id='playerid" + i +"'>"+"</a></h1>";
        output = output + "<p id='dpsrank" + i +"'>"+"</p>";
        output = output + "<p id='tankrank" + i +"'>"+"</p>";
        output = output + "<p id='supportrank" + i +"'>"+"</p>";
    }
    document.getElementById("result").innerHTML = output;
}

function getUserID() {
    var playerid = "";
    var inputtext = document.getElementById("playerid");
    playerid = inputtext.value;
    playerid = playerid.replace(/#/,"-");
    var cookieshistory = document.cookie;
    cookieshistory = cookieshistory + playerid + ";"+"expires=Thu, 18 Dec 2043 12:00:00 GMT;";
    // alert(cookieshistory);
    document.cookie = cookieshistory;
    return playerid;
}
function showallcookies() {
    var cookieshistory = document.cookie;
    // alert(cookieshistory);
    cookieshistory = cookieshistory.split(';');
    // alert(cookieshistory);
    for (var i in cookieshistory){
        var playerid = "playerid"+i;
        document.getElementById(playerid).innerText = cookieshistory[i];
        var newurl = url+cookieshistory;
        fetch(newurl)
            .then((res) => res.json())
            .then((data) => {
                var dpsrank = "dpsrank"+i;
                var tankrank = "tankrank"+i;
                var supportrank = "supportrank"+i;
                document.getElementById(dpsrank).innerText = data.competitive.damage.rank;
                document.getElementById(tankrank).innerText = data.competitive.tank.rank;
                document.getElementById(supportrank).innerText = data.competitive.support.rank;
            })
    }
}
function onclickfunc() {
    getUserID();
    showallcookies();
}
// getUserID();
creatilne();
onclickfunc();
// showallcookies();