import React from 'react';
import useApiCall from '../../Hooks/useApiCall';
import './contactPage.css';

const ContactPage = ({ card }) => {
  
  const { data: contactInfo } = useApiCall("/contact4");
  
  return (
    <div className='contactPage'>
        {contactInfo &&
          <div className='contactContent'>
            <h1 className='contactTitle'>{contactInfo.attributes.contactHeader}</h1>
            <p className='contactInfo'>{contactInfo.attributes.contactText}</p>
            <p  className='contactMail'>{contactInfo.attributes.contactEmail}</p>
            <p  className='contactTel'>{contactInfo.attributes.contactTel}</p>
          </div>
        }
    </div>
  );                                                              
};

export default ContactPage;