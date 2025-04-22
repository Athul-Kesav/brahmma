import React from "react";

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FloatingLabelInput({
  label,
  id,
  ...props
}: InputGroupProps) {
  const inputId = id || label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="relative m-4 w-full max-w-lg">
      <input
        id={inputId}
        placeholder=" "             // keep a single space so :placeholder-shown works
        required                     // if you still want to leverage peer-valid, otherwise optional
        className="peer block w-full px-4 py-2 text-base font-montserrat bg-transparent border-2 border-sandal/50 rounded-md outline-none transition-colors duration-300 ease-in-out focus:border-darkBlue"
        {...props}
      />
      <label
        htmlFor={inputId}
        className={
          // default = floated (top-0, scale-90)
          // override when empty                  ↓↓↓↓
          "absolute left-3 -top-3 scale-75 pointer-events-none font-montserrat" +
          "transition-all duration-200 ease-in-out " +
          "peer-placeholder-shown:top-1/2 " +
          "peer-placeholder-shown:-translate-y-1/2 " +
          "peer-placeholder-shown:scale-100 " +
          "peer-placeholder-shown:left-5 " +
          "bg-cream px-3" +
          "peer-focus:-top-3 " +
          "peer-focus: left-3"
        }
      >
        {label}
      </label>
    </div>
  );
}
