import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  let [open, setOpen] = useState(false)
  let [watchData, setWatchData] = useState(null)

  const openModal = async () => {
    await fetch('https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123',
    {
      method: "GET",
    }).then(response => {
      return response.json()
    }).then(data => {
      setWatchData(data)
      console.log(watchData)
    }).catch((error) => console.log(error))

    setOpen(true)
  }

  const dollarFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <div className="App">
      <p onClick={openModal}>
        Click here to open modal!
      </p>

      <Modal
        className='Center'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Paper sx={{borderRadius: '20px', position:'relative'}} className='Modal'>
          <CloseIcon className="CloseIcon" onClick={() => setOpen(false)}/>
          <Grid container spacing={5}>
            <Grid sx={{display: 'flex'}} item xs={12} md={6}>
              <Stack className='LeftSide' justifyContent='space-between'>
                <div className="SoldExplanation">
                  <Typography gutterBottom variant='subtitle2'>CONGRATS!</Typography>
                  <Typography gutterBottom variant='h5'>Your watch sold!</Typography>
                  <Typography variant='body2'>You have 1 business day to accept the sale. If you do not accept, it will be automatically rejected.</Typography>
                </div>
                <div>
                  <Button className='Accept' variant='contained' sx={{borderRadius: '25px', marginBottom:'10px', backgroundColor: '#1a3a32', textTransform: 'unset'}}>Accept sale</Button>
                  <Button className='Reject' sx={{borderRadius: '25px', color: '#1a3a32', textTransform: 'unset'}}>Reject sale</Button>
                </div>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper 
                sx={{display: 'flex', backgroundColor:"#f6f4f1", borderRadius: '20px'}} 
                elevation={0} 
                className='Listing'
              >
                {watchData ?
                <Stack justifyContent='space-between' width='100%'>
                  <Divider/>
                  <div>
                    <div display='inline-block'>
                      <Typography variant='subtitle2'>{watchData.listing.model.brand.displayName} {watchData.listing.model.displayName}</Typography>
                      <Typography variant='body2'>{watchData.listing.condition} / {watchData.listing.manufactureYear}</Typography>
                    </div>
                    <img className="WatchImage" src={watchData.listing.images[0].image.url}></img>
                  </div>
                  <Divider/>
                  <div>
                    <Typography sx={{display: "inline-block"}} variant='body2'>Selling Price</Typography>
                    <Typography sx={{display: "inline-block", float:'right', fontWeight: 'bold'}} variant='body2'>{dollarFormatter.format(watchData.salePriceCents/100)}</Typography>
                  </div>
                  <div>
                    <Typography sx={{display: "inline-block"}} variant='body2'>Level 1 Commission ({watchData.commissionRateBips/100}%)</Typography>
                    <Typography sx={{display: "inline-block", float:'right'}} variant='body2'>{dollarFormatter.format((watchData.commissionRateBips/10000)*watchData.salePriceCents/100)}</Typography>
                  </div>
                  <div>
                    <Typography sx={{display: "inline-block"}} variant='body2'>Seller fee</Typography>
                    <Typography sx={{display: "inline-block", float:'right'}} variant='body2'>{dollarFormatter.format(watchData.sellerFeeCents/100)}</Typography>
                  </div>
                  <div>
                    <Typography sx={{display: "inline-block"}} variant='body2'>Insured Shipping</Typography>
                    <Typography sx={{display: "inline-block", float:'right'}} variant='body2'>Free</Typography>
                  </div>
                  <div>
                    <Typography sx={{display: "inline-block", color:'#1e7d67'}} variant='body2'>Bezel authentication</Typography>
                    <Typography sx={{display: "inline-block", float:'right', color:'#1e7d67'}} variant='body2'>Free</Typography>
                  </div>
                  <Divider sx={{marginTop: "20px"}}/>
                  <div>
                    <Typography sx={{display: "inline-block", fontWeight:'bold'}} variant='body2'>Earnings</Typography>
                    <Typography sx={{display: "inline-block", float:'right', fontWeight:'bold'}} variant='body2'>{dollarFormatter.format(watchData.payoutAmountCents/100)}</Typography>
                  </div>
                </Stack> : <></>}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  );
}

export default App;
