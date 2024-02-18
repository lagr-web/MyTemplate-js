// usePhoneLink.js

import { useMemo } from 'react';
import { isMobile } from 'react-device-detect';

const usePhoneLink = (phoneNumber) => {
    
  const phoneLink = useMemo(() => {
    return isMobile ? (
      <a className="hover:text-gray-300" href={`tel:${phoneNumber}`}>
        {phoneNumber}
      </a>
    ) : (
      phoneNumber
    );
  }, [phoneNumber]);

  return phoneLink;
};

export default usePhoneLink;
