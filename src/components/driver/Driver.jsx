import React from 'react'
import styles from './Driver.module.css';
import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    // <div className={styles.driver}>
    <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-2 gap-8">
        <div className={styles.left}>
            <img src={Drive} alt="/" className='max-w-[512px]'/>
        </div>
        <div>
            <h2>Find the perfect car <span>to try before you buy</span></h2>
            <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat.</p>
            <button>Browse Cars</button>
        </div>
    </div>
  )
}

export default Driver