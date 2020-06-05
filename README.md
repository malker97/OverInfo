## Update
Make this Repo to public

# About this project

##The Repo [URL:https://github.com/malker97/CS410PFeFinalProject](https://github.com/malker97/CS410PFeFinalProject)
This Repo written by Xiaoran and Zhengmao.
##The Host[URL:https://malker97.github.io/](https://malker97.github.io/)
##About Template
> All code must be written by you. If you use any outside libraries or follow any tutorials, you should document that in your project Readme.
* The original template is included in the CSS folder and JS folder
###any outside libraries or follow any tutorials
* CSS: Bootstrap[URL](https://getbootstrap.com/) jQurery[url](https://jquery.com/) CSS Template[URL](http://www.templatesy.com/)
* JS: Bootstrap[URL](https://getbootstrap.com/) CSS Template[URL](http://www.templatesy.com/)
## Journal 
All logs are stored in Commit list in Chinses. :(
## The API We Used
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
