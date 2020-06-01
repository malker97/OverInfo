// const url = "http://owapi.io/profile/pc/us/臺灣省長蔡英文-4640";

// const url = "http://owapi.io/profile/pc/us/malker-1273";
const url = "http://owapi.io/profile/pc/us/";
function getUserID() {
    var playerid = "";
    var inputtext = document.getElementById("playerid");
    playerid = inputtext.value;
    playerid = playerid.replace(/#/,"-");
    return playerid;
}
function myfunction() {
    var tankrank = "";
    var damagerank = "";
    var supportrank = "";
    var username = "";
    var userid = getUserID();
    var newurl = url + userid;
    // alert(userid);
    // alert("Its a test for the file");
    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            tankrank = data.competitive.tank.rank;
            damagerank = data.competitive.damage.rank;
            supportrank =  data.competitive.support.rank;
            if (!tankrank){
                tankrank = "Unranked";
            }
            username = data.usename;
        })
}
// myfunction();
// alert("Its a test for the file");