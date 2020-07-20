let entertainmentApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=cb09e5eb4a8149e1936c0375a6345cc3";

function EntertainmentTab() {
  window
    .fetch(entertainmentApi)
    .then((entertainmentData) => {
      entertainmentData
        .json()
        .then((entertainment) => {
          let entertainmenntFeed = entertainment.articles;
          let firstEntertainmentBlock = entertainment.articles;


          let output = [];
          for (let enter of entertainmenntFeed) {
            console.log(enter);
            let date = new Date(enter.publishedAt).toDateString();
            output += `<div class = "row">
            <div class = "col-md-5">
            <img src  = "${enter.urlToImage}" class = "enterImg">
            </div>
            <div class = "col-md-7">
            <ul class = "list-group">
            <a href = "${enter.url}" target = "_blank">
            <li class = "text-dark">
            ${enter.title}</li></a>
            <span class = "text-muted tex-right">publishedAt: ${date}</span>
            </ul>
            </div>
            </div>`;

            document.getElementById(
              "entertainmentAllTemplate"
            ).innerHTML = output;
          }
        })
        .catch((err) => console.log(err));
    })

    .catch((err) => console.log(err));
}
