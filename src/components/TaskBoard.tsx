import Clipboard from "../assets/Clipboard.svg";
import styles from "./TaskBoard.module.css";

export function TaskBoard() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.clearBoard}>
          <img src={Clipboard} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
      
    </>
  );
}
