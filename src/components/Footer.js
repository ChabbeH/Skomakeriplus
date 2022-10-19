import Logo from "../images/logga.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <article>
          <Image src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </p>
          <FooterSocials>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </FooterSocials>
        </article>
        {/* <article>
          <h4> Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/about">Gallery</Link>
          <Link to="/about">Contact</Link>
        </article>
        <article>
          <h4> Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/about">Gallery</Link>
          <Link to="/about">Contact</Link>
        </article>
        <article>
          <h4> Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/about">Gallery</Link>
          <Link to="/about">Contact</Link>
        </article> */}
      </FooterWrapper>
      <FooterCopyRights>
        <small>2022 Rimon &copy; All Rights Reserved</small>
      </FooterCopyRights>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background: white;
  padding-top: 10rem;
  font-size: 0, 9rem;
  color: var(--color-gray-200);
  width: var(--container-width-lg);
  max-width: 100%;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
  }

  > article p {
    margin-top: 0.5rem;
    padding-left: 1rem;
    color: var(--color-gray-500);
  }

  > article h4 {
    margin-bottom: 0.6rem;
    font-size: 1rem;
  }
`;
const Image = styled.img`
  width: 50%;
`;
const FooterSocials = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  > a {
    background: var(--color-gray-200);
    padding: 0.7rem;
    border: 1px solid transparent;
    border-radius: 0.6rem;
    transition: var(--transition);
  }

  > a svg {
    color: var(--color-gray-600);
  }

  > a:hover {
    border-color: red;
    background-color: red;
  }
`;
const FooterCopyRights = styled.div`
  color: var(--color-gray-500);
  text-align: center;
  padding: 1.5rem 0;
  border-top: 2px solid #000000;
  margin-top: 5rem;
`;

export default Footer;
