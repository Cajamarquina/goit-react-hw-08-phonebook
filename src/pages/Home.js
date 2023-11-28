import { Animation } from 'lotties/Lottie';
import { useAuth } from 'hooks/useAuth';
import {
  TaglineText,
  PageTitle,
} from '../components/General/HomePage.styled';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <PageTitle>Hello, I am your Phonebook.</PageTitle>
      {isLoggedIn ? <Animation /> : null}
      <TaglineText>
         Fast, Secure
        and Friendly App
      </TaglineText>
    </div>
  );
}
