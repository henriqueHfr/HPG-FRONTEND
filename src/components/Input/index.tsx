// InputLogin.tsx
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import styles from '@/components/CardSignIn/CardSignIn.module.css';

type InputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  titulo: string;
  placeholderInput: string;
  tipo : string;
};

const InputLogin = forwardRef<HTMLInputElement, InputType>((props, ref) => {
  const { tipo, titulo, placeholderInput, ...rest } = props;

  return (
    <div className={styles.Inputs}>
      <div className="input-group mb-4 ml-2">
        <div className="form-floating">
          <input
            {...rest}
            type={tipo}
            className="form-control"
            id={`floatingInput${titulo}`}
            placeholder={placeholderInput}
            ref={ref}
            required
          />
          <label htmlFor={`floatingInput${titulo}`}>{titulo}</label>
        </div>
      </div>
    </div>
  );
});

export default InputLogin;
