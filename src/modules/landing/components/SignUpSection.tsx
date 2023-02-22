import { FC } from 'react';
import { Formik } from 'formik';
import { useUsers } from '../hooks/useUsers';
import {
  RADIO_BUTTON_POSITION_TEXT,
  SIGNUP_TEXT,
  SUCCESS_TITLE,
  USERS_TITLE_POST,
} from '@/shared/constants/constants';
import { validationSchemaSignUp } from '../utils/validationSignUp';
import { ICreateUser } from '@/types/user.interface';
import { Field } from '@/components/ui/form/Field';
import { Radio } from '@/components/ui/form/FieldRadio';
import { UploadFile } from '@/components/ui/form/UploadFile';
import { Button } from '@/components/ui/button/Button';
import { Loader } from '@/components/ui/loader/Loader';
import { Heading } from '@/components/ui/heading/Heading';
import successIcon from '@/assets/images/svg/success-register.svg';
import { AxiosError } from 'axios';

interface IUsers extends ReturnType<typeof useUsers> {
  createUserError: AxiosError<any> | null | undefined;
  isCreating: boolean;
  createUserSuccess: boolean;
}

export const SignUpSection: FC = () => {
  const { isCreating, createUserError, createUser, positions, createUserSuccess } =
    useUsers() as IUsers;

  const errorMessage =
    createUserError && typeof createUserError !== 'string'
      ? createUserError.response
        ? createUserError.response.data.message
        : createUserError.message
      : createUserError;

  return (
    <section className="signup" id="signup-section">
      <h1 className="signup__title">{USERS_TITLE_POST}</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          positionId: '1',
          photo: '',
        }}
        validateOnBlur
        validationSchema={validationSchemaSignUp}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const { name, email, phone, photo, positionId } = values;
          const data = new FormData();
          data.append('position_id', positionId);
          data.append('name', name);
          data.append('email', email);
          data.append('phone', phone);
          data.append('photo', photo);
          createUser(data as unknown as ICreateUser);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ errors, handleSubmit, getFieldProps, isValid, setFieldValue }) => (
          <>
            {isCreating ? (
              <Loader />
            ) : (
              <form onSubmit={handleSubmit} className="form">
                <div className="form__field__container">
                  <Field
                    label="Your name"
                    id="name"
                    name="name"
                    type="text"
                    className="form__field"
                    error={errors.name ? errors.name : ''}
                  />
                </div>
                <div className="form__field__container">
                  <Field
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="form__field"
                    error={errors.email ? errors.email : ''}
                  />
                </div>

                <div className="form__field__container form__field__container--mb ">
                  <Field
                    label="Phone"
                    id="phone"
                    name="phone"
                    type="text"
                    className="form__field"
                    error={errors.phone ? errors.phone : ''}
                    helperText="+38 (XXX) XXX - XX - XX"
                  />
                </div>
                <ul className="form__radio-list">
                  <li className="form__radio-list-title">{RADIO_BUTTON_POSITION_TEXT}</li>
                  {positions &&
                    positions.positions.map((elem) => {
                      const positionIdProps = getFieldProps('positionId');
                      const radioProps = {
                        name: positionIdProps.name,
                        onBlur: positionIdProps.onBlur,
                        onChange: positionIdProps.onChange,
                        value: positionIdProps.value,
                      };
                      return (
                        <div key={elem.id} className="form__radio__item">
                          <Radio
                            {...radioProps}
                            value={elem.id.toString()}
                            label={elem.name}
                            id={`position-${elem.id}`}
                            key={elem.id}
                          />
                        </div>
                      );
                    })}
                </ul>
                <UploadFile
                  name="photo"
                  accept="image/jpeg"
                  error={errors.photo ? errors.photo : ''}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.files) {
                      setFieldValue('photo', event.target.files[0]);
                    }
                  }}
                />
                {errorMessage && <p className="form__error form__error--pb ">{errorMessage}</p>}
                <div className="signup__button-container">
                  <Button type="submit" className="signup__button" disabled={!isValid}>
                    {SIGNUP_TEXT}
                  </Button>
                </div>
                {createUserSuccess && !createUserError && (
                  <div className="signup__success">
                    <Heading type="large" className="signup__title">
                      {SUCCESS_TITLE}
                    </Heading>
                    <img src={successIcon} alt="Success register" />
                  </div>
                )}
              </form>
            )}
          </>
        )}
      </Formik>
    </section>
  );
};
