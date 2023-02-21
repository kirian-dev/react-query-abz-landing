import * as yup from 'yup';

const FORMATS_FILE = ['image/jpeg', 'image/jpg'];

export const validationSchemaSignUp = yup.object().shape({
  name: yup
    .string()
    .required('Username is required')
    .min(2, 'Username should contain at least 2 characters')
    .max(60, 'Username should contain at most 60 characters'),
  email: yup
    .string()
    .email('error email')
    .required('Email is required')
    .max(100, 'Email should contain at most 100 characters'),
  phone: yup
    .string()
    .matches(/(?:\+38)?(0\d{9})+/, 'error phone number expected +380...')
    .required('Phone is required')
    .max(13, 'error phone number length'),
  photo: yup
    .mixed()
    .required('A file is required')
    .test(
      'fileSize',
      'Photo size should be less than 5 MB',
      (value) => value && (value as File).size <= 5000000
    )
    .test('fileFormat', 'Unsupported file format. Expected jpeg/jpg', (value: any) => {
      if (value) {
        const fileType = value.type;
        return fileType && FORMATS_FILE.includes(fileType);
      }
      return false;
    })
    .test('fileResolution', 'Photo resolution should be at least 70x70 pixels', async (value) => {
      if (value) {
        const file = value as File;
        const reader = new FileReader();
        const blob = new Blob([file], { type: file.type });

        reader.readAsDataURL(blob);
        await new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
        });
        const img = new Image();
        const loaded = new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        img.src = reader.result as string;
        await loaded;
        return img.width >= 70 && img.height >= 70;
      }
      return false;
    }),
});
