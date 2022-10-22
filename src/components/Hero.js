import styled from "styled-components";
import StoreImage from "../images/butik.jpg";

const Hero = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ContainerBg>
          <Image src={StoreImage} alt="" />
        </ContainerBg>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 25rem;
  overflow: hidden;
  border-bottom: 2px solid var(--color-gray-400);
`;
const HeaderWrapper = styled.div`
  display: grid;
  place-items: center;
`;
const ContainerBg = styled.div`
  width: 100%;
`;
const Image = styled.img`
  opacity: 0.7;
  height: 100%;
`;

export default Hero;
