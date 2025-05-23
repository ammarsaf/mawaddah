import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'tailwindcss';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutUs } from '../pages/AboutUs';
import { LlmAnalytics } from '../pages/LlmAnalytics';
import { Onboarding } from '../pages/Onboarding';
import { Pricing } from '../pages/Pricing';
import { Questions } from '../pages/Questions';

const rootEl = document.getElementById('root');
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/AboutUs', element: <AboutUs /> },
  { path: '/LlmAnaltics', element: <LlmAnalytics /> },
  { path: '/Onboarding', element: <Onboarding /> },
  { path: '/Pricing', element: <Pricing /> },
  { path: '/Questions', element: <Questions /> },
]);

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
