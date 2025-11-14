import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ company = 'SecretVault' }) => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-3">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
                        <small>&copy; {year} {company}. All rights reserved.</small>
                    </Col>

                    <Col md={6} className="text-center text-md-end">
                        <a href="/terms" className="text-light text-decoration-none me-3">Terms</a>
                        <a href="/privacy" className="text-light text-decoration-none me-3">Privacy</a>
                        <a href="mailto:support@secretvault.local" className="text-light text-decoration-none">Contact</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;