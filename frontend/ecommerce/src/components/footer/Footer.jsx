import {useEffect, useState} from 'react'
import './footer.css';

function Footer(){
    const [showChat, setShowChat] = useState(false);

    useEffect(()=>{
        const toTop =  document.getElementById('toTopBtn');
        toTop.addEventListener('click', ()=>{
            document.documentElement.scrollTop = 0;
        });
    },[])

    function handleShowChat(){
        setShowChat(!showChat);
    }
    return (
        <div className='footer'>
           <div className='footerOne'>
            <div className='footerList'>
                <h4>Learn More</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Refer a Friend</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Patents</a></li>
                </ul>
            </div>
            <div className='footerList'>
                <h4>Our Products</h4>
                <ul>
                    <li><a href="#">Montessori Toys</a></li>
                    <li><a href="#">Pikler and Iris Dome</a></li>
                    <li><a href="#">Jungle Gym</a></li>
                    <li><a href="#">Stack, Sort & Learning Toys</a></li>
                    <li><a href="#">Rockers & Balance</a></li>
                    <li><a href="#">Kids Furniture</a></li>
                    <li><a href="#">Teethers Mobiles and Rattles</a></li>
                    <li><a href="#">Walker and Bikes</a></li>
                    <li><a href="#">Swings and Monkey bar</a></li>
                    <li><a href="#">Rainbow Toys</a></li>
                    <li><a href="#">Building Blocks</a></li>
                    <li><a href="#">The Music Set</a></li>
                    <li><a href="#">Shop All</a></li>
                </ul>
            </div>
            <div className='footerList'>
                <h4>Gift set</h4>
                <ul>
                    <li><a href="#">Animal Gift Set</a></li>
                    <li><a href="#">Music Gift Set</a></li>
                    <li><a href="#">Pikler Gift Set</a></li>
                    <li><a href="#">Ranibow Gift Set</a></li>
                </ul>
            </div>
            <div className='footerList'>
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Help & FAQs</a></li>
                    <li><a href="#">Offer & Discounts</a></li>
                    <li><a href="#">Assemblt Guides</a></li>
                    <li><a href="#">Disability Support</a></li>
                </ul>
            </div>
            <div className='footerList'>
                <h4>Information</h4>
                <ul>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Teams Of Service</a></li>
                </ul>
            </div>
            <div className='footerList'>
                <h4>Contact Details</h4>
                <p>Toy Store,No:9, kanavai Village,<br />Kurambalur - 621107, Perambalur district, TN</p>
                <ul>
                <li>Phone: 7358010858</li>
                <li>Email: sales@toystore.com</li>
                </ul>
            </div>
            <div className='footerList'>
                <h4>Follow Us</h4>
                <p className='footerSocial'>
                <a href="#"><i className='fa-brands fa-instagram'></i></a>
                <a href="#"><i className='fa-brands fa-facebook'></i></a>
                <a href="#"><i className='fa-brands fa-twitter'></i></a>
                <a href="#"><i className='fa-brands fa-youtube'></i></a>
                <a href="#"><i className='fa-brands fa-linkedin'></i></a>
                <a href="#"><i className='fa-brands fa-whatsapp'></i></a>
                </p>
            </div>
            <div className='footerList'>
                <h4>Newsletter</h4>
                <p>Enter your email to receive daily news, blog post updates and offers.</p>
                <form action="#" id='newsletteForm'>
                    <input type="email" name='joinEmail' id='joinEmail' placeholder='Email Address' className='rounded-1'/>
                    <button type='button' className='btn btnPrimary'>{`join :)`}</button>
                </form>
            </div>
           </div>
           <hr className='footerHrline'/>
           <div className='footerTwo'>
            <p className='para'>© TOY STORE. All Rights Reserved.</p>
           </div>
           <div id='chatBot' className={showChat ? 'showChat' : ''}>
            <button type='button' className='btn btnPrimary' id='chatBtn' onClick={handleShowChat}>
                <i className='fa-solid fa-comments'></i>
                <div id='chatRoom' className='rounded-1'>
                    <div className='chatRoomContent'>
                        <p>We're a Whatsapp Away</p>
                    </div>
                    <div className='chatRoomSpace rounded-1'>
                        <p>How can we help you?</p>
                        <a type='button' className='chatLink btn'><i className='fa-brands fa-whatsapp'></i> Chat with us! <i className='fa-solid fa-arrow-right'></i></a>
                        <p>Chat powered by www.zoko.io</p>
                    </div>
                </div>
            </button>
            <button type='button' className='btn btnPrimary' id='toTopBtn'><i className='fa fa-arrow-up'></i></button>
           </div>
        </div>
    );
}

export default Footer;