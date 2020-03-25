import React from 'react';
import preloader from '../assets/img/preloader.svg'




 const Preloader: React.FC = () => {

    return <div className="preloaderWrap"><img src={preloader} className="preloader" alt="preloader"/></div>

}

export default Preloader