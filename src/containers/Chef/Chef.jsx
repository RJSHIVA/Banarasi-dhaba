import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">At Banarasi Restro, we grow by blending tradition with innovation, crafting dishes that embody the spirit of Banaras. Our commitment to quality, warm hospitality, and a sense of community propels our growth.</p>
        </div>
        <p className="p__opensans"> "You are what you eat. For spiritual growth, one should eat sattvic food." - Bhagavad Gita

"The food we eat can be either the safest and most powerful form of medicine or the slowest form of poison." - Charaka Samhita

"When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need." - Ayurveda. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;