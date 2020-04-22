const urlApi = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b486aba1fc7d4057bd92e2c990f8fbdd';

async function getNews() {
  const response = await fetch(urlApi);

  if (!response.ok) {
    throw new Error(`Что-то пошло не так:( Ошибка ${response.status}`);
  }

  const result = response.json();
  return result;
}

export async function getNewsList() {
  const response = await getNews();
  return response.articles;
}

export async function getOneNews(date) {
  const response = await getNews();
  return response.articles.find((news) => { return date === news.publishedAt; });
}
