import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 50px;
  font-family: 'Segoe UI', sans-serif;
  border-top: 3px solid #3498db;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const PortfolioLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  margin-left: 5px;
  transition: all 0.3s ease;

  &:hover {
    color: #2ecc71;
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <CopyrightText>
        © {new Date().getFullYear()} - <strong>Alperen Kurşun</strong> tarafından yapılmıştır.
      </CopyrightText>
      <PortfolioLink 
        href="https://alperenkursun.netlify.app/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Portfolyomu Ziyaret Et →
      </PortfolioLink>
    </FooterContainer>
  );
}

export default Footer;