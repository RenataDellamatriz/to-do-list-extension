import styles from './CheckboxInput.module.css'
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckboxInputProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;  
  title: string;
}
export function CheckboxInput({checked,title, onChange} : CheckboxInputProps) {
  
 

  return (
    <div>          
      <Checkbox.Root checked={checked} onCheckedChange={onChange}  className={styles.wrapper} title={title}>
        <Checkbox.Indicator>
          <CheckIcon className={styles.icon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
}
