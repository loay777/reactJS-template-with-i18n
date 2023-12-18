import logo from './logo.svg';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MyButton from './components/ui/button'; 
import './App.css';

function App() {

  const [ t ,i18n ] = useTranslation();
  

 useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('message')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {i18n.language==='ar'?
        <MyButton onClick={()=>{i18n.changeLanguage('en ')}} title={'en'}></MyButton>:
        <MyButton onClick={()=>{i18n.changeLanguage('ar')}} title={'ع'}></MyButton>}
      </header>
    </div>
  );
}

export default App;
