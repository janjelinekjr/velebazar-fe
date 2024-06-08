import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import RouteList from './RouteList';
import {store} from './store/store';
import {ThemeProvider} from '@emotion/react';
import {CssBaseline} from '@mui/material';
import {rbThemeMain} from "./rbThemeMain";

if (process.env.NODE_ENV === 'development') {
    // startWorker();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <ThemeProvider theme={rbThemeMain()}>
                    <CssBaseline />
                    <RouteList />
                </ThemeProvider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>
);
