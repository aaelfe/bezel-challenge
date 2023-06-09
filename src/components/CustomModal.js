import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
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
                <CloseIcon className='CloseIcon' onClick={() => setOpen(false)}/>
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