let newsBox = document.querySelector('#newsBox2');
// let newsAccordion = document.getElementById('newsAccordion');

let source = 'the-times-of-india';
let apiKey = '57e1c1b3a2e44312abcc0d13c1ecb641'

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
  if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
          // console.log(element, index)
          let news = `<h3><b>Breaking News ${index+1}:</b> ${element["title"]}</h3>
                     <div>
                        <div>
                         ${element["content"]}.<a href="${element['url']}" target="_blank" >Read more here</a>  
                        </div>
                    </div><hr>`;
          newsHtml += news;
      });
      newsBox.innerHTML = newsHtml;
  }
  else {
      console.log("Some error occured")
  }
}

xhr.send()