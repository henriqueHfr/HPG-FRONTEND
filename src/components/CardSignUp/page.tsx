'use client'

import Link from "next/link";
import Button from "../button";
import styles from "./CardSignUp.module.css";
import { useRef } from "react";

export default function CardSignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current && passwordConfirmRef.current && nameRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const passwordConfirm = passwordConfirmRef.current.value;
      const name = nameRef.current.value;

      if(password === passwordConfirm){
        console.log(email, password, passwordConfirm, name);

        // Aqui você pode adicionar sua lógica para chamar a API de login
        // Exemplo:
        // try {
        //   const response = await api.post('auth/login', { email, password });
        //   console.log(response.data); // Exemplo de como tratar a resposta da API
        // } catch (error) {
        //   console.error('Erro ao realizar o login:', error);
        // }
      }else{
        alert("Senha digitada não são iguais")
      }
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
        <p>SIGN UP</p>
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
                ref={nameRef}
                required
              />
              <label htmlFor="floatingInputEmail">Nome Completo</label>
            </div>
          </div>
        </div>
        <div className={styles.Inputs}>
          <div className="input-group mb-4 ml-2">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInputEmail"
                placeholder="Insert email address"
                ref={emailRef}
                required
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
                required
              />
              <label htmlFor="floatingInputPassword">Password</label>
            </div>
          </div>
          <div className="input-group mb-4 ml-2">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingInputPassword"
                placeholder="Insert Password"
                ref={passwordConfirmRef}
                required
              />
              <label htmlFor="floatingInputPassword">Confirm Password</label>
            </div>
          </div>
          <Button
            text="SIGN UP"
            color="orange"
            largura="415px"
            altura="45px"
            colorText="white"
          />
        </div>
      </form>
      <div className={styles.account}>
        <p>
          Already have an account? 
          <Link href="/signin" className={styles.accoun_link}>
            Access account
          </Link>
        </p>
      </div>
    </div>
  );
}
