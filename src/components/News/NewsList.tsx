import News from '../../api/model/News'
import { NewsItem } from './NewsItem'
type Props = {
    newsList: News[]
}

export const NewsList = ({ newsList }: Props) => {
    return (
        <div className="w-full block bg-gray-800 mt-40">
            <div className="text-center bg-gray-900">
                <h2 className="text-white py-5">Hava Durumu Haberleri</h2>
            </div>
            <div className="p-11">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {newsList.map((news) => (
                        <NewsItem key={news.Link} news={news} />
                    ))}
                </div>
            </div>
        </div>
    )
}