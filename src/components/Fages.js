import React, { useState } from 'react'
import {FaqData} from '../components/faqData';
import Faq from '../components/Faq'

export default function Fages() {

    const [faqes]=useState(FaqData);

  return (
    <div>
      {faqes.map( faq => <Faq key={faq.id} title={faq.title} desc={faq.desc} faq={faq}/>)}
    </div>
  )
}
