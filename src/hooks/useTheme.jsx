// Using custom hook to avoid duplicating logic in Header.jsx and SignIn.jsx

import { useEffect, useState } from 'react';

const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') !== 'light';
    });

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            document.documentElement.classList.add('light');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);

        // apply/remove .light class on <html> tag:
        document.documentElement.classList.toggle('light', !next);
        // persist choice to localStorage:
        localStorage.setItem('theme', next ? 'dark' : 'light');
    }

    return { isDark, toggleTheme }; 
}

export default useTheme;