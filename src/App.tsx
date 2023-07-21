import React, { useState } from 'react';

import { StickyHeader } from './components/stickyHeader/StickyHeader';
import { Header } from './components/header/Header';
import Intro from './components/intro/Intro';
import Features from './components/features/Features';
import Team from './components/team/Team';
import Setup from './components/setup/Setup';
import Promo from './components/promo/Promo';
import Security from './components/security/Security';
import Reviews from './components/reviews/Reviews';
import Outro from './components/outro/Outro';
import Footer from './components/footer/Footer';

import styles from './styles/Home.module.scss';
import './styles/global.scss';
import Layout from './components/layout/Layout';

function App() {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <Layout>
      <main className={styles.main}>
        {!isSticky ? <StickyHeader /> : <Header />}
        <Intro changeHeader={(v:boolean)=>setIsSticky(v)}/>
        <Features />
        <Team />
        <Setup />
        <Promo />
        <Security />
        <Reviews />
        <Outro />
        <Footer />
      </main>
    </Layout>
  );
}

export default App;
