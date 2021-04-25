interface FormLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}
const FormLabel = (props: FormLabelProps) => {
  return (
    <label className={`block text-black ${props.className}`} {...props}>
      {props.children}
    </label>
  );
};

export default FormLabel;
