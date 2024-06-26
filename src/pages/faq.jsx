import React, { useState } from 'react';
import Image from 'next/image';

const Faq = () => {
  const [open, setOpen] = useState(-1);

  const handleCollapse = (id) => {
    setOpen((prevOpen) => (prevOpen === id ? -1 : id));
  };

  var quesAns = [
    { que: 'What can be critical factors in eCommerce projects?', ans: 'Critical factors in eCommerce projects can be diverse and include technical, business and human aspects. Some of them are: 1. Technology selection: Incorrect or outdated technologies can affect scalability and performance. 2. Data migration and integration: Transferring data from existing systems can be complex and error-prone. 3. Security Concerns: Inadequate security measures can lead to data loss or theft. 4. User Experience: Poorly designed user interfaces can turn off customers. 5. SEO and Marketing: Missing or ineffective marketing strategies can affect visibility and traffic. 6. Compliance and Regulations: Failure to comply with laws and regulations can result in penalties and bad reputation. 7. Budget and time frame: Cost or time overruns can jeopardize the project. 8. Team qualification and management: Insufficient expertise or poor teamwork can reduce project quality. 9. Scalability and performance: Non-scalable solutions can become a problem as traffic increases. 10. Customer Retention: Lack of customer retention strategies can lead to high bounce rates and low loyalty. 11. Competitive Analysis: Inadequate understanding of the market and competition can lead to poor positioning. 12. Quality Assurance and Testing: Poor testing can lead to errors and poor user experience. Taking these factors into account and planning appropriate solution strategies is crucial for the success of an eCommerce project.' },

    { que: 'Which shop systems are there?', ans: 'A distinction is made between purchase and rental systems as well as open source systems. Purchase shops include OXID, Intershop or Gambio. Rental systems include Shopify, Shopware, BigCommerce, SAP Commerce Cloud, Wix and Jimdo; Open source systems are Magento, WooCommerce or osCommerce. If someone would like to have individual processes implemented, a shop system developed in-house is ideal.' },

    { que: 'What security options are there in the e-commerce sector?', ans: 'A distinction is made between purchase and rental systems as well as open source systems. Purchase shops include OXID, Intershop or Gambio. Rental systems include Shopify, Shopware, BigCommerce' },

    { que: 'What security options are there in the e-commerce sector?', ans: 'A distinction is made between purchase and rental systems as well as open source systems. Purchase shops include OXID, Intershop or Gambio. Rental systems include Shopify, Shopware, BigCommerce' },
  ]

  return (
    <>
      <div className='flex justify-start mb-5 px-52 gap-2 items-center text-base text-gray-400 font-medium'>
        <i className="fa-solid fa-house-chimney"></i>
        <h2>Home</h2>
        <i className="fa-solid fa-angle-right fa-sm pt-1"></i>
        <h2 className='active'>FAQ'S</h2>
      </div>

      <div className='flex justify-center h-[100vh]'>
        <div className='flex flex-col gap-4 justify-center w-[70vw] text-3xl px-8 py-4'>
          {
            quesAns.map((v, index) => (
              <div key={index}>
 

                <div className='flex gap-4 items-center cursor-pointer' onClick={() => handleCollapse(index)}>
                  <i className={`${open === index ? 'fa-solid fa-minus text-lg' : 'fa-solid fa-plus text-lg'}`}></i>
                  <p>{v.que}</p>
                </div>
                <hr />

                <div className={`${open === index ? 'visible h-[50vh] transition-all duration-500' : 'invisible h-0 transition-all duration-500'}flex justify-center text-xl`}>
                  <p>{v.ans}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Faq;