import { Link } from "react-router-dom";
import React from 'react';
import './Maintwo.scss';
export default function Valorant() {
    return (
        <>
            <>
                <div className='mainse'>
                    <img src="/images/logov2.png" className="logoing" alt=''></img>
                    <p className="logotexts">Valorant</p>
                    <input type='text' className='wows' placeholder="플레이어#태그 로 검색"></input>
                    <h1 className='besting'>베스트 플레이어</h1>
                    <div className='valuserbox'>
                        <div className='valfirstuser'>
                            <img src="/images/radient.webp" className='tier_diamond' alt=''></img>
                            <img src="/images/yumi.png" className='firstimage' alt=''></img>
                            <h2>나는 조용제</h2>
                        </div>
                        <div className='valseconduser'>
                            <img src="/images/radient.webp" className='tier_grand' alt=''></img>
                            <img src="/images/yumi.png" className='secondimage' alt=''></img>
                            <h2>d1spel</h2>
                        </div>
                        <div className='valthirduser'>
                            <img src="/images/radient.webp" className='tier_challenger' alt=''></img>
                            <img src="/images/profile.png" className='thirdimage' alt=''></img>
                            <h2>뱃살은 애굣살</h2>
                        </div>
                        <div className='valfourthuser'>
                            <img src="/images/radient.webp" className='tier_master' alt=''></img>
                            <img src="/images/yumi.png" className='fourthimage' alt=''></img>
                            <h2>나는 조용제</h2>
                        </div>
                        <div className='valfifthuser'>
                            <img src="/images/radient.webp" className='tier_platinum' alt=''></img>
                            <img src="/images/yumi.png" className='fifthimage' alt=''></img>
                            <h2>나는 조용제</h2>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}