import style from './sing-up.module.less';
import {PASSWORD_MIN_LENGTH} from '../../shared';
import {Button, E_KEY_FILTER, Input, Password, TSuggestion} from '@common';
import {useState} from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';

type TProps = WithTranslation;

export const SignUp = withTranslation()(({i18n: {t}}: TProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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
    console.log('Sign up');
  };

  return (
    <div className={style.root}>
      <Input
        onChange={handleLoginChange}
        value={login}
        keyfilter={E_KEY_FILTER.ALPHA_NUM}
        placeholder={t('Authentication.SignUp.LoginPlaceholder')}
        className={style.input}
      />
      <Password
        onChange={handlePasswordChange}
        value={password}
        placeholder={t('Authentication.SignUp.PasswordPlaceholder')}
        className={style.input}
        toggleMask
        suggestions={passwordSuggestions}
        feedback
        promptLabel={t('Authentication.SignUp.PasswordStrength.EnterPassword')}
        weakLabel={t('Authentication.SignUp.PasswordStrength.WeakLabel')}
        mediumLabel={t('Authentication.SignUp.PasswordStrength.MediumLabel')}
        strongLabel={t('Authentication.SignUp.PasswordStrength.StrongLabel')}
      />
      <Password
        onChange={handlePasswordConfirmChange}
        value={passwordConfirm}
        placeholder={t('Authentication.SignUp.PasswordConfirmPlaceholder')}
        className={style.input}
        toggleMask
      />
      <Button className={style.button} onClick={handleSignUpClick}>
        {t('Authentication.SignUp.Label')}
      </Button>
    </div>
  );
});
