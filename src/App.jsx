import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Calculate from './pages/Calculate';
import Info from './pages/Info';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const NavButton = styled(Link)`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin: 0 10px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f4f7f6;
`;

const StyledFooter = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
  border-top: 4px solid #3498db;
`;

const PortfolioLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    color: #2ecc71;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Nav>
          <NavButton to="/">BMI Hesapla</NavButton>
          <NavButton to="/info">BMI Nedir?</NavButton>
        </Nav>

        <MainContent>
          <Routes>
            <Route path="/" element={<Calculate />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </MainContent>

        <StyledFooter>
          <p style={{ margin: '0 0 10px 0' }}>
            © {new Date().getFullYear()} - <strong>Alperen Kurşun</strong> tarafından yapılmıştır.
          </p>
          <PortfolioLink 
            href="https://alperenkursun.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Portfolyomu Ziyaret Et →
          </PortfolioLink>
        </StyledFooter>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;