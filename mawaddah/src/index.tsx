import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
import { AboutUs } from '../pages/AboutUs';
import { Home } from '../pages/Home';
import { LlmAnalytics } from '../pages/LlmAnalytics';
import { Onboarding } from '../pages/Onboarding';
import { Layout } from '../components/Layout';
import { Pricing } from '../pages/Pricing';
import { QuestionCards } from '../pages/QuestionCards';
import { NotFoundPage } from '../pages/NotFoundPage';

const rootEl = document.getElementById('root');
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'questions', element: <QuestionCards /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'llmAnalytics', element: <LlmAnalytics /> },
      { path: 'onboarding', element: <Onboarding /> },
      { path: 'pricing', element: <Pricing /> },
    ],
  },
]);

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      ,
    </>,
  );
}
