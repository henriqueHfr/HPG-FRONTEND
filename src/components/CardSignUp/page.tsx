"use client";

import Link from "next/link";
import Button from "../button";
import styles from "./CardSignUp.module.css";
import { useHandleSignUp } from "@/utils/handleSignUp";

export default function CardSignUp() {
  const { emailRef, passwordRef, passwordConfirmRef, nameRef, handleSignUp } = useHandleSignUp();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.name_crud}>
          <p>HPG Operations</p>
        </div>
        <div className={styles.Desc_card}>
          <p>SIGN UP</p>
          <p>Enter your credentials to create your account</p>
        </div>
        <form onSubmit={handleSignUp}>
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
              typeButton= "submit"
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
    </div>
  );
}
