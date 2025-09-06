import styled from '@emotion/styled';
import { Header } from '../pages/component';

const Regiser = () => {
  return (
    <Div>
      <Header />
      <Box>
        <Content>
          <RegisterSection>
            <Title>회원가입</Title>
            <Input name="email" placeholder="학교 이메일을 작성하세요"></Input>
            <Input name="아이디" placeholder="아이디를 입력하세요"></Input>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
            ></Input>
            <Button>로그인</Button>
          </RegisterSection>
          <LoginSection>
            <LoginBtn>로그인 화면으로 돌아가기</LoginBtn>
          </LoginSection>
        </Content>
      </Box>
    </Div>
  );
};

export default Regiser;

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

const RegisterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const LoginSection = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBtn = styled.button`
  color: #6b7280;
  border: none;
  background-color: #ffffff;
  margin-top: 30px;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 28px;
`;
