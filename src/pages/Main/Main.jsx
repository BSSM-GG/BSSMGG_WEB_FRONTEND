import Header from '../Header/Header';
import './Main.scss';
import { Link } from 'react-router-dom';
export default function Main() {
    return (
        <>
            <div className='mains'>
                <img src="/images/logos.png" className="logos" alt=''></img>
                <p className="logotext">League of Legends</p>
                <input type='text' className='wow' placeholder="챔피언, 소환사명 검색"></input>
                <h1 className='best'>베스트 플레이어</h1>
                <div className='userbox'>
                    <div className='firstuser'>
                        <img src="/images/tier_lol/diamond.png" className='tier_diamond' alt=''></img>
                        <img src="/images/yumi.png" className='firstimage' alt=''></img>
                        <h2>나는 조용제</h2>
                    </div>
                    <div className='seconduser'>
                        <img src="/images/tier_lol/grandmaster.png" className='tier_grand' alt=''></img>
                        <img src="/images/yumi.png" className='secondimage' alt=''></img>
                        <h2>d1spel</h2>
                    </div>
                    <div className='thirduser'>
                        <img src="/images/tier_lol/challenger.png" className='tier_challenger' alt=''></img>
                        <img src="/images/profile.png" className='thirdimage' alt=''></img>
                        <h2>뱃살은 애굣살</h2>
                    </div>
                    <div className='fourthuser'>
                        <img src="/images/tier_lol/master.png" className='tier_master' alt=''></img>
                        <img src="/images/yumi.png" className='fourthimage' alt=''></img>
                        <h2>나는 조용제</h2>
                    </div>
                    <div className='fifthuser'>
                        <img src="/images/tier_lol/platinum.png" className='tier_platinum' alt=''></img>
                        <img src="/images/yumi.png" className='fifthimage' alt=''></img>
                        <h2>나는 조용제</h2>
                    </div>
                </div>
            </div>
        </>
    );
}