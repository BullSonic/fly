/** @format */

import * as React from "react";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState } from "react";
import { useEffect } from "react";

const App = (props: { appConfig: any; children?: any }) => {
    const { appConfig } = props;
    const { max_width, landing_page } = appConfig["_page"];
    const { locales, locales_default } = appConfig["_locale"];
    const [locale, setLocale] = useState(locales_default[1]);
    const messagePromise = locales[locales_default[1]].messages;
    const [messages, setMessages] = useState({});
    messagePromise.then((result: { default: React.SetStateAction<{}> }) =>
        setMessages(result.default)
    );
    const theme = appConfig["_theme"].current;
    useEffect(() => {
        // get locale from local storage
    }, []);

    return (
        <IntlProvider messages={messages} locale={locale} defaultLocale='en'>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <BrowserRouter>
                    <Grid
                        container
                        display={"flex"}
                        maxWidth={max_width}
                        textAlign='center'>
                        <Routes>
                            {appConfig["_routes"].map(
                                (
                                    r: {
                                        component: string;
                                        path: string | undefined;
                                    },
                                    index: number
                                ) => {
                                    const Comp = React.lazy(
                                        () => import(`../page/${r.component}`)
                                    );
                                    return (
                                        <Route
                                            key={index}
                                            path={r.path}
                                            element={
                                                <React.Suspense
                                                    fallback={
                                                        <div>Loading...</div>
                                                    }>
                                                    <Comp />
                                                    111
                                                </React.Suspense>
                                            }
                                        />
                                    );
                                }
                            )}
                        </Routes>
                    </Grid>
                </BrowserRouter>
            </ThemeProvider>
        </IntlProvider>
    );
};
export { App };
