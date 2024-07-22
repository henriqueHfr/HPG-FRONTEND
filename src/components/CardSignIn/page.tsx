"use client";

import Link from "next/link";
import Button from "../button";
import styles from "./CardSignIn.module.css";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useHandleSignIn } from "@/utils/handleSignIn";

export default function CardSignIn() {
  const { emailRef, passwordRef, handleSignIn } = useHandleSignIn();
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (token) {
      router.push("/home");
    }
  }, [token, router]);


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.name_crud}>
          <p>HPG Operations</p>
        </div>
        <div className={styles.Desc_card}>
          <p>SIGN IN</p>
          <p>Enter your credentials to create your account</p>
        </div>
        <form onSubmit={(event) => handleSignIn(event, true)}>
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
              typeButton="submit"
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
            Don’t have an account?
            <Link href="/signup" className={styles.accoun_link}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
