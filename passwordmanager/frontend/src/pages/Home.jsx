import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';  
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../components/List';
import Footer from '../components/Footer';
export default function Home() {
    return (
        <>
        <div>
            <NavigationBar />
            <List />
            <Footer />
        </div>
        </>
    );
}