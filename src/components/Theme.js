import { useEffect } from 'react';
import { useState } from 'react';
import {MdDarkMode,MdOutlineDarkMode} from 'react-icons/md'
export const Theme = () => {
    
        const [theme, setTheme] = useState('light');
        
        const toggleTheme = () => {
          setTheme(theme === 'black' ? 'light' : 'black');
        };
        
       useEffect(() => {
          document.querySelector('html').setAttribute('data-theme', theme);
        }, [theme]);
        
  return (
    <>
     <label className="swap swap-rotate">
      <input type="checkbox"  onClick={toggleTheme} theme={theme}  />
      <div className="swap-on"><MdDarkMode /></div>
      <div className="swap-off"><MdOutlineDarkMode /></div>
    </label>
    </>
  )
}
