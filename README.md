# OverInfo[![Build Status](https://img.shields.io/cran/l/devtools)](https://github.com/malker97/OverInfo/blob/master/LICENSE) [![Build Status](https://img.shields.io/github/languages/count/malker97/OverInfo)](https://github.com/malker97/OverInfo) 
## Announcement
游戏中出现的Overwatch, 守望先锋等图片图标均暴雪娱乐有限公司版权所有
Overwatch, Overwatch and other picture icons appearing in the game are copyrighted by Blizzard Entertainment Co., Ltd.
## About
这是一个关于守望先锋的第三方玩家自制的网站，玩家可以在网站中查看自己账号的竞技分数，每赛季竞技比赛的倒计时，地图的相关背景故事，英雄的具体参数。不仅如此，我们近期还上线了于游戏相关的第三方新闻查询接口，玩家可以在我们的网站上查看最近一个月的与守望先锋相关的新闻信息。

This is a third-party player-made website about Overwatch. Players can view their account's competitive scores, countdown of each season's competitive games, map-related background stories, and specific hero parameters. Not only that, we have also recently launched a third-party news query interface related to the game. Players can view the latest news related to Overwatch on our website.
> 关于竞技分数查询的功能，目前只有美服，亚服和欧洲的玩家可以查询到与自己相关的信息。对于中国大陆的游戏玩家，因为网易公司并没有向玩家开放相应的接口，所以，目前我们并不能在国服玩家中实现这一功能。

>Regarding the function of querying competitive scores, currently only players in the US server, Asian server and Europe can query information related to themselves. For gamers in mainland China, because NetEase does not open the corresponding interface to players, we cannot currently implement this function for players in the national server.
## What we've updated this summer
### Search rank by userID
![alt playersearch](images/resource/rank search.png)

## How to use
### Best Way
首先是建议用户将我们的完整代码下载到本地，因为本项目已经安装好了所有的依赖环境，包括固定版本的Boostrap的依赖包，这可以使得您可以体验到与我们完全相同的功能。

First of all, it is recommended that users download our complete code locally, because this project has installed all the dependent environments, including the fixed version of the Boostrap dependent package, which allows you to experience exactly the same functions as ours.

[![Build Status](https://img.shields.io/github/repo-size/malker97/OverInfo)](https://github.com/malker97/OverInfo)
```shell script
git clone https://github.com/malker97/OverInfo.git
```
### Another Way
因为Github目前并不允许使用以http方式传输的JavaScript脚本，所以查询功能目前并不能在github的io项目中查看，但是您依旧可以畅游其他功能。

Because Github currently does not allow the use of JavaScript scripts transmitted via http, the query function is currently not available in the github io project, but you can still enjoy other functions.
Host：[https://malker97.github.io/](https://malker97.github.io/OverInfo)
### What we used
#### About Template
> 所有代码都必须由您编写。如果您使用任何外部库或遵循任何教程，则应在项目自述文件中进行记录。

> All code must be written by you. If you use any outside libraries or follow any tutorials, you should document that in your project Readme.
* The original template is included in the CSS folder and JS folder
* 原始模板包含在CSS文件夹和JS文件夹中,其中多数为依赖包

> about the searchmorethanone.js cuz its my owned repo, so i just copy it to OverInfo. when its useable i will upload its to searchhero webpage
#### any outside libraries or follow any tutorials
* CSS: Bootstrap[URL](https://getbootstrap.com/) jQurery[url](https://jquery.com/) CSS Template[URL](http://www.templatesy.com/)
* JS: Bootstrap[URL](https://getbootstrap.com/) CSS Template[URL](http://www.templatesy.com/)

### IF there are some ISSUE
Please tell us at the feedback part or connect me via the email.
[![Build Status](https://img.shields.io/bitbucket/issues-raw/malker97/OverInfo)](https://github.com/malker97/OverInfo/issues)
### Contributer
OverInfo is always looking for contributions, whether it's through bug reports, code, or new translations.
我们始终寻找与我们志同道合的合作者，不论是提交bugh还是提供翻译，或者与我们合作开发api
### Data (API)
Get Overwatch Player Information API: "http://owapi.io/profile/pc/us/[USERNAME]-[USERNUMBER]";
```json
{
  "username": "malker",
  "level": 311,
  "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7407ec3a17bdab6504f62561e74fadb7aac468f00c18a05b1d15bc57a1b5d1f2.png",
  "endorsement": {
    "sportsmanship": {
      "value": 0.28,
      "rate": 28
    },
    "shotcaller": {
      "value": 0.26,
      "rate": 26
    },
    "teammate": {
      "value": 0.47,
      "rate": 47
    },
    "level": null,
    "frame": "https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_2",
    "icon": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB3aWR0aD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgcj0iMTUuOTE1NDk0MzA5MTg5NTQiIGZpbGw9IiMyYTJiMmUiIHN0cm9rZS1kYXNoYXJyYXk9IjI2IDc0IiBzdHJva2UtZGFzaG9mZnNldD0iMjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjZjE5NTEyIiBjeD0iNTAlIiBjeT0iNTAlIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE1LjkxNTQ5NDMwOTE4OTU0IiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLWRhc2hhcnJheT0iNDcgNTMiIHN0cm9rZS1kYXNob2Zmc2V0PSI5OSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiNjODFhZjUiIGN4PSI1MCUiIGN5PSI1MCUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMTUuOTE1NDk0MzA5MTg5NTQiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2UtZGFzaGFycmF5PSIyOCA3MiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjUyIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iIzQwY2U0NCIgY3g9IjUwJSIgY3k9IjUwJSI+PC9jaXJjbGU+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiBmb250LWZhbWlseT0iY2VudHVyeSBnb3RoaWMsYXJpYWwsc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjMwMCIgZm9udC1zaXplPSIxNiIgc3Ryb2tlPSIjZjZmNmY2IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9IiNmNmY2ZjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5hTjwvdGV4dD48L3N2Zz4="
  },
  "private": false,
  "games": {
    "quickplay": {
      "won": 441
    },
    "competitive": {
      "won": 19,
      "lost": 6,
      "draw": 1,
      "played": 26,
      "win_rate": 76
    }
  },
  "playtime": {
    "quickplay": "104:59:50",
    "competitive": "04:49:48"
  },
  "competitive": {
    "tank": {
      "rank": null,
      "rank_img": null
    },
    "damage": {
      "rank": null,
      "rank_img": null
    },
    "support": {
      "rank": null,
      "rank_img": null
    }
  },
  "levelFrame": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/69c2c1aff0db8429a980bad7db76a3388003e43f0034097dc4cfa7f13c5de7d7.png",
  "star": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a2c852a16043f613b7bfac33c8536dd9f9621a3d567174cb4ad9a80e3b13102.png"
}
```
### Get TimeZone API:"http://worldtimeapi.org/api/ip"

```json
{
  "abbreviation": "CEST",
  "client_ip": "46.101.228.33",
  "datetime": "2020-06-05T08:55:11.734850+02:00",
  "day_of_week": 5,
  "day_of_year": 157,
  "dst": true,
  "dst_from": "2020-03-29T01:00:00+00:00",
  "dst_offset": 3600,
  "dst_until": "2020-10-25T01:00:00+00:00",
  "raw_offset": 3600,
  "timezone": "Europe/Berlin",
  "unixtime": 1591340111,
  "utc_datetime": "2020-06-05T06:55:11.734850+00:00",
  "utc_offset": "+02:00",
  "week_number": 23
}
```
### Netease Blizzard IMG API:"http://overwatch.nos.netease.com/1/assets/img/pages/heroes/list/[heronames].png"
![Dva](http://overwatch.nos.netease.com/1/assets/img/pages/heroes/list/dva.png)

### News API :"http://newsapi.org/v2/everything\?q\=overwatch\&from\=2020-06-03\&sortBy\=publishedAt\&apiKey\=APIKEY"
``` json
{
  "status": "ok",
  "totalResults": 1141,
  "articles": [
    {
      "source": {
        "id": "focus",
        "name": "Focus"
      },
      "author": "FOCUS Online",
      "title": "Profi-Gamer - Beliebter Twitch-Streamer \"Reckful\" tot: Byron Bernstein stirbt mit nur 31 Jahren",
      "description": "Der bekannte Gamer Byron \"Reckful\" Bernstein ist tot. Er ist am Donnerstag im Alter von nur 31 Jahren gestorben. Seine Freundin bestätigte die traurige Nachricht via Twitter.",
      "url": "https://www.focus.de/digital/profi-computerspieler-twitch-streamer-reckful-ist-tot-byron-bernstein-stirbt-mit-31-jahren_id_12170331.html",
      "urlToImage": "https://p5.focus.de/img/fotos/crop12170302/8352712155-w1200-h627-o-q75-p5/320742490-reckful-twitch-streamer-fzghjvcxua7.jpg",
      "publishedAt": "2020-07-03T09:05:03Z",
      "content": "Der bekannte Gamer Byron \"Reckful\" Bernstein ist tot. Er ist am Donnerstag im Alter von nur 31 Jahren gestorben. Seine Freundin bestätigte die traurige Nachricht via Twitter.\r\nDer US-amerikanische Pr… [+1847 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Belloflostsouls.net"
      },
      "author": "Adam Solis",
      "title": "Competitive 40K: Missing Pieces of the 9th Edition Puzzle",
      "description": "9th Edition is almost here, but there are a few pieces of the puzzle missing to truly understand the game.   Well, it has been and exciting couple of days.\nThe post Competitive 40K: Missing Pieces of the 9th Edition Puzzle appeared first on Bell of Lost Souls.",
      "url": "https://www.belloflostsouls.net/2020/07/competitive-40k-missing-pieces-of-the-9th-edition-puzzle.html",
      "urlToImage": "http://www.belloflostsouls.net/wp-content/uploads/2020/07/40k-9th-missing-pieces.jpg",
      "publishedAt": "2020-07-03T07:00:23Z",
      "content": "9th Edition is almost here, but there are a few pieces of the puzzle missing to truly understand the game.\r\nWell, it has been and exciting couple of days. We finally have a look at the core rules for… [+4372 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The National Interest "
      },
      "author": "Charlie Gao",
      "title": "Watch Out, Glock: The Faxon FX-19 Pistol Is Coming for the Throne",
      "description": "Charlie Gao\nSecurity, Americas\n \nA great upset?\nKey point: Glock is the long-reigning king. However, this new contender is one for everyone to pay attention to..\nThe Glock is America’s most popular pistol. Used by almost every branch of the military and over …",
      "url": "https://nationalinterest.org/blog/reboot/watch-out-glock-faxon-fx-19-pistol-coming-throne-164110",
      "urlToImage": "https://nationalinterest.org/sites/default/files/main_images/A694%20%281%29_0.jpg",
      "publishedAt": "2020-07-03T06:00:00Z",
      "content": "Key point: Glock is the long-reigning king. However, this new contender is one for everyone to pay attention to..\r\nThe Glock is Americas most popular pistol. Used by almost every branch of the milita… [+2938 chars]"
    },
]
}
```
