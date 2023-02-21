import { FC } from 'react';
import { FieldProps, useField, useFormikContext } from 'formik';

type RadioProps = {
  label?: string;
  id?: string;
  value?: string;
  name: string;
  multiple?: boolean;
};

export const Radio: FC<RadioProps> = ({ label, id, value, name, multiple, ...props }) => {
  const [field, meta] = useField({ name, value, type: 'radio', multiple });
  const isError = meta.touched && meta.error;

  return (
    <>
      <label className="custom__checkbox" htmlFor={id}>
        <input {...field} type="radio" id={id} value={value} {...props} />
        <span className="checkbox"></span>
      </label>
      <label htmlFor={id}>{label}</label>
      {isError && <div className="form__error">{meta.error}</div>}
    </>
  );
};
