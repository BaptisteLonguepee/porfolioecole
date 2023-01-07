import './Footer.css';

const currentYear = new Date().getFullYear;

function Footer() {
    return (
        <footer>
            &copy; {currentYear} Baptiste Longuepee
        </footer>
    );
}

export default Footer;