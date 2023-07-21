import { getNews } from '../service/NewsService';
import News from '../model/News';


export async function getNewsData(): Promise<News[]> {
    return await getNews() as News[];
}
