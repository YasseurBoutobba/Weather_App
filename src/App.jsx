import { useEffect, useState } from 'react'

import Card from './components/Card';
import InputBar from './components/Input';
import Cards from './components/Cards';

function App() {
 
  const [location, setLocation] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          console.log(location)
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);
  
  

  return (
    <main className=' flex flex-col bg-gray-200 items-center justify-center h-screen gap-16'>
    
      <InputBar />
      <Cards />
     
    </main>
  )
}

export default App
