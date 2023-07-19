import React from 'react';
import { Astro } from '../api/model/WeatherModel';

export const SunRiseSet = ({ astro, localtime }: { astro: Astro, localtime: string }) => {

    const dt1 = new Date(`${localtime.split(" ")[0]} ${astro.sunrise}`);
    const dt2 = new Date(`${localtime.split(" ")[0]} ${astro.sunset}`);
    const fark = dt2.getTime() - dt1.getTime();
    const now = new Date(`${localtime}`);
    const gecenSure = now.getTime() - dt1.getTime();
    const yuzde = (100 * gecenSure) / fark;
    const sun_yuzde = yuzde > 100 ? 0 : yuzde;

    return (
        <>
            <div className="bg-yellow-300 w-[207px] h-[138px] rounded-t-[50%] opacity-[.6]"></div>
            <div className="w-[240px] h-[102px] relative top-[-50px] left-[-15px] bg-[#323544] border-t-[2px] border-solid border-gray-300 z-[11]">
                <div className="float-left">
                    <b>{astro.sunrise}</b>
                </div>
                <div className="float-right">
                    <b>{astro.sunset}</b>
                </div>

            </div>

            <div className="w-[208px] h-[138px] relative top-[-240.8px] border-dashed z-10 border-y-[2px] border-x-[2px] rounded-t-[50%]">
            </div>

            <div className={
                `w-[220px] h-[102px] relative top-[-391px] bg-[#323544] translate-x-[-15px] table-cell `
            } style={{ left: `${sun_yuzde}%` }}>
            </div>




        </>
    );
};
