"use client";
import Button from "../button";
import styles from "./CriarCardPessoal.module.css";
import { UseHandleCreate } from "@/utils/handlleCreateCardPessoal";

export default function CriarCardPessoal() {
  const {tituloRef, conteudoRef,datatimeRef, handleCreate } = UseHandleCreate();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.name_crud}>
          <p>HPG Operations</p>
        </div>
        <div className={styles.Desc_card}>
          <p>Insera os dados para criar o card</p>
        </div>
        <form onSubmit={handleCreate}>
          <div className={styles.Inputs}>
            <div className="input-group mb-4 ml-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="Insira o Titulo"
                  ref={tituloRef}
                  required
                />
                <label htmlFor="floatingInputEmail">Titulo</label>
              </div>
            </div>
          </div>
          <div className={styles.Inputs}>
            <div className="input-group mb-4 ml-2">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="Insira o conteudo"
                  ref={conteudoRef}
                  required
                />
                <label htmlFor="floatingInputEmail">Conteudo</label>
              </div>
            </div>
            <div className="input-group mb-4 ml-2">
              <div className="form-floating">
                <input
                  type="datetime-local"
                  className="form-control"
                  id="floatingInputPassword"
                  placeholder="Insert Password"
                  ref={datatimeRef}
                  required
                />
                <label htmlFor="floatingInputPassword">Data de Termino</label>
              </div>
              <div className="form-floating">
                <input
                  type="datetime-local"
                  className="form-control"
                  id="floatingInputPassword"
                  placeholder="Insert Password"
                  ref={datatimeRef}
                  required
                />
                <label htmlFor="floatingInputPassword">Data de notificação: </label>
              </div>
            </div>
            <Button
              typeButton= "submit"
              text="Cadastrar"
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
