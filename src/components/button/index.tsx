import styles from './button.module.css'

type ButtonType = {
  text: string;
  color: string;
  largura: string;
  altura: string;
  colorText: string
}


export default function Button({text, color, largura, altura, colorText}: ButtonType){
  return(
    <button style={{backgroundColor:`${color};`, width: `${largura};`, height:`${altura};`, color: `${colorText}`}} className={styles.button}>{text}</button>
  )
}