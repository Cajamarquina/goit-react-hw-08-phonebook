import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { logOut } from '../../redux/auth/authAPI';
import { useAuth } from 'hooks';
import { ButtonLogOut, UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handlerOnClick = () => {
    dispatch(logOut());
    Notify.success(`You are logged out of your account`);
  };

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <ButtonLogOut type="button" onClick={() => handlerOnClick()}>
        Log out
      </ButtonLogOut>
    </Wrapper>
  );
};