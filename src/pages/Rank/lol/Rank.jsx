import react from 'react';
import './Rank.scss';
import { useInView } from 'react-intersection-observer';

export default function Rank() {
    const [ref, inView] = useInView()
    return (
        <div className='infinite'>
            <img src="/images/rankbg.png" className="rankbg"></img>
            <div className='topbox'>
                <div className='rank1'>
                    <h1 className='rankings'>Rank#2</h1>
                    <img src='/images/yumi.png' className='rankprofile'></img>
                    <h1 className='ranknick'>d1spel</h1>
                    <p className='ranktier'>challenger</p>
                    <img className='rankimg' src='/images/tier_lol/challenger.png'></img>
                </div>
                <div className='rank2'>
                    <h1 className='rankings'>Rank#1</h1>
                    <img src='/images/yumi.png' className='rankprofile'></img>
                    <h1 className='ranknick'>d1spel</h1>
                    <p className='ranktier'>challenger</p>
                    <img className='rankimg' src='/images/tier_lol/challenger.png'></img>
                </div>
                <div className='rank3'>
                    <h1 className='rankings'>Rank#3</h1>
                    <img src='/images/yumi.png' className='rankprofile'></img>
                    <h1 className='ranknick'>d1spel</h1>
                    <p className='ranktier'>challenger</p>
                    <img className='rankimg' src='/images/tier_lol/challenger.png'></img>
                </div>
            </div>
            <div ref={ref} className='userlist'>
            </div>
        </div>
    );
}