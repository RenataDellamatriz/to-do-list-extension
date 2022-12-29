import styles from "./Input.module.css";

interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onInvalid?: React.FormEventHandler<HTMLInputElement>;
}

export function Input({
  placeholder,
  name,
  value,
  onChange,
  onInvalid,
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        autoComplete="off"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onInvalid={onInvalid}
      />
    </div>
  );
}
