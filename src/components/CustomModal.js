import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function CustomModal({ open, setOpen, watchData }) {

    return(
        <Modal
            className='Modal'
            open={open}
            onClose={() => setOpen(false)}
        >
            <Paper sx={{borderRadius: '20px', position:'relative'}} className='ModalContent'>
                <CloseIcon className="CloseIcon" onClick={() => setOpen(false)}/>
                <Grid container spacing={5}>
                    <Grid sx={{display: 'flex'}} item xs={12} md={6}>
                        <LeftSide setOpen={setOpen}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RightSide watchData={watchData}/>
                    </Grid>
                </Grid>
            </Paper>
        </Modal>
    )
    
}

export default CustomModal