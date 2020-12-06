import React from 'react';
import PageContainer from '../../components/common/PageContainer'
import videoImg from 'assets/PointOfCare/video.png';
import infectiosDiseasesImg from 'assets/PointOfCare/infectios-diseases.png';
import connectivityImg from 'assets/PointOfCare/connectivity.png';
import cardiacBloodGasImg from 'assets/PointOfCare/cardiac-blood-gas.png';
import diabetesCareImg from 'assets/PointOfCare/diabetes-care.png';
import { POC_OVERLAYTEXT as OVERLAYTEXT } from '../../constants';

const screenSectionData = [
  {img: videoImg, link: '123', h: '23.4vw', mt: '.1vw', mr: '1.4vw', overlayText: {
    header: OVERLAYTEXT.VIDEO_HEADER
  }},
  {img: infectiosDiseasesImg, link : '124', h: '23.1vw', mt: '.1vw', overlayText: {
    header: OVERLAYTEXT.INFECTIOS_HEADER
  }},
  {img: connectivityImg, link: '123', h: '23.4vw', mt: '.1vw', mr: '1.4vw', overlayText: {
    header: OVERLAYTEXT.CONNECTIVITY_HEADER
  }},
  {img: cardiacBloodGasImg, link : '124', h: '23.1vw', mt: '.1vw', overlayText: {
    header: OVERLAYTEXT.CARDIAC_HEADER
  }},
  {img: diabetesCareImg, link : '124', h: '23.1vw', mt: '.1vw', overlayText: {
    header: OVERLAYTEXT.DIABETES_HEADER
  }},
];

const PointOfCare = () => (
    <PageContainer scientificScreen={screenSectionData.length} sectionData={screenSectionData} />
);

export default PointOfCare;