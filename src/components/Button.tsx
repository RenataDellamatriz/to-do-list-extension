import styles from "./Button.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import useWindowSize from "../hooks/useWindowSize";

interface ButtonProps {
  type: "submit";
  disabled: boolean;
}

export function Button({ type, disabled }: ButtonProps) {
  const size = useWindowSize();
  

  return (
    <div className={styles.wrapper}>      
      {size.width <= 500 ? (
        <button type={type} disabled={disabled} title="Criar tarefa">
          <IoIosAddCircleOutline style={{ fontSize: "1rem" }} />
        </button>
      ) : (
        <button type={type} disabled={disabled} title="Criar tarefa">
          Criar <IoIosAddCircleOutline style={{ fontSize: "1rem" }} />
        </button>
      )}
    </div>
  );
}
