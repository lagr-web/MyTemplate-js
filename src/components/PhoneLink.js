// PhoneLink.js

import React from 'react';
import { isMobile } from 'react-device-detect';

const PhoneLink = () => {

    const phoneNumber = '123456';

  const phoneLink = isMobile ? (
    <a className="hover:text-gray-300" href={`tel:${phoneNumber}`}>
      {phoneNumber}
    </a>
  ) : (
    phoneNumber
  );

  return <>{phoneLink}</>;
};

export default PhoneLink;
