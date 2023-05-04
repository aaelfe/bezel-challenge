import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';

function LeftSide({ setOpen }) {

    const acceptSale = async () => {
        await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept",
        {
        method: "POST",
        body: {
            saleAccepted: true
        }
        }).then(response => {
        return response.json()
        }).then(data => {
        console.log(data)
        }).catch((error) => console.log(error))

        setOpen(false)
    }

    const rejectSale = async () => {
        await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline",
        {
        method: "POST",
        body: {
            saleAccepted: false
        }
        }).then(response => {
        return response.json()
        }).then(data => {
        console.log(data)
        }).catch((error) => console.log(error))

        setOpen(false)
    }

    return(
        <Stack className='LeftSide' justifyContent='space-between'>
            <div className="SoldExplanation">
                <Typography gutterBottom variant='subtitle2'>CONGRATS!</Typography>
                <Typography gutterBottom variant='h5'>Your watch sold!</Typography>
                <Typography variant='body2'>You have 1 business day to accept the sale. If you do not accept, it will be automatically rejected.</Typography>
            </div>
            <div>
                <ThemeProvider theme={theme}>
                    <Button onClick={acceptSale} className='Accept' variant='contained' sx={{borderRadius: '25px', marginBottom:'10px', textTransform: 'unset'}}>Accept sale</Button>
                    <Button onClick={rejectSale} className='Reject' sx={{borderRadius: '25px', color: '#1a3a32', textTransform: 'unset'}}>Reject sale</Button>
                </ThemeProvider>
            </div>
        </Stack>
    )

}

export default LeftSide