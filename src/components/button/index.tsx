import styles from './button.module.css';

type ButtonType = {
  tipo:  "button" | "submit" | "reset" | undefined,
  text: string;
  color: string;
  largura: string;
  altura: string;
  colorText: string;
  onClickEvent?: () => void; // Adicionando a propriedade onClick opcional
}

export default function Button({ text, color, largura, altura, colorText, onClickEvent, tipo}: ButtonType) {
  return (
    <button
      style={{
        backgroundColor: color,
        width: largura,
        height: altura,
        color: colorText
      }}
      className={styles.button}
      onClick={onClickEvent} // Adicionando o evento onClick ao botão
      type={tipo}
    >
      {text}
    </button>
  )
}
