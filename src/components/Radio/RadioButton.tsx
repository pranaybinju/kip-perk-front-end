import React, { useEffect, useState, useCallback } from "react";
import Container from "../Container";
import Input from "../Input";
import FormLabel from "../FormLabel";
import { forwardRef } from "react";
import "./styles.css";

export const RadioButtonGroup = forwardRef(
  ({ onChange, children }: any, ref: any) => {
    const [value, setValue] = useState<any[]>([]);

    const onRadioValChange = useCallback(
      (val: any) => {
        setValue(val);
      },
      [value]
    );

    useEffect(() => {
      onChange?.(value);
    }, [value, onChange]);

    return (
      <Container className="flex flex-row flex-wrap">
        {React.Children.map(children, (child, _index) => {
          return React.cloneElement(child, {
            onValChange: onRadioValChange,

            ...child.props,
          });
        })}
      </Container>
    );
  }
);

export const RadioButton = ({
  className,
  onValChange,
  id,
  label,
  name,
  value,
}: any) => {
  return (
    <Container className="flex items-center mr-4 mb-4">
      <Input
        onChange={(e: any) => {
          onValChange(e.target.value, e.target.checked);
        }}
        type="radio"
        id={id}
        name={name}
        value={value}
      />
      <FormLabel htmlFor={name} className={`select-none ${className}`}>
        {label}
      </FormLabel>
    </Container>
  );
};
