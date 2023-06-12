import React, { useEffect, useState } from 'react';
import './Build.scss'

export default function Builder() {
    const [backgrounds, setBackgrounds] = useState(`Irellias.jpg`);
    const [name, setName] = useState(`Irellia`);
    const [chprofile, setChprofile] = useState('Katarina.jfif');
    return (
        <div className='characterinfo'>
            <div className='blackdark'></div>
            <select className='selectch'>
                <option value="0">이렐리아</option>
                <option value="1">카타리나</option>
                <option value="2">세트</option>
            </select>
            <div className='champions'>
                <div className='scale'></div>
                <img src={`/images2/${backgrounds}`} className='chb'></img>
                <h1 className='chname'>{name}</h1>
                <div className='percentage'>
                    <div className='win'>
                        <h1>승률</h1>
                        <h1>100.0%</h1>
                    </div>
                    <div className='picks'>
                        <h1>픽률</h1>
                        <h1>90.0%</h1>
                    </div>
                    <div className='baned'>
                        <h1>밴률</h1>
                        <h1>100.0%</h1>
                    </div>
                </div>
                <h2 className='subch'>Sub Champion</h2>
                <div className='sublist'>
                    <div className='ch1info'>
                        <img src={`/profile/Katarina.jfif`} className='ch1infob'></img>
                    </div>
                    <div className='ch2info'>
                        <img src={`/profile/Yasuo.jfif`} className='ch1infob'></img>
                    </div>
                    <div className='ch3info'>
                        <img src={`/profile/Akari.jpg`} className='ch1infob'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}