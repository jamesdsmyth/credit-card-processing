import React from 'react';
import Heading from '../../atoms/heading/Heading';

import { properties } from '../../../assets/properties';

// at the top of the page is the header
const HeaderSection = () => (
  <header className={`header`}>
    <Heading text={properties.landingPageHeading} />
  </header> 
)

export default HeaderSection;