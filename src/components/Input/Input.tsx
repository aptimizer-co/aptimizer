import s from "./Input.module.css";

interface InputInterface {
  label: string;
  type: "input" | "textarea";
  name: string;
  placeholder: string;
}

const Input = ({ label, type, name, placeholder }: InputInterface) => {
  return (
    <div className={s.inputContainer}>
      <label htmlFor={name} className={s.label}>
        {label}
        <span className={s.star}>*</span>
      </label>
      {type === "input" ? (
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          className={s.input}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className={s.textarea}
        />
      )}
    </div>
  );
};

export default Input;
