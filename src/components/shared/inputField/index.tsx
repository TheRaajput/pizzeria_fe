import classNames from "classnames";
interface Props {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  onChange?: (ev: any) => void;
  error?: boolean;
  errorText?: string;
}

const InputField = ({
  id,
  name,
  label,
  type,
  placeholder,
  error,
  errorText,
  onChange,
}: Props) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium tracking-wide text-gray-700 ">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={classNames(
          "content-center w-full px-4 py-2 text-base border rounded-lg focus:outline-none",
          error ? "border-red-500" : "border-green-400 "
        )}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <span className="text-sm text-red-500">{errorText}</span>}
    </div>
  );
};

export default InputField;
