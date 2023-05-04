import './App.css';
import { useState } from 'react';
import CustomModal from './components/CustomModal';

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

  return (
    <div className="App">
      <p onClick={openModal}>
        Click here to open modal!
      </p>
  
      <CustomModal open={open} setOpen={setOpen} watchData={watchData} setWatchData={setWatchData}/>
    </div>
  );
}

export default App;
