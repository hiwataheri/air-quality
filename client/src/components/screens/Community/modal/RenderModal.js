import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Modal from './Modal'
//import Modal from "./Modal";

const RenderModal = () => {
   const [isOpen, setOpen] = useState(false);
  return (
    <>
    {/* <GlobalStyles />
    <div>
      <button onClick={() => setOpen(true)}>Open the Modal!</button>
        <div style={{ transform: "translateX(50px)" }}>
        
          <Modal isOpen={isOpen} close={() => setOpen(false)}>
           </Modal> 
        </div>
      </div> */}
    </>
  )
}

export default RenderModal