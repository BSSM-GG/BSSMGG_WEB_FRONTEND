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
                </div>
            </>
        </>
    );
}