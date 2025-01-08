import { useEffect, useState } from "react";
import CarouselContent from './CarouselContent'
import './carousel.css'

const Carousel = function(){
    const [image, setImage] = useState(1);
    const images = [
        '../../src/assets/images/home_carousel/image1.jpg',
        '../../src/assets/images/home_carousel/image2.jpg',
    ]
    useEffect(()=>{
        const nextButton = document.getElementById('nextButton');
        const carouselTime = setInterval(()=>{
            nextButton.click();
        }, 5000)
        return ()=> {
            clearInterval(carouselTime);
        }
    },[])
    const heroContent = [
        {
            heading:'Toy Store',
            para:'Welcome to Toy Store. We specialize in delightful wooden toys that spark creativity and joy in children of all ages. Explore our unique collection that caters to every playtime need.'
        },
        {
            heading:'Discover the perfect toy for your child',
            para:'With our passion for quality and craftsmanship, we are here to assist you in finding the ideal wooden toy that will inspire imaginative play. Start your shopping experience today and bring home a treasure that lasts.'
        }
    ]
    function handlePreviousImg(){
        image == 0 ? setImage(images.length-1) : setImage((c)=> c - 1);
    }
    function handleNextImg(){
        image<images.length-1 ? setImage((c)=> c + 1) : setImage(0);
    }
    return <>
    <div className="carousel" style={{backgroundImage: `url(${images[image]})`}}>
    <div className="carouselContainer mi-auto">
        <div className="homeImageHolder p-2">
            <CarouselContent  content={heroContent[image]}/>
        </div>
        <div className="carouselControlBtn p-1 w-100">
            <button className="btn btnPrevious" onClick={handlePreviousImg}><i className="fa-solid fa-caret-left"></i></button>
            <button className="btn btnPrevious" id="nextButton" onClick={handleNextImg}><i className="fa-solid fa-caret-right"></i></button>
        </div>
    </div>
    </div>
    </>
}

export default Carousel;