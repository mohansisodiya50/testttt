import React from 'react';
import PageContainer from '../../components/common/PageContainer'
import presentationsImg from '../../assets/presentations.png';
import sessionsImg from '../../assets/sessions.png';
import { SE_OVERLAYTEXT as OVERLAYTEXT } from '../../constants';

const screenSectionData = [
  { img: presentationsImg, link: '123', h: '23.4vw', mt: '.1vw', mr: '1.4vw', overlayText: {
    header: OVERLAYTEXT.PRESENTATIONS_HEADER
  }},
  {img: sessionsImg, link : '124', h: '23.1vw', mt: '.1vw', overlayText: {
    header: OVERLAYTEXT.SESSIONS_HEADER
  }}
];

function ScientificExchange() {

  const sectionClickHandler = (link) => {
    alert(link);
  }

  const scientificScreen = screenSectionData.length;

  return (
    <PageContainer scientificScreen={scientificScreen} sectionData={screenSectionData} clickHandler={sectionClickHandler}/>
  )
}

export default ScientificExchange;