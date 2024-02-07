import React from 'react';
/* - React-bootstrap _______________________ */
import Container from 'react-bootstrap/Container';
/*__________________________________________ */

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-4 mt-5">
            <Container>
                <div className='text-center text-white p-3'>
                    © 2024 Copyright: &nbsp;
                    <a className='text-white' href='#'>
                        YNS-JNS
                    </a>
                </div>
            </Container>

        </footer>
    );
};

export default Footer;
