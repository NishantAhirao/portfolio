import React from 'react'
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import './myclients.css'

const MyClients = () => {
  return (
    <section id='myclients'>
         <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>
            I have had the opportunity to work with a diverse group of companies.
Some of the notable companies I have worked with includes
            </p>
            
            <div className='clientImgs'>
                <img src={walmart} alt='walmart' className='clientImg'></img>
                <img src={adobe} alt='adobe' className='clientImg'></img>
                <img src={microsoft} alt='microsoft' className='clientImg'></img>
                <img src={facebook} alt='facebook' className='clientImg'></img>


            </div>
            
        </div>
    </section>
  )
}

export default MyClients
