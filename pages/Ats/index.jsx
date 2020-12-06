import React from 'react';
import PageContainer from 'components/common/PageContainer'
import discoverNewImg from "assets/discover-new.png"
import reimagineTheFutureImg from "assets/reimagine-the-future.png"
import NextStepsImg from "assets/next-steps.png"
import { ATS_OVERLAYTEXT as OVERLAYTEXT } from '../../constants';

const screenSectionData = [
  {img: discoverNewImg, link: '123', h: '22.1vw', overlayText: {
    header: OVERLAYTEXT.DISCOVER_HEADER
  }},
  {img: reimagineTheFutureImg, link : '124', h: '22.1vw', mt: '.5vw', overlayText: {
    header: OVERLAYTEXT.REIMAGINE_HEADER
  }},
  {img: NextStepsImg, link: '125', h: '23.1vw', mt: '.1vw', overlayText: {
    header: OVERLAYTEXT.NEXT_HEADER
  }}
];

function Ats() {
  const sectionClickHandler = (link) => {
    alert(link);
  }

  return (
    <PageContainer sectionData={screenSectionData} clickHandler={sectionClickHandler} page={'second'}/>
  )
}

export default Ats;