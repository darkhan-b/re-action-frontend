import { Button } from '../../../components/button';

import s from './hhLogIn.module.scss';

export const HhLogIn = (): JSX.Element => {
  const CLIENT_ID = 'LUJOEAHS4P7QI0BQBRGKQ34OP7T81S5GO617IIFJFG71SOK3PJCJMBLDDEQS0497';
  const REDIRECT_URI = 'http://127.0.0.1:8000/sign-up';
  const onClick = (): void => {
    window.location.href = `https://hh.ru/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=&response_type=code&state=2SWIojM6gcZs`;
  };

  return (
    <div className={s.logIn}>
      <h1>Вход через HH.ru</h1>
      <span>Вы собираетесь войти, используя стороннюю учетную запись из HH.ru</span>
      <div className={s.buttonWrapper}>
        <Button text={'Продолжить'} onClick={onClick} />
      </div>
    </div>
  );
};
