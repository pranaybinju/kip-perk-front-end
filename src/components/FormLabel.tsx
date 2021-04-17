interface FormLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}
const FormLabel = (props: FormLabelProps) => {
  return (
    <label className="block" {...props}>
      {props.children}
    </label>
  );
};

export default FormLabel;
