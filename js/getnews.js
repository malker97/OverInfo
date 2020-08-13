var newsurl="http://newsapi.org/v2/everything\?q\=overwatch\&from\=2020-07-15\&sortBy\=publishedAt\&apiKey\=b0eb5e0f24ef42c2ada704c8036d1595";
var localdate = new Date();
var localyear = localdate.getFullYear();
// alert(localyear);
// var localdat
var localdateM_d = localdate.getDate();
// alert(localdateM_d);
// alert("sadasdasda");
function getnews() {
    fetch(newsurl)
        .then((res) => res.json())
        .then((data) => {
            // 这里是获取到的新闻json内容，data已经是这个内容类型的头了
            console.log(data);
            // alert(data);

            // console.log(data.articles[1].title);
            // document.getElementById("newstitle1").innerText=data.articles[1].title;
            // document.getElementById("description1").innerText=data.articles[1].description;
            // document.getElementById("newstitle1").href=data.articles[1].url;
            // document.getElementById("newsimg1").src=data.articles[1].urlToImage;
<<<<<<< HEAD
            let output = "";
            output = output + "<div class = 'news-list'>";
            output = output + "<ul class= 'clearfix'>";
            for (var i in data.articles){
                output = output + "<li>";
                output = output + "<img  id = 'newsimg" + i +"'>";
                output = output + "<h3 id = 'newstitle"+ i +"'>" + "</h3>";
                output = output + "<p id = 'description"+ i +"'>" + "</p>";
                output = output + "</li>";
                // output = output + "<h3><a id='newstitle" + i +"'>"+"</a></h3>";
=======
            let output = '';
            for (var i in data.articles)
                output = output + "<h1><a id='newstitle" + i +"'>"+"</a></h1>";
>>>>>>> master
                // <p id="description1"></p>
                // output = output + "<p id='description" + i +"'>"+"</p>";
                // <img id="newsimg1" src="">
                // output = output + "<img id='newsimg" + i +"'>";
            }
            output = output + "</ul>"
            output = output + "</div>";
            // alert(output);
            document.getElementById("result").innerHTML = output;
            // alert(output);
            for (var i in data.articles){
                var imgid = "newsimg"+i;
                var titleid = "newstitle"+i;
                var descriptionid = "description"+i;
                document.getElementById(titleid).innerText = data.articles[i].title;
                document.getElementById(titleid).href=data.articles[i].url;
                //alert(data.articles[i].url);
                document.getElementById(imgid).src = data.articles[i].urlToImage;
<<<<<<< HEAD
                document.getElementById(imgid).href = data.articles[i].url;
                document.getElementById(descriptionid).innerText = data.articles[i].description;
                // document.getElementById(newstitle).innerText = data.articles[i].title;
                // // document.getElementById(titleid).style.textAlign = 'center';
                // document.getElementById(newsimg).src = data.articles[i].urlToImage;
=======
                document.getElementById(titleid).href = data.articles[i].url;
>>>>>>> master
            }
        })
}
// alert(<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Old soldiers never die, and they don&#39;t fade away.<br><br>We honor the memory of Roberto Draghetti who brought us the voice of Soldier: 76 in Italy. His extraordinary talent and unmistakable voice delivered depth and passion to one of Overwatch’s most iconic heroes. <a href="https://t.co/3D8TzEWdMx">pic.twitter.com/3D8TzEWdMx</a></p>&mdash; Overwatch (@PlayOverwatch) <a href="https://twitter.com/PlayOverwatch/status/1287887276182130688?ref_src=twsrc%5Etfw">July 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>);
getnews();
