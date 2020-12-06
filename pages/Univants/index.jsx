import React from 'react';
import PageContainer from '../../components/common/PageContainer'
import programImg from 'assets/Univants/program.png';
import winnersImg from 'assets/Univants/winners.png';
import bestOfAreaImg from 'assets/Univants/best-of-area.png';
import recognizedImg from 'assets/Univants/recognized.png';
import { UOHE_OVERLAYTEXT as OVERLAYTEXT } from '../../constants';

const screenSectionData = [
  {img: programImg, link: '123', h: '23.4vw', mt: '.1vw', mr: '1.4vw', overlayText: {
    header: OVERLAYTEXT.PROGRAM_HEADER
  }},
  {img: winnersImg, link : '124', h: '23.1vw', mt: '.1vw', overlayText: {
    header: OVERLAYTEXT.WINNERS_HEADER
  }},
  {img: bestOfAreaImg, link: '123', h: '23.4vw', mt: '.1vw', mr: '1.4vw', overlayText: {
    header: OVERLAYTEXT.BESTOFAREA_HEADER
  }},
  {img: recognizedImg, link : '124', h: '23.1vw', mt: '.1vw', overlayText: {
    header: OVERLAYTEXT.RECOGNIZED_HEADER
  }},
];

const Univants = () => (
    <PageContainer scientificScreen={screenSectionData.length} sectionData={screenSectionData} />
);

export default Univants;