import React from 'react'
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton, TelegramShareButton} from "react-share";
import {FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon,} from "react-share"
import Modal from './modal/Modal'
import GlobalStyles from "./modal/GlobalStyles";
const Share = ({setOpenShare,openShare,isOpen,setOpen}) => {

    const shareLink = () =>{
        setOpenShare(false)
    }
    //setOpenShare()
  return (
    <>
    <GlobalStyles />
    <div>
 
        <div style={{ transform: "translateX(50px)" }}>
        
        <Modal isOpen={openShare} close={() => setOpenShare(false)}>
          <h2>share</h2>
          <div>
          <FacebookShareButton url={"https://www.facebook.com/" }>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
            <FacebookIcon size={60} round={true}/>
        </FacebookShareButton >

        <TwitterShareButton url={"https://twitter.com/" }>
        <TwitterIcon size={60} round={true} />
          
        </TwitterShareButton>

        <WhatsappShareButton url={"https://web.whatsapp.com/" }>
        <WhatsappIcon size={60} round={true} />
        </WhatsappShareButton>

        <TelegramShareButton url={"https://web.telegram.org/k/" }>
        <TelegramIcon size={60} round={true} />
        </TelegramShareButton>
          </div>
        </Modal>
        </div>
        </div>
        </>
  )
}

export default Share