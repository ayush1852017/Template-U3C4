async function apiCall(url) {
  //add api call logic here
  try {
    let res = await fetch(url);
    let data = await res.json;
    console.log("data:", data);
    appendArticles(articles, main);
  } catch (error) {
    console.log("error:", error);
  }
}

function appendArticles(articles, main) {
  //add append logic here
  articles.forEach((el) => {
    let news_card = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.urlToImage;
    let title = document.createElement("h3");
    title.innerText = el.source.name;
    news_card.append(image, title);
    main.append(news_card);
  });
}

export { apiCall, appendArticles };
