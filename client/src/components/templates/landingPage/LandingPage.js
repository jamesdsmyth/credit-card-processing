import React from 'react';

import HeaderSection from '../../organisms/headerSection/HeaderSection';
import AddCardSection from '../../organisms/addCardSection/AddCardSection';
import ExistingCardSection from '../../organisms/existingCardsSection/ExistingCardSection';

import NotificationSection from '../../organisms/notificationSection/NotificationSection';

const LandingPage = () => (
  <div className={`app`}>
    <HeaderSection />
    <AddCardSection />
    <ExistingCardSection />
    <NotificationSection />
  </div>
)

export default LandingPage;