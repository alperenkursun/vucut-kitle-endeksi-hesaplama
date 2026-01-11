import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const InfoContainer = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
`;

const Title = styled.h2`
  color: #2c3e50;
  text-align: center;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  display: inline-block;
  width: 100%;
`;

const Section = styled.section`
  margin-top: 25px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  overflow: hidden;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #3498db;
    color: white;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

const BackButton = styled.button`
  display: block;
  margin: 30px auto 0;
  padding: 12px 25px;
  background-color: #34495e;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #2c3e50;
    transform: scale(1.05);
  }
`;

function Info() {
  const navigate = useNavigate();
  return (
    <InfoContainer>
      <Title>Vücut Kitle Endeksi (BMI) Nedir?</Title>
      
      <Section>
        <p>
          <strong>Vücut Kitle Endeksi (BMI)</strong>, yetişkin bir insanın kilosunun boyuna göre normal olup olmadığını anlamak için kullanılan uluslararası bir ölçüttür. 
          Vücuttaki tahmini yağ miktarını gösteren bu hesaplama yöntemi, Dünya Sağlık Örgütü tarafından temel kriter olarak kabul edilir.
        </p>
      </Section>

      <Section>
        <h3>📏 Nasıl Hesaplanır?</h3>
        <p>
          Formül oldukça basittir: Kilonuzun, boyunuzun karesine bölünmesiyle elde edilir. 
          <br />
          <em>Formül: BMI = kg / (m * m)</em>
        </p>
      </Section>

      <Section>
        <h3>📊 BMI Tablosu</h3>
        <Table>
          <thead>
            <tr>
              <th>BMI Aralığı</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18.5 altı</td>
              <td>Zayıf</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Normal (İdeal)</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Fazla Kilolu</td>
            </tr>
            <tr>
              <td>30.0 ve üstü</td>
              <td>Obez</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <BackButton onClick={() => navigate('/')}>
        ← Hesaplama Ekranına Dön
      </BackButton>
    </InfoContainer>
  );
}

export default Info;