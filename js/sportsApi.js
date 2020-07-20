// news Api key 063bd7406083468fac60d5efc3f3e84a

let SportsUrl =
  "http://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=1e02bcd53b16416eba5e8d12b9800489";

// let health =
//   "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cb09e5eb4a8149e1936c0375a6345cc3";
// let business =
//   "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cb09e5eb4a8149e1936c0375a6345cc3";
// let technology =
//   "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cb09e5eb4a8149e1936c0375a6345cc3";
// let science =
//   "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=cb09e5eb4a8149e1936c0375a6345cc3";

function sportsTab() {
  window
    .fetch(SportsUrl)
    .then((SportsData) => {
      SportsData.json()
        .then((sports) => {
          let sportsFeed = sports.articles;
          let firstSportBlock = sports.articles;

          let sportnewsBlockOne = firstSportBlock[0];
          document.getElementById("sportFirstTemplate").innerHTML = `<ul>
          <img class = enterImg src = '${sportnewsBlockOne.urlToImage}'/>
          <a href = '${sportnewsBlockOne.url}' target = '_blank'>
          </a>

          </ul>`;
          let output = [];
          for (let sport of sportsFeed) {
            output += `<ul class = "list-group">
    <a href = "${sport.url}"target = "_blank">
    <li class = 'text-dark'>
    ${sport.title}</li></a>
    </ul>`;

            document.getElementById("sportAllTemplate").innerHTML = output;
          }
        })
        .catch((err) => console.log(err));
    })

    .catch((err) => console.log(err));
}
