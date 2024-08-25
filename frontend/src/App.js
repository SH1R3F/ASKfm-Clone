import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
      <div>
          <h1>{t('Hello world')}</h1>
      </div>
  );
}

export default App;
