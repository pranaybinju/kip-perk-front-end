interface ErrorLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}
const ErrorLabel = (props: ErrorLabelProps) => {
  return (
    <label className={`block ${props.className} mt-1 text-red-600`} {...props}>
      {props.children}
    </label>
  );
};

export default ErrorLabel;
