import News from '../../api/model/News'
import { motion } from 'framer-motion'
import React from 'react'
type Props = {
    news: News
}

export const NewsItem = ({ news }: Props) => {
    return (
        <motion.div className="border border-gray-700 rounded-lg max-w-lg"
            initial={{ scale: 0 , translateY : -100 }}
            animate={{ scale: 1 , translateY : 0 }}
            transition={{ duration: 0.5 , type : 'spring' , bounce : 0.5 , delay : 1 }}
            
        >
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
        </motion.div>
    )
}

export default NewsItem