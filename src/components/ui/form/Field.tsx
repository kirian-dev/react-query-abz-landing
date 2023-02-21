import { FC } from 'react';
import { useField, FieldAttributes } from 'formik';

export const Field: FC<FieldAttributes<any>> = ({ label, helperText, className, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <div className="form__group">
      <input
        id={props.id || props.name}
        className={`form__field ${isError ? 'error' : ''} ${className}`}
        placeholder={label}
        {...field}
        {...props}
      />
      <label
        htmlFor={props.id || props.name}
        className={`form__label ${isError ? 'error' : ''}`}
      >
        {label}
      </label>

      {isError && (
        <label htmlFor={props.id || props.name} className="form__meta error">
          {meta.error}
        </label>
      )}

      {!isError && helperText && (
        <label htmlFor={props.id || props.name} className="form__meta">
          {helperText}
        </label>
      )}
    </div>
  );
};
