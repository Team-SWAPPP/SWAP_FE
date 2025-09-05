import { useState } from 'react';
import styled from '@emotion/styled';
import { Header } from '../pages/component';

const Login = () => {
  return (
    <Div>
      <Header />
      <Box>
        <Hyemin>
          <LoginSection>
            <Title>로그인</Title>
            <Input name="아이디" placeholder="아이디를 입력하세요"></Input>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
            ></Input>
            <Button>로그인</Button>
          </LoginSection>
          <Tie>
            <Text>아직 회원이 아니신가요?</Text>
            <RegisetBtn>회원가입</RegisetBtn>
          </Tie>
        </Hyemin>
      </Box>
    </Div>
  );
};

export default Login;

const Div = styled.div`
  background-color: #dadada;
  height: 100vh;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 480px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 23.16px;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Input = styled.input`
  display: block;
  width: 455px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f1f3;
  border: none;
  border-radius: 11.58px;
`;

const Button = styled.button`
  color: white;
  background-color: #e90d1f;
  border-radius: 10px;
  border: 2px;
  width: 478.66px;
  height: 55.59px;
  font-size: 18px;
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Tie = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.h6`
  font-size: 13.9px;
`;

const RegisetBtn = styled.button`
  color: #e90d1f;
  border: none;
  background-color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
`;

const Hyemin = styled.div`
  margin-top: 70px;
`;
