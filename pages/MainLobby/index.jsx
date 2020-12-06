import React from 'react';
import PageContainer from 'components/common/PageContainer'
import pocImg from "assets/lobby/poc.png"
import atsImg from "assets/lobby/ats.png"
import coreDiagnosticSolutionsImg from "assets/lobby/core-diagnostic-solutions.png"
import scientificExchangeImg from "assets/lobby/scientific-exchange.png"
import univantsImg from "assets/lobby/univants.png"
import { useHistory } from 'react-router-dom'

import { MAIN_LOBBY_OVERLAYTEXT as OVERLAYTEXT } from '../../constants';


const screenSectionData = [
  {img: pocImg, link: 'pointofcare', h: '23.4vw', overlayText: { header: OVERLAYTEXT.POC_HEADER, body: OVERLAYTEXT.POC_BODY}}, 
  {img: atsImg, link : 'ats', h: '15.7vw', mt: '1.7vw', overlayText: { header: OVERLAYTEXT.ATS_HEADER, body: OVERLAYTEXT.ATS_BODY }} , 
  {img: coreDiagnosticSolutionsImg, link: 'corediagnosticsolutions', h: '14vw', mt: '2.2vw', overlayText: {
    header: OVERLAYTEXT.CDS_HEADER, body: OVERLAYTEXT.CDS_BODY
  }}, 
  {img: scientificExchangeImg, link: 'scientificexchange', h: '15.9vw', mt: '1.5vw', overlayText: {
    header: OVERLAYTEXT.SE_HEADER, body: OVERLAYTEXT.SE_BODY
  }}, 
  {img: univantsImg, link: 'univants',  h: '20.1vw', mt: '-.1vw', overlayText: {
    header: OVERLAYTEXT.UOHE_HEADER, body: OVERLAYTEXT.UOHE_BODY
  }}
];

const mainLobbyScreen = screenSectionData.length;

function Mainlobby() {
  const history = useHistory();

  const sectionClickHandler = (link) => {
    history.push(link);
  }

  return (
    <PageContainer sectionData={screenSectionData} mainLobbyScreen={mainLobbyScreen} clickHandler={sectionClickHandler} page={'lobby'}/>
  )
}

export default Mainlobby;