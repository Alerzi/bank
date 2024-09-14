import react from "react"

const useRecaptchaV3 = (sitekey) => {
    const [recaptcha, setRecaptcha] = react.useState(false);

    react.useEffect(() => {
        if(window.grecaptcha) {
            setRecaptcha(true);
        }
        else {
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`;
            script.async = true;
            document.head.appendChild(script);
            script.onload = () => {setRecaptcha(true)}
        }
    }, [sitekey]);

    const executeRecaptcha = react.useCallback(async (action) => {
        if(recaptcha && window.grecaptcha) {
            return await window.grecaptcha.execute(sitekey, {action});
        }
    });

    return executeRecaptcha
}

export default useRecaptchaV3