import React from 'react'
import Footer from '../../components/Footer';
import { Header } from '../../components/Header'
import HomeContent from '../../components/HomeContent';

export function Home() {
    return (
        <>
        <Header home={true} />
        <HomeContent />
        <Footer landing={false} />
        </>
    );
}