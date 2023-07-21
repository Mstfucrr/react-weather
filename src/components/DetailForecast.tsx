import { Forecastday } from '../api/model/WeatherModel'
import { HourData } from './HourData'
import { SunRiseSet } from './sunRiseSet'
const umberella = require('../assets/images/icon-umberella.png')
const wind = require('../assets/images/icon-wind.png')


export const DetailForecast = ({ forecastday, localtime }: { forecastday: Forecastday, localtime: string }) => {

    const detailCol = "flex flex-col flex-wrap content-stretch justify-start items-center"


    return (
        <div className='container max-w-[1170px] mx-auto w-full h-[550px] md:h-[452px] bg-[#323544] rounded-b-[15px]'>
            <div className="h-[1px]"></div>
            {/* header */}
            <div className="text-center">
                <div className="text-[18px] font-bold mt-[15px] mb-[5px] mx-0">
                    Saatlik Tahmin
                </div>
            </div>
            {/* hourly forecast content */}
            <div className="flex row justify-start overflow-auto">
                {forecastday.hour.map((hour, index) => (
                    <HourData key={index} hour={hour} />
                ))}
            </div>
            <hr className='w-1/3 my-[15px] mx-auto' />
            <div>

                {/* detial header */}
                <div className="text-center">
                    <div className="text-[18px] font-bold mt-[15px] mb-[5px] mx-0">
                        Detaylar
                    </div>
                </div>
                {/* detail content */}
                <div className="flex h-auto md:flex-row flex-col">
                    <div className="w-full md:w-1/2">
                        <div className="mt-[25px] flex justify-evenly flex-row">
                            {/* col */}
                            <div className={detailCol}>
                                <div>
                                    <b>Rüzgar</b>
                                </div>
                                <div>
                                    <b>{forecastday.day.maxwind_kph} km/s</b>
                                </div>
                                <div>
                                    <img className='mt-[15px] w-[30px]' alt="" src={wind} />
                                </div>
                            </div>
                            {/* col */}
                            <div className={detailCol}>
                                <div>
                                    <b>UV</b>
                                </div>
                                <div>
                                    <b>{forecastday.day.uv}</b>
                                </div>
                            </div>
                            {/* col */}
                            <div className={detailCol}>
                                <div>
                                    <b>Nem</b>
                                </div>
                                <div>
                                    <b>{forecastday.day.avghumidity} %</b>
                                </div>
                            </div>
                            {/* col */}
                            <div className={detailCol}>
                                <div>
                                    <b>Yağış</b>
                                </div>
                                <div>
                                    <b>{forecastday.day.totalprecip_mm} mm</b>
                                </div>
                                <div>
                                    <img className='mt-[15px] w-[30px]' alt="" src={umberella} />
                                </div>
                            </div>
                            {/* col */}
                            <div className={detailCol}>
                                <div>
                                    <b>Basınç</b>
                                </div>
                                <div>
                                    <b>{forecastday.day.avgvis_km} mb</b>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* sun rise and set */}
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-[55px] mt-[25px] grid justify-center">
                            <SunRiseSet astro={forecastday.astro} localtime={localtime} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
