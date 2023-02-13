import React from 'react'
import {MdDarkMode,MdOutlineDarkMode} from 'react-icons/md'
export const Theme = () => {
    
        const [theme, setTheme] = React.useState('light');
        
        const toggleTheme = () => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        };

        // initially set the theme and "listen" for changes to apply them to the HTML tag
        React.useEffect(() => {
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

