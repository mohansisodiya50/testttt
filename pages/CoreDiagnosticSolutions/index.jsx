import React, { useContext } from 'react';
import PageContainer from 'components/common/PageContainer'
import alinityImg from "assets/alinity.png"
import automationImg from "assets/automation.png"
import informaticsImg from "assets/informatics.png"
import { LocationContext } from 'context';
import { CORE_DIAGNOSTIC_SOLUTIONS_OVERLAYTEXT as OVERLAYTEXT } from '../../constants';

function CoreDiagnosticSolutions() {
  const [location] = useContext(LocationContext);
  
  const screenSectionData = [
    {img: alinityImg, link: location === 'OUS' ? 'ats' : 'scientificexchange', h: '23.4vw', type:"link", videoUrl: "https://player.vimeo.com/video/259411563", overlayText: {
      header: OVERLAYTEXT.ALINITY_HEADER
    }}, 
    {img: automationImg, link : '124', h: '22.1vw', mt: '.5vw', type:"video", overlayText: {
      header: OVERLAYTEXT.AUTOMATION_HEADER
    }} , 
    {img: informaticsImg, link: '/scientificexchange', h: '23.1vw', mt: '.1vw', type:"link", overlayText: {
      header: OVERLAYTEXT.AI_HEADER
    }}
  ];
  const coreDiagScreen = screenSectionData.length;
  const sectionClickHandler = (link) => {
    alert(link);
  }

  return (
    <PageContainer coreDiagScreen={coreDiagScreen} sectionData={screenSectionData} clickHandler={sectionClickHandler}/>
  )
}

export default CoreDiagnosticSolutions;
