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
import { NotFoundPage } from '../pages/NotFoundPage';

const rootEl = document.getElementById('root');
const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <NotFoundPage /> },
  { path: '/AboutUs', element: <AboutUs />, errorElement: <NotFoundPage /> },
  {
    path: '/LlmAnaltics',
    element: <LlmAnalytics />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/Onboarding',
    element: <Onboarding />,
    errorElement: <NotFoundPage />,
  },
  { path: '/Pricing', element: <Pricing />, errorElement: <NotFoundPage /> },
  {
    path: '/Questions',
    element: <Questions />,
    errorElement: <NotFoundPage />,
  },
]);

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
