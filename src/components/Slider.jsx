import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slide1 from '../asset/k14.jpeg';
import Slide25 from '../asset/k4.jpeg';
import Slide2 from '../asset/k19.jpg';
 import Slide3 from '../asset/k23.jpg';
import Slide4 from '../asset/home_slider_4.jpg';
import Slide5 from '../asset/home_slider_5.jpg';
import Slide6 from '../asset/home_slider_6.jpg';
import Slide7 from '../asset/home_slider_7.jpg';
import Slide8 from '../asset/home_slider_8.jpg';
import Slide9 from '../asset/home_slider_9.jpg';
import Slide10 from '../asset/home_slider_10.jpg';
import Slide11 from '../asset/home_slider_11.jpg';
import Slide12 from '../asset/home_slider_12.jpg';
import Slide13 from '../asset/home_slider_13.jpg';
import Slide14 from '../asset/home_slider_14.jpg';
import Slide18 from '../asset/Our gallery/Orientation/orientation (1).jpeg'
import Slide19 from '../asset/Our gallery/Orientation/orientation (3).jpeg'
// import Slide20 from '../asset/upcoming events/Image1.jpeg'

import Slide21 from '../asset/slider/slider.jpg'
import Slide22 from '../asset/slider/slider_2.jpg'

const slideImages = [
 
  { url: Slide1, caption: '' },
  { url: Slide25, caption: '' },
  { url: Slide2, caption: '' },
  { url: Slide3, caption: '' },
  { url: Slide19, caption: '' },
  { url: Slide18, caption: '' },
  { url: Slide21, caption: '' },
  { url: Slide22, caption: '' }, 
  { url: Slide4, caption: '' },
  { url: Slide5, caption: '' },
  { url: Slide6, caption: '' },
  { url: Slide7, caption: '' },
  { url: Slide8, caption: '' },
  { url: Slide9, caption: '' },
  { url: Slide10, caption: '' },
  { url: Slide11, caption: '' },
  { url: Slide12, caption: '' },
  { url: Slide13, caption: '' },
  { url: Slide14, caption: '' },
];

function ImageSlider() {
  return (
    <div className="container" style={{width:'700px' , marginBottom:'10px'}}>
      <div className="row">
        <div className="col">
          <Slide arrows={true} dots={true}>
            {slideImages.map((slideImage, index) => (
              <div key={index} className="text-center">
                <img src={slideImage.url} alt={slideImage.caption} className="img-fluid" style={{ width: '900px', height: '400px' }}/>
                {slideImage.caption && <span className="slide-caption">{slideImage.caption}</span>}
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
