window
  .fetch("https://api.covid19api.com/summary")
  .then((data) =>
    data
      .json()
      .then((covid) => {
        console.log(covid.Global);
        let Global = covid.Global;
        document.getElementById("covidBlock").innerHTML = `<section>

        <div>
          <h4 class="badge badge-success">TotalConfirmed:</h4>
          <span>${Global.TotalConfirmed}</span>
        </div>
        <div>
            <h4 class="badge badge-danger">NewConfirmed</h4>
           <span>${Global.NewConfirmed}</span> 
        </div>
        <div>
            <h4 class="badge badge-danger">NewDeaths</h4>
           <span>${Global.NewDeaths}</span> 
        </div>
        <div>
          <h4 class="badge badge-success">NewRecoverd:</h4>
          <span>${Global.NewRecovered}</span>
        </div>
        <div>
          <h4 class="badge badge-danger">TotalRecoverd:</h4>
          <span>${Global.TotalRecovered}</span>
        </div>
      </section>`;
      })
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));



  function caesarCipher(str,num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';
    
    for (var i = 0; i < lowerCaseString.length; i++) {
      var currentLetter = lowerCaseString[i];
      if (currentLetter === ' ') {
        newString += currentLetter;
        continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + num;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = 26 + newIndex;
      if (str[i] === str[i].toUpperCase()) {
        newString += alphabet[newIndex].toUpperCase();
      }
      else newString += alphabet[newIndex];
    };
    
    return newString;
  }
  caesarCipher('Zoo Keeper', 2);

  function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reversedWordsArr = [];
    
    wordsArr.forEach(word => {
      var reversedWord = '';
      for (var i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      };
      reversedWordsArr.push(reversedWord);
    });
    
    return reversedWordsArr.join(' ');
  }
   
  reverseWords('Coding JavaScript');


