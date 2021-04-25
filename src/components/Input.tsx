import { forwardRef } from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef((props: InputProps, ref: any) => {
  return (
    <input
      ref={ref}
      type="text"
      className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full"
      {...props}
    />
  );
});

export default Input;
