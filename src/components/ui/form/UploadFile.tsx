import { FC } from 'react';
import { useField } from 'formik';

interface UploadFileProps {
  name: string;
  accept: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadFile: FC<UploadFileProps> = ({ name, accept, error, ...props }) => {
  const [field, meta] = useField<FileList>({ name, type: 'file' });
  const isError = meta.touched && meta.error;
  const isFile = field.value && field.value.length !== 0;
  return (
    <label htmlFor={name} className="form__file-wrapper">
      <input accept={accept} className="file" id={name} type="file" {...props} />
      <div className="form__file-custom">
        <div className={`form__file-custom-upload ${isError ? 'error' : ''}`}>Upload</div>
        <div
          style={isFile ? { color: '#000' } : undefined}
          className={`form__file-custom__name ${isError ? 'error' : ''}`}
        >
          {isFile ? field?.value?.name : 'Upload your photo'}
        </div>
        <label htmlFor={name} className="form__meta error">
          {`${error}`}
        </label>
      </div>
      {isError && <div className="form__error">{meta.error}</div>}
    </label>
  );
};
