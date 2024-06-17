import { createPortal } from 'react-dom';
import { Grid, Box, styled } from '@mui/material';
import ReactPlayer from 'react-player/lazy';

export const ModalComponent = ({ isOpenModal, onClose, url }) => {
  
  if (!isOpenModal) return null;
  return createPortal(
    <Grid container alignItems="center">
      <Overlay onClick={onClose}/>
      <Wrapper item>
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          playing={true}
        />
      </Wrapper>
    </Grid>,
    document.getElementById('modal')
  );
};

const Overlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  height: '100%',
  width: '100%',
  top: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1
}));

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '30%',
  top: 2600,
  width: 500,
  height: 400,
  backgroundColor: '#fff',
  padding: '20px',
  zIndex: 2
}));
