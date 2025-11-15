import type { FC } from 'react';
import './App.css';
import './i18n';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Button } from "./Components/Button";
import { Navbar }  from "./Components/Navbar";
import { Input } from "./Components/Input";
import { Textarea } from "./Components/Textarea";
import HomePage from './Pages/Home/home';
import ComponentsPage from './Pages/Components/Components';
import DocsPage from './Pages/Docs/Docs';

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
];

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <BrowserRouter>
      <Navbar 
        className='Navbar'
        title="Berats Navbar"
        links={navigationLinks}
        variant='dark'
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
