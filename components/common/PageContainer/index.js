import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../Menu';
import './PageContainer.scss';
import bgImageSecond from 'assets/bg-2nd.jpg';
import bgImageLobby from 'assets/lobby/OUS_MainLobby_Background.jpg';
import Modal from '../Modal';

function PageContainer(props) {
  const { sectionData, clickHandler, page, type = "link" } = props;
  const [openModal, setOpenModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const history = useHistory();
  
  const handleOpen = (type = "link", link) => {
    if(type === "link"){
      history.push(link)
    }else{
      setVideoUrl(sectionData.videoUrl);
      setOpenModal(true)
    }
  }
  const handleClose = () => {
    setOpenModal(false)
  }

  const getScreenSection = () => {
    return sectionData.map(
      section =>
      <div key={section.img} className={`container ${props.mainLobbyScreen && 'container-main-lobby'} ${props.coreDiagScreen && 'container-core-diag'} ${props.scientificScreen && 'container-scientific'}`} style={{ position: "relative", height: section.h, marginTop: section.mt, marginRight: section.mr }}>
        <img className={props.mainLobbyScreen && 'main-lobby-img1'} src={section.img} />
        <div className={`overlay ${props.mainLobbyScreen && 'overlay-clip-main-lobby'} ${props.coreDiagScreen && 'overlay-clip-core'} ${props.scientificScreen && 'overlay-clip-scientific'}`} onClick={() => { handleOpen(section.type, section.link)}}>
          <div className="text">
            <div style={{ fontSize: section?.overlayText?.body ? '20px' : '50px'}}>
              {section?.overlayText?.header}
            </div>
            <div style={{ fontSize: '16px'}}>
              {section?.overlayText?.body ? section.overlayText.body : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
  const currentPageType = (props.page === 'lobby' ? 'lobby' : 'page')
  currentPageType === 'lobby' ? document.body.style.backgroundImage = `url(${bgImageLobby})` : document.body.style.backgroundImage = `url(${bgImageSecond})`
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  return (
    <div className={currentPageType + '-container'+' main-container'}>
      <div className="action-image-container">
        {getScreenSection()}
      </div>
      <Menu currentPageType={currentPageType} />
      <Modal openModal={openModal} handleClose={handleClose} videoUrl={videoUrl}/>
    </div>
  );
}

export default PageContainer;