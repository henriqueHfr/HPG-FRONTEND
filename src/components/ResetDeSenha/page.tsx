"use client";

import Link from "next/link";
import Button from "../button";
import styles from "./resetdesenha.module.css";
import useHandleEnvioDeEmail from "@/utils/EnvioDeCode";

export default function ResetSenha() {
  const { emailRef, handleEnvioDeEmail } = useHandleEnvioDeEmail();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.name_crud}>
          <p>HPG Operations</p>
        </div>
        <div className={styles.Desc_card}>
          <p>Reset de Senha</p>
          <p>Digite o seu email</p>
        </div>
        <form onSubmit={(event) => handleEnvioDeEmail(event)}>
          <div className={styles.Inputs}>
            <div className="input-group mb-4 ml-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="Insert email address"
                  ref={emailRef}
                />
                <label htmlFor="floatingInputEmail">Email</label>
              </div>
            </div>
            <Button
              typeButton="submit"
              text="Enviar email"
              color="orange"
              largura="415px"
              altura="45px"
              colorText="white"
            />
          </div>
        </form>
        <div className={styles.account}>
          <p>
           Não possui conta ainda?
            <Link href="/signup" className={styles.accoun_link}>
              Crie uma agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
