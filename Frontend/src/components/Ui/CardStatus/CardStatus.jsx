import styles from './Card.module.css';
function CardStatus({counter,title}) {
 return (
 <>
 {/* parent card */}
 <div className={`${styles.cardStatus} d-flex align-items-center`}>
 
 <div className={`${styles.icon} d-flex align-items-center justify-content-center W-100`}>
 <i className="fa-solid fa-building"></i>
 </div>
 
 <div className={`${styles.info} w-100 d-flex flex-column align-items-center gap-2`}>
 <span className={styles.counter}>{counter}</span>
 <span className={styles.title}>{title}</span>
 </div>
 
 </div>
 </>

 )
}

export default CardStatus;