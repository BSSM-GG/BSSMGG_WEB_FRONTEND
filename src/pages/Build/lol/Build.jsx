import React, { useEffect } from 'react';
import './Build.scss'
export default function Builder() {
    const [count, setCount] = React.useState(0);
    let reset = 0;
    const bg = [
        { backsrc: '/images/lolbuilderbg/Katarinas.jpg' },
        { backsrc: '/images/lolbuilderbg/Irellia.jpg' },
        { backsrc: '/images/lolbuilderbg/yayo.jpg' },
        { backsrc: '/images/lolbuilderbg/lux.jpg' },
        { backsrc: '/images/lolbuilderbg/kindred.jpg' },
        { backsrc: '/images/lolbuilderbg/Iz.jpg' },
        { backsrc: '/images/lolbuilderbg/ahri.png' }

    ]
    useEffect(() => {
        if (bg.length - 1 > count) {
            let num = count + 1;
            setTimeout(() => { setCount(num) }, 4000);
            console.log(bg[count].backsrc)
        }
        else {
            setTimeout(() => { setCount(reset) }, 4000);
            console.log(bg[count].backsrc)
        }
    }, [count]);
    return (
        <div className='lolbuilder'>
            <img src={bg[count].backsrc} className='backgroundbuild'></img>
            <div className='blueteam'>
                <div className='bluefirst'>
                    <div className='usericon'>
                    </div>
                    <p className='username'>닉네임 1</p>
                </div>
                <div className='bluesecond'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 2</p>
                </div>
                <div className='bluethird'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 3</p>
                </div>
                <div className='bluefourth'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 4</p>
                </div>
                <div className='bluefifth'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 5</p>
                </div>
            </div>
            <div className='redteam'>
                <div className='redfirst'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 6</p>
                </div>
                <div className='redsecond'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 7</p>
                </div>
                <div className='redthird'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 8</p>
                </div>
                <div className='redfourth'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 9</p>
                </div>
                <div className='redfifth'>
                    <div className='usericon'>

                    </div>
                    <p className='username'>닉네임 10</p>
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