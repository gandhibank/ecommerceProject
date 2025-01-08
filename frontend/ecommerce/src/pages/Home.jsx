import { useEffect, useState } from 'react'
import Carousel from '../components/carousel/Carousel'
function Home(){
    const testimonials = [
        {
            image:'../../src/assets/images/home/testimonial1.jpg',
            customerName: 'Deepak',
            feedback:'Shopping at Toy Store was a delightful experience. As a first-time parent, I was unsure of what to choose. The staff provided invaluable insights, answered all my questions, and helped me select a fantastic wooden toy that my child loves playing with.'
        },
        {
            image:'../../src/assets/images/home/testimonial2.jpg',
            customerName: 'Gandhi',
            feedback: 'I am so pleased with the service I received from Toy Store. The team was attentive and truly understood my needs. Thanks to their recommendations, I found a wonderful wooden toy that my child absolutely adores. Highly recommend Toy Store to all parents!'
        },
        {
            image:'../../src/assets/images/home/testimonial3.jpg',
            customerName: 'Jeni',
            feedback: 'Toy Store transformed my gift shopping experience! Their selection of wooden toys is not only beautiful but also engaging for my children. The staff was incredibly helpful in guiding me to the perfect choices, making the whole process enjoyable.'
        }
    ];
    return (
        <>
        <div className='heroSection'>
        <Carousel />
        </div>
        <div className='learnMoreSection t-center mi-auto mb-1'>
            <h3 className='h3 p-1'>Learn more about us</h3>
            <span className='separatorBar'></span>
            <p className='p-1'>At Toy Store, we are dedicated to providing families with beautifully crafted wooden toys that promote imaginative play. From classic designs to innovative creations, our curated collection ensures that every child can find something special. Experience the joy of play with our exceptional toys that are made to last. Welcome to Toy Store.</p>
        </div>
        <div className='homeVideoSection'>
            <video autoPlay muted loop height='auto' width='100%' className='d-block'>
                <source src='../../src/assets/images/home/home_video.mp4' type='video/mp4'/>
            </video>
        </div>
        <div className='testimonialContainer p-b'>
            <h2 className='p-1 t-center'>Testimonials</h2>
        <div className='homeTestimonials mi-auto'>
            {testimonials.map((item, index)=>{
                return (
                <div key={index} className='p-1'>
                    <div className='t-center p-b bg-light rounded-2'>
                <div className='testimonialImage'>
                <img src={item.image} alt={`image${index}`} height='100px' width='100px' className='rounded-1 d-block mi-auto' />
                </div>
                <div className='testimonialText'>
                    <span className='separatorBar'></span>
                    <h3>{item.customerName}</h3>
                    <hr />
                    <p className='p-1'>{item.feedback}</p>
                </div>
                </div>
                </div>
                )
            })}
        </div>
        </div>
        </>
    );
}

export default Home;