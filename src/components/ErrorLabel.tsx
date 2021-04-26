interface ErrorLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}
const ErrorLabel = (props: ErrorLabelProps) => {
  return (
    <label className={`block ${props.className} text-red-400`} {...props}>
      {props.children}
    </label>
  );
};

export default ErrorLabel;
