import {Placeholder} from '../components/Placeholder';
import i18nMainInstance from '../utils/i18n-init';
import {I18nextProvider} from 'react-i18next';

export const App = () => {
  return (
    <I18nextProvider i18n={i18nMainInstance}>
      <Placeholder />
    </I18nextProvider>
  );
};

export default App;
