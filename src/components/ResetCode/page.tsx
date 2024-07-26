"use client";
import Button from "../button";
import styles from "./resetcode.module.css";
import useHandleVerificaToken from "@/utils/VerificaCodeToken";

export default function Code() {
  const {codeRef, handleVerificaToken } = useHandleVerificaToken();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.name_crud}>
          <p>HPG Operations</p>
        </div>
        <div className={styles.Desc_card}>
          <p>Reset de Senha</p>
          <p>Digite o código recebido no seu e-mail</p>
        </div>
        <form onSubmit={handleVerificaToken}>
          <div className={styles.Inputs}>
            <div className="input-group mb-4 ml-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="Insert email address"
                  ref={codeRef}
                />
                <label htmlFor="floatingInputEmail">Código</label>
              </div>
            </div>
            <Button
              typeButton="submit"
              text="Enviar código"
              color="orange"
              largura="415px"
              altura="45px"
              colorText="white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
