import LeftRight from "../components/leftRight/LeftRight";
import RightLeft from "../components/leftRight/RightLeft";

const Upcoming = function(){
    const leftRight = [
        {
            imgURl: '../../../src/assets/images/upcoming/image_left1.webp',
            header: 'Make Your Own Gift Set!',
            para: 'Choose any 3 or more products for a 10% discount. Use the code BUNDLE_IT',
            btn:'View Gift Sets'
        },
        {
            imgURl: '../../../src/assets/images/upcoming/image_left2.jpg',
            header: 'The Reading Skill Set',
            para: 'Motivating your child to read through play',
             btn:'Find your Starting Point'
        }
    ]
    const rightLeft = [
        {
            imgURl: '../../../src/assets/images/upcoming/image_right1.webp',
            header: 'BESPOKE SPACES FOR PLAY',
            para: 'Built with an understanding of children and design!',
             btn:'Hire Our Team'
        },
        {
            imgURl: '../../../src/assets/images/upcoming/image_right2.jpg',
            header: 'Why Rent Toys?',
            para: `Renting toys is a smart and eco-friendly solution for parents who want to
    provide their children with a variety of toys without the clutter or
    expense of constant purchases.`,
             btn:'Join our toy rental service'
        }
    ]
    return <>
    <div className="leftRightContainer">
        <LeftRight content={leftRight[0]}/>
    </div>
    <hr />
    <div className="rightLeftContainer">
        <RightLeft content={rightLeft[0]}/>
    </div>
    <div className='homeVideoSection p-b'>
            <video autoPlay muted loop height='auto' width='100%' className='d-block'>
                <source src='../../src/assets/images/upcoming/upcoming_video.mp4' type='video/mp4'/>
            </video>
        </div>
    <div className="leftRightContainer">
        <LeftRight content={leftRight[1]}/>
    </div>
    <hr />
    <div className="rightLeftContainer">
        <RightLeft content={rightLeft[1]}/>
    </div>
    </>
}

export default Upcoming;