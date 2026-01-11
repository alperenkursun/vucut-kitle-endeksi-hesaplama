import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3498db;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ResultCard = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  border-left: 6px solid #3498db;
`;

const DietList = styled.div`
  background-color: #fffbe6;
  padding: 15px;
  border: 1px dashed #ffe58f;
  border-radius: 8px;
  margin-top: 15px;
  color: #856404;
  line-height: 1.5;
`;

function Calculate() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  
  const [bmiResult, setBmiResult] = useState(() => {
    return localStorage.getItem('lastBmi') || null;
  });

  const [category, setCategory] = useState(() => {
    return localStorage.getItem('lastCategory') || '';
  });

  useEffect(() => {
    if (bmiResult && category) {
      localStorage.setItem('lastBmi', bmiResult);
      localStorage.setItem('lastCategory', category);
    }
  }, [bmiResult, category]);

  const getDietList = () => {
    switch (category) {
      case 'Zayıf':
        return "🥗 Bol proteinli, sağlıklı yağlar (ceviz, avokado) ve kompleks karbonhidrat içeren yüksek kalorili bir program uygulanmalı. Ara öğünlerde kuruyemiş tercih edebilirsiniz.";
      case 'Normal':
        return "✅ Mevcut formu korumak için dengeli protein, sebze ve meyve odaklı beslenmeye devam edilmeli. Günlük en az 2-3 litre su tüketimi önemli.";
      case 'Fazla Kilolu':
        return "🚶‍♂️ Porsiyon kontrolü yapılmalı, şekerli ve unlu gıdalardan kaçınılmalı. Haftada en az 150 dakika orta tempolu yürüyüş eklenmeli.";
      case 'Obez':
        return "⚠️ Mutlaka bir diyetisyen eşliğinde düşük kalorili, yüksek lifli bir beslenme planı uygulanmalı. Rafine şeker ve işlenmiş gıdalar hayatınızdan çıkarılmalı.";
      default:
        return "";
    }
  };

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      
      let cat = '';
      if (bmi < 18.5) cat = 'Zayıf';
      else if (bmi >= 18.5 && bmi < 25) cat = 'Normal';
      else if (bmi >= 25 && bmi < 30) cat = 'Fazla Kilolu';
      else cat = 'Obez';
      
      setBmiResult(bmi);
      setCategory(cat);
    } else {
      alert("Lütfen geçerli boy ve kilo değerleri giriniz!");
    }
  };

  return (
    <Container>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '25px' }}>
        BMI Hesaplayıcı
      </h2>
      
      <InputGroup>
        <Label>Kilo (kg)</Label>
        <Input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          placeholder="Örn: 75"
        />
      </InputGroup>

      <InputGroup>
        <Label>Boy (cm)</Label>
        <Input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
          placeholder="Örn: 180"
        />
      </InputGroup>

      <StyledButton onClick={calculateBMI}>Hesapla ve Diyet Gör</StyledButton>

      {bmiResult && (
        <ResultCard>
          <p style={{ margin: 0, fontSize: '18px' }}>BMI Skorunuz:</p>
          <h1 style={{ margin: '10px 0', color: '#3498db' }}>{bmiResult}</h1>
          <p>Durumunuz: <strong style={{ color: '#e67e22' }}>{category}</strong></p>
          
          <DietList>
            <strong>💡 Sizin İçin Beslenme Önerisi:</strong>
            <p>{getDietList()}</p>
          </DietList>
        </ResultCard>
      )}
    </Container>
  );
}

export default Calculate;