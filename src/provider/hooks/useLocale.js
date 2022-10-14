import { useState, useEffect } from 'react';

function useLocale(props) {
    const [locale, setLocale] = useState("zh-CN");

    useEffect(() => {
        // loading local setting
    }, [])

    return { locale, setLocale }
}

export { useLocale }