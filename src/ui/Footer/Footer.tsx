// Footer.tsx
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <form action="https://formsubmit.co/galeriasouvlaki@gmail.com" method="POST">
                <div className="footer-chocolate">
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Don't worry! We only send emails once in a blue moon.</p>
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="text" placeholder="Email address" name="mail" required />
                    <input type="submit" value="Subscribe" />
                </div>
            </form>

            <div className="footer-chocolate">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zeynep.dellal@gmail.com">Reach out via email!</a>
                <p>&copy; 2023 Galleria Souvlaki. All Rights Reserved.</p>
            <p>&#9829;</p>
            </div>
        </footer>
    );
}

export default Footer;
