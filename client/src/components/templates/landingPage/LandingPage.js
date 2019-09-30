import React from 'react';

import HeaderSection from '../../organisms/headerSection/HeaderSection';
import AddCardSection from '../../organisms/addCardSection/AddCardSection';
import ExistingCardSection from '../../organisms/existingCardsSection/ExistingCardSection';

// this is our only page
const LandingPage = () => (
  <div className={`app`}>
    <HeaderSection />
    <AddCardSection />
    <ExistingCardSection />
  </div>
)

export default LandingPage;