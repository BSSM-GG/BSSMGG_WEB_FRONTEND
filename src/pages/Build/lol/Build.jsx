import React, { useEffect } from 'react';
import './Build.scss'
import ReactPlayer from 'react-player';
export default function Builder() {
    return (
        <div className='lolbuilder'>
            <ReactPlayer
                url='images/lolbuilderbg/lol.mp4'
                className='backgroundbuild'
                width='100%'
                height='100%'
                onStart={true}
                playing={true}
                muted={true}
                loop={true}

            />
            <div className='blueteam'>
                <div className='bluefirst'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 1</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='bluesecond'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 2</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='bluethird'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 3</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='bluefourth'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 4</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='bluefifth'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 5</p>
                    <img src='/images/tier_lol/diamond.png' className='bluetier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
            </div>
            <div className='redteam'>
                <div className='redfirst'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 6</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='redsecond'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 7</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='redthird'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 8</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='redfourth'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 9</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
                <div className='redfifth'>
                    <div className='usericon'></div>
                    <p className='username'>닉네임 10</p>
                    <img src='/images/tier_lol/diamond.png' className='redtier'></img>
                    <p className='tiername'>Silver 1</p>
                    <p className='playcount'>W : 20 / L : 25</p>
                </div>
            </div>
            <div className='buildlist'>
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