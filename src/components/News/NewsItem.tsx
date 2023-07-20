import News from '../../api/model/News'
type Props = {
    news: News
}

export const NewsItem = ({ news }: Props) => {
    return (
        <div className="border border-gray-700 rounded-lg max-w-lg">
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="text-gray-600">{news.Date}</div>
                <h3 className="text-md font-bold mt-2 mb-4">
                    <a href={news.Link} target="_blank" rel='noreferrer noopener'>
                        {news.Baslik.length > 250 ? `${news.Baslik.slice(0, 250)}...` : news.Baslik}
                    </a>
                </h3>
                <a href={news.Link} target="_blank" rel='noreferrer noopener'>
                    <img className="w-full h-48 object-cover mb-4" src={news.Image} alt="newsImage" />
                </a>
                <p className="text-gray-400">
                    {news.Detail.length > 300 ? `${news.Detail.slice(0, 300)}...` : news.Detail}
                </p>
            </div>
        </div>
    )
}

export default NewsItem