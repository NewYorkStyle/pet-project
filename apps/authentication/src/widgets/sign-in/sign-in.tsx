import style from './sing-in.module.less';
import {Button, E_KEY_FILTER, Input, Password} from '@common';
import {useState} from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';

type TProps = WithTranslation;

export const SignIn = withTranslation()(({i18n: {t}}: TProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (value: string) => {
    setLogin(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSignInClick = () => {
    console.log('Sign in');
  };

  return (
    <div className={style.root}>
      <Input
        onChange={handleLoginChange}
        value={login}
        keyfilter={E_KEY_FILTER.ALPHA_NUM}
        placeholder={t('Authentication.SignIn.LoginPlaceholder')}
        className={style.input}
      />
      <Password
        onChange={handlePasswordChange}
        value={password}
        placeholder={t('Authentication.SignIn.PasswordPlaceholder')}
        className={style.input}
        toggleMask
      />
      <Button className={style.button} onClick={handleSignInClick}>
        {t('Authentication.SignIn.Label')}
      </Button>
    </div>
  );
});
