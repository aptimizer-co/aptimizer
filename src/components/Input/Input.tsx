import { ChangeEvent } from 'react';
import s from './Input.module.css';

interface InputInterface {
  label: string;
  type: 'input' | 'textarea';
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputInterface) => {
  return (
    <div className={s.inputContainer}>
      <label htmlFor={name} className={s.label}>
        {label}
        <span className={s.star}>*</span>
      </label>
      {type === 'input' ? (
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          className={s.input}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className={s.textarea}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
