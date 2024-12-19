import {SignUpView} from './sign-up.view';
import {signUpStore} from '../../entities/stores';
import {PASSWORD_MIN_LENGTH} from '../../shared';
import {TSuggestion} from '@common';
import {useState} from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';

type TProps = WithTranslation;

export const SignUp = withTranslation()(({i18n: {t}}: TProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const isSendButtonDisabled =
    !signUpStore.login || !signUpStore.password || !signUpStore.passwordConfirm;

  const passwordSuggestions: TSuggestion = {
    header: t('Authentication.SignUp.PasswordSuggestions.Header'),
    requirements: [
      t('Authentication.SignUp.PasswordSuggestions.LowerCase'),
      t('Authentication.SignUp.PasswordSuggestions.UpperCase'),
      t('Authentication.SignUp.PasswordSuggestions.Numeric'),
      t('Authentication.SignUp.PasswordSuggestions.MinLength', {
        minLength: PASSWORD_MIN_LENGTH,
      }),
    ],
  };

  const handleLoginChange = (value: string) => {
    setLogin(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handlePasswordConfirmChange = (value: string) => {
    setPasswordConfirm(value);
  };

  const handleSignUpClick = () => {
    signUpStore.signUp();
  };

  return (
    <SignUpView
      handleLoginChange={handleLoginChange}
      handlePasswordChange={handlePasswordChange}
      handlePasswordConfirmChange={handlePasswordConfirmChange}
      handleSignUpClick={handleSignUpClick}
      isSendButtonDisabled={isSendButtonDisabled}
      login={login}
      password={password}
      passwordConfirm={passwordConfirm}
      passwordSuggestions={passwordSuggestions}
    />
  );
});
