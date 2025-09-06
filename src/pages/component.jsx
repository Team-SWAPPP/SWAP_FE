import styled from '@emotion/styled';
import swapLogo from '../assets/swap.png';

export const Header = () => {
  return (
    <Container>
      <Img src={swapLogo} className="Logo" alt="swapLogo" />
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
`;
const Img = styled.img`
  width: 239px;
  height: 70px;
  padding: 10px;
`;
