import { Route, Routes } from 'react-router-dom';
import {HomePage} from './Home/Home';
import {CompanyPage} from './Company/Company';
import {MediaPage} from './Media/Media';
import {ProductPage} from './Product/Product';
import {createContext} from 'react';
import {ALabContext,ALabContextContent} from './Context'
import { Updater, useImmer } from 'use-immer';
// import './App.scss';
import { useEffect } from 'react';

const useHorizontalScroll = (elementId: string) => {
    useEffect(() => {
        const element = document.getElementById(elementId);

        if (element) {
            const onWheel = (e: { preventDefault: () => void; deltaY: number; }) => {
                e.preventDefault();
                element.scrollLeft -= e.deltaY;
                console.log(element.scrollLeft);
            };

            element.addEventListener('wheel', onWheel, { passive: false });

            return () => {
                element.removeEventListener('wheel', onWheel);
            };
        }
    }, [elementId]);  // 当 elementId 变化时重新添加事件监听器
};

export interface ALabContextInterface{
  context:ALabContext;
  setContext:Updater<ALabContext>;
}

export const AppContext = createContext<ALabContextInterface>(undefined!)

function App() {
  const [context,setContext] = useImmer(ALabContextContent())
  useHorizontalScroll('myDiv');
  return (
    <AppContext.Provider value={{context,setContext}}>
      <div id="myDiv" style={{ 
        display: 'flex',
        flexDirection: 'row',
        background: "#282828",
        height: "100vh",
        overflow: "scroll",
        width: "100vw",
      }}>
        <HomePage />
        <CompanyPage />
        <MediaPage />
        <ProductPage />
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
