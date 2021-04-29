import React, { forwardRef, useState, useCallback, useEffect } from "react";
import Container from "../Container";
import Input from "../Input";
import FormLabel from "../FormLabel";
import "./styles.css";
export const CheckboxGroup = forwardRef(
  ({ onChange, children }: any, ref: any) => {
    const [value, setValue] = useState<any[]>([]);

    const onCheckBoxValChange = useCallback(
      (val: any, isChecked: boolean) => {
        if (isChecked) {
          setValue(value.concat(val));
        } else {
          setValue(value.filter((value) => val !== value));
        }
      },
      [value]
    );

    useEffect(() => {
      onChange?.(value);
    }, [value, onChange]);

    return (
      <Container className="flex flex-col my-2">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            onValChange: onCheckBoxValChange,

            ...child.props,
          });
        })}
      </Container>
    );
  }
);

export const Checkbox = ({
  className,
  onValChange,
  id,
  label,
  name,
  value,
}: any) => (
  <Container className="py-2">
    <Container className="flex items-center">
      <Input
        onChange={(e: any) => {
          onValChange(e.target.value, e.target.checked);
        }}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className={`cursor-pointer opacity-0 absolute h-8 w-8`}
      />
      <Container className="bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
        <svg
          className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(-9 -11)" fill="#1F73F1" fillRule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </Container>
      <FormLabel htmlFor={name} className={`select-none ${className}`}>
        {label}
      </FormLabel>
    </Container>
  </Container>
);
