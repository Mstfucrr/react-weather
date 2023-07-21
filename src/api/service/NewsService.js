
export async function getNews() {
  const url = 'https://www.mynet.com/haberler/hava-durumu';
  const response = await fetch(url);
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const basliklar = doc.querySelectorAll('div.list-item');
  const gorseller = doc.querySelectorAll('div.list-item img');
  const dates = doc.querySelectorAll('div.list-item span.date');
  const links = doc.querySelectorAll('div.list-item div.card-body a');
  const details = doc.querySelectorAll('div.list-item div.card-body p');

  const newsList = [];

  for (let i = 0; i < Math.min(basliklar.length, 4); i++) {
    const news = {
      Baslik: basliklar[i].textContent?.trim() || '',
      Image: gorseller[i]?.getAttribute('data-original') || '',
      Detail: details[i].textContent?.trim() || '',
      Date: dates[i]?.textContent?.trim() || '',
      Link: links[i]?.getAttribute('href') || '',
    };

    newsList.push(news);
  }

  return newsList;
}

