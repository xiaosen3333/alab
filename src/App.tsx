import { Route, Routes } from 'react-router-dom';
import {HomePage} from './Home/Home';
import {CompanyPage} from './Company/Company';
import {MediaPage} from './Media/Media';
import {ProductPage} from './Product/Product';
import {createContext} from 'react';
import {ALabContext,ALabContextContent} from './Context'
import { Updater, useImmer } from 'use-immer';
// import './App.scss';

export interface ALabContextInterface{
  context:ALabContext;
  setContext:Updater<ALabContext>;
}

export const AppContext = createContext<ALabContextInterface>(undefined!)

function App() {
  const [context,setContext] = useImmer(ALabContextContent())
  return (
    <AppContext.Provider value={{context,setContext}}>
      <div style={{ }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
