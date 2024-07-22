import styles from './popup.module.css'

interface PopUpInterface{
  texto: string
}

export default function PopUp({texto}: PopUpInterface){
  return(
    <div className={styles.container}>
      <p>{texto}</p>
    </div>
  )
}