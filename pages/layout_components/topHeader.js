import styles from './top_header.module.css';

export default function topHeader(){
    return (
    <div className={styles.mainHeader}>
        <div className='container mx-auto flex justify-between'>
            <div>
                <i className="fa fa-map-marker"></i> 121 King Street, Melbourne 
                <p1 className="px-4">|</p1> 
                <i className="fa-regular fa-paper-plane"></i> sample@email.com
             </div>
             <div>
                <a href="#" className='px-3'>
                    <i className='fa-brands fa-facebook'></i>
                </a>
                <a href="#" className='px-3'>
                    <i className='fa-brands fa-twitter'></i>
                </a>
                <a href="#" className='px-3'>
                    <i className='fa-brands fa-linkedin'></i>
                </a>
                <a href="#" className='px-3'>
                    <i className='fa-brands fa-instagram'></i>
                </a>
             </div>
        </div>
    </div>)
}