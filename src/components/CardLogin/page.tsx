import Link from "next/link";
import Button from "../button";
import styles from "./CardLogin.module.css";

export default function CardLogin() {
  return (
    <div className={styles.card}>
      <div className={styles.name_crud}>
        <p>Crud Operations</p>
      </div>
      <div className={styles.Desc_card}>
        <p>SIGN IN</p>
        <p>Enter yuor credetnials to acess yor account</p>
      </div>
      <div className={styles.Inputs}>
        <div className="input-group mb-4 ml-2">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Insert e-mail adress"
            />
            <label className="floatingInputGroup1">E-mail</label>
          </div>
        </div>
        <div className="input-group mb-4 ml-2">
          <div className="form-floating">
            <input
              type="Password"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="Inssert Password"
            />
            <label className="floatingInputGroup1">Password</label>
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
      <div className={styles.account}>
        <p>
          Forgot your password?{" "}
          <Link href="/" className={styles.accoun_link}>
            Reset Password
          </Link>
        </p>
        <p>
          Don't have an account?{" "}
          <Link href="/" className={styles.accoun_link}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
