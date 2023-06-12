import './Build2.scss'
import React from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player'

export default function ValorantBuilder() {
    return (
        <div className='valbuilder'>
            <ReactPlayer
                url='images/valbuilder/valorant.mp4'
                className='valbackgroundbuild'
                width='100%'
                height='100%'
                onStart={true}
                playing={true}
                muted={true}
                loop={true}
            />
            <div className='valblueteam'>
                <div className='valbluefirst'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 1</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='valbluesecond'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 2</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='valbluethird'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 3</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='valbluefourth'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 4</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='valbluefifth'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 5</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
            </div>
            <div>
            </div>
            <div className='valredteam'>
                <div className='valredfirst'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 6</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='valredsecond'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 7</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='valredthird'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 8</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='valredfourth'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 9</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='valredfifth'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 10</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
            </div>
            <div className='valbuildlist'>
                <div className='startbutton'>
                    <img src='/images/lolbuilderbg/Build.png' className='btimg'></img>
                </div>
                <div className='shufflebutton'>
                    <img src='/images/lolbuilderbg/shuffle.png' className='btimg'></img>
                </div>
                <input type='text' className='firstusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='secondusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='thirdusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='fourthusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='fiveusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='sixusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='sevenusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='eightusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='nineusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
                <input type='text' className='tenusername' placeholder='내전에 참가할 플레이어 닉네임 입력'></input>
            </div>
        </div>
    );
}