var newsurl="http://newsapi.org/v2/everything\?q\=overwatch\&from\=2020-06-30\&sortBy\=publishedAt\&apiKey\=b0eb5e0f24ef42c2ada704c8036d1595";
// alert("sadasdasda");
function getnews() {
    fetch(newsurl)
        .then((res) => res.json())
        .then((data) => {
            // 这里是获取到的新闻json内容，data已经是这个内容类型的头了
            // console.log(data);
            // alert(data);
            console.log(data.articles[1].title);
            document.getElementById("newstitle1").innerText=data.articles[1].title;
            document.getElementById("description1").innerText=data.articles[1].description;
            document.getElementById("newstitle1").href=data.articles[1].url;

        })
}
getnews();