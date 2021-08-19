import React from "react";
import Slide1 from '../../assets/frankfurt-skyline-germany.png';
import Slide2 from '../../assets/frankfurt-skyline-germany2.png';
import Slide3 from '../../assets/frankfurt-skyline-germany3.png';
import Style from './Slider.module.scss';
import Carousel from 'react-material-ui-carousel';

export function Slider() {
    
    const carouselItems = [
        {
            url: Slide1,
            description: "Velkommen til Hotel Overlook",
            alt: "velkommen_til_hotel_overlook"
        },
        {
            url: Slide2,
            description: "Velkommen til Hotel Overlook",
            alt: "velkommen_til_hotel_overlook"
        },
        {
            url: Slide3,
            description: "Velkommen til Hotel Overlook",
            alt: "velkommen_til_hotel_overlook"
        }
    ]

    function Item(props){
        return (
            <div className={Style.slide} style={{Height:"65vh"}}>
                <h3>{props.item.description}</h3>
                <img alt={props.item.alt} src={props.item.url} />
            </div>
        )
    }

    return(
        <>
        <Carousel animation="slide" interval="5000">
            {
            carouselItems.map((item, index) => {
                return(
                    <Item key={index} item={item}/>
                    )
            })
            }
        </Carousel>
        </>
    )
}