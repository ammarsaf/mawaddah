import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'tailwindcss';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutUs } from '../pages/AboutUs';
import { Home } from '../pages/Home';
import { LlmAnalytics } from '../pages/LlmAnalytics';
import { Onboarding } from '../pages/Onboarding';
import { Pricing } from '../pages/Pricing';
import { Questions } from '../pages/Questions';
import { NotFoundPage } from '../pages/NotFoundPage';
import { NavBar } from '../components/NavBar';

const rootEl = document.getElementById('root');
const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <NotFoundPage /> },
  { path: '/home', element: <Home />, errorElement: <NotFoundPage /> },

  { path: '/aboutus', element: <AboutUs />, errorElement: <NotFoundPage /> },
  {
    path: '/llmAnalytics',
    element: <LlmAnalytics />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
    errorElement: <NotFoundPage />,
  },
  { path: '/pricing', element: <Pricing />, errorElement: <NotFoundPage /> },
  {
    path: '/questions',
    element: <Questions />,
    errorElement: <NotFoundPage />,
  },
]);

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <>
      <React.StrictMode>
        <NavBar />
        <RouterProvider router={router} />
      </React.StrictMode>
      ,
    </>,
  );
}
