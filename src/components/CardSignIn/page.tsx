'use client'

import Link from "next/link";
import Button from "../button";
import styles from "./CardSignIn.module.css";
import { useRef } from "react";

export default function CardSignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      console.log(email, password);

      // Aqui você pode adicionar sua lógica para chamar a API de login
      // Exemplo:
      // try {
      //   const response = await api.post('auth/login', { email, password });
      //   console.log(response.data); // Exemplo de como tratar a resposta da API
      // } catch (error) {
      //   console.error('Erro ao realizar o login:', error);
      // }
    } else {
      console.error('Um ou ambos os campos de email e senha não estão definidos corretamente.');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.name_crud}>
        <p>HPG Operations</p>
      </div>
      <div className={styles.Desc_card}>
        <p>SIGN IN</p>
        <p>Enter your credentials to create your account</p>
      </div>
      <form onSubmit={handleSignIn}>
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
          <div className="input-group mb-4 ml-2">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingInputPassword"
                placeholder="Insert Password"
                ref={passwordRef}
                
              />
              <label htmlFor="floatingInputPassword">Password</label>
            </div>
          </div>
          <Button
            text="SIGN IN"
            color="orange"
            largura="415px"
            altura="45px"
            colorText="white"
          />
        </div>
      </form>
      <div className={styles.account}>
        <p>
          Forgot your password?
          <Link href="/" className={styles.accoun_link}>
            Reset Password
          </Link>
        </p>
        <p>
          Don't have an account?
          <Link href="/signup" className={styles.accoun_link}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
