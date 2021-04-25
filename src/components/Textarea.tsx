import { forwardRef } from "react";
interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}
const Textarea = forwardRef((props: TextareaProps, ref: any) => (
  <textarea ref={ref} style={{ resize: "none" }} {...props} />
));

export default Textarea;
