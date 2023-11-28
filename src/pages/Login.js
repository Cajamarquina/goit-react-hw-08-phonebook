import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader';
import { ColorRing } from 'react-loader-spinner';
import { selectIsLoading, selectError } from '../redux/contacts/contactsSelectors';

export default function Login() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      {isLoading && (
        <ContainerLoader>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </ContainerLoader>
      )}
      {error && <span>Oops... There was an error! Please, reload this page!</span>}
    </div>
  );
}