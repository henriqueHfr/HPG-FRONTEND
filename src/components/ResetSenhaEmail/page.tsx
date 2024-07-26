"use client";
import Button from "../button";
import styles from "../ResetCode/resetcode.module.css";
import useHandleAtualizaSenha from "@/utils/AtualizaSenha";

export default function ResetSenhaEmail() {
  const { passwordRef, passwordConfirmRef, handleAtualizaSenha } =
    useHandleAtualizaSenha();
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
        <form onSubmit={handleAtualizaSenha}>
          <div className={styles.Inputs}>
            <div className="input-group mb-4 ml-2">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="Insert email address"
                  ref={passwordRef}
                />
                <label htmlFor="floatingInputEmail">Senha</label>
              </div>
            </div>
            <div className="input-group mb-4 ml-2">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="Insert email address"
                  ref={passwordConfirmRef}
                />
                <label htmlFor="floatingInputEmail">Confirme Senha</label>
              </div>
            </div>
            <Button
              typeButton="submit"
              text="Atualizar senha"
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
