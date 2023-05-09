import { Button, Modal } from 'antd';
import { useState } from 'react';
import { parseIframe } from '../../utils/parseIframe/parseIframe';

const ViewCameraModal = ({isModalOpen,setIsModalOpen, resource, setResource}) => {
    
    const handleOk = () => {
      setIsModalOpen(false);
      setResource(null)
    };
  
  return (
    <>
    
      <Modal width={"610px"} title="Camera View" footer={false} open={isModalOpen} onCancel={handleOk}>
        {resource ? parseIframe(resource) : ""}
      </Modal>
    </>
  )
}

export default ViewCameraModal