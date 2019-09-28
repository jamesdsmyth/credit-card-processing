import React from 'react';
import Heading from '../../atoms/heading/Heading';

import { properties } from '../../../assets/properties';

const HeaderSection = () => (
  <header className={`header`}>
    <Heading text={properties.landingPageHeading} />
  </header> 
)

export default HeaderSection;