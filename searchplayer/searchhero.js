const url = "http://owapi.io/profile/pc/us/臺灣省長蔡英文-4640";

function myfunction() {
    var tankrank = "";
    // alert("Its a test for the file");
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // alert(data.competitive);
            console.log(data);
            tankrank = data.competitive.tank.rank;
            if (!tankrank){
                tankrank = "Unranked";
            }

            alert(tankrank);

        })
}
// myfunction();
// alert("Its a test for the file");