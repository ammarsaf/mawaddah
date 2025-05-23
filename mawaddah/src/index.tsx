import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutUs } from '../pages/AboutUs';
import { Home } from '../pages/Home';
import { LlmAnalytics } from '../pages/LlmAnalytics';
import { Onboarding } from '../pages/Onboarding';
import { Pricing } from '../pages/Pricing';
import { QuestionCards } from '../pages/QuestionCards';
import { NotFoundPage } from '../pages/NotFoundPage';
import { NavBar } from '../components/NavBar';

const rootEl = document.getElementById('root');
const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFoundPage /> },
  { path: '/home', element: <Home />, errorElement: <NotFoundPage /> },
  {
    path: '/questions',
    element: <QuestionCards />,
    errorElement: <NotFoundPage />,
  },

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
