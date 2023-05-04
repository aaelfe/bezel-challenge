import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

function RightSide({ watchData }) {

    const dollarFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    
    return(
        <Paper 
            sx={{display: 'flex', backgroundColor:"#f6f4f1", borderRadius: '20px'}} 
            elevation={0} 
            className='Listing'
        >
            {watchData ?
            <Stack justifyContent='space-between' width='100%'>
            <Divider/>
            <div className="MarginBoth">
                <div className='WatchInfo'>
                    <Typography variant='subtitle2'>{watchData.listing.model.brand.displayName} {watchData.listing.model.displayName} {watchData.listing.model.referenceNumber}</Typography>
                    <Typography className='Details' variant='body2'>{watchData.listing.condition} / {watchData.listing.manufactureYear}</Typography>
                </div>
                <img className="WatchImage" src={watchData.listing.images[0].image.url}></img>
            </div>
            <Divider/>
            <div className='MarginTop'>
                <Typography className='InlineBlock' variant='body2'>Selling Price</Typography>
                <Typography className='FloatRight' sx={{fontWeight: 'bold'}} variant='body2'>{dollarFormatter.format(watchData.salePriceCents/100)}</Typography>
            </div>
            <div>
                <Typography className='InlineBlock' variant='body2'>Level 1 Commission ({watchData.commissionRateBips/100}%)</Typography>
                <Typography className='FloatRight' variant='body2'>{dollarFormatter.format((watchData.commissionRateBips/10000)*watchData.salePriceCents/100)}</Typography>
            </div>
            <div>
                <Typography className='InlineBlock' variant='body2'>Seller fee</Typography>
                <Typography className='FloatRight' variant='body2'>{dollarFormatter.format(watchData.sellerFeeCents/100)}</Typography>
            </div>
            <div>
                <Typography className='InlineBlock' variant='body2'>Insured Shipping</Typography>
                <Typography className='FloatRight' variant='body2'>Free</Typography>
            </div>
            <div className="MarginBottom">
                <Typography className='InlineBlock' sx={{color:'#1e7d67'}} variant='body2'>Bezel authentication</Typography>
                <Typography className='FloatRight' sx={{color:'#1e7d67'}} variant='body2'>Free</Typography>
            </div>
            <Divider/>
            <div className='MarginTop'>
                <Typography className='InlineBlock' sx={{fontWeight:'bold'}} variant='body2'>Earnings</Typography>
                <Typography className='FloatRight' sx={{fontWeight:'bold'}} variant='body2'>{dollarFormatter.format(watchData.payoutAmountCents/100)}</Typography>
            </div>
            </Stack> : <></>}
        </Paper>
    )
}

export default RightSide