import styled from "styled-components";

const ViewCard = ({ img, header, desc }) => {
  return (
    <CardContainer>
      <CardSectionImg>
        <Image src={img} alt="" />
        <CardInfo>
          <h1>{header}</h1>
          <p>{desc}</p>
        </CardInfo>
      </CardSectionImg>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: grid;
  max-width: 50%;
  justify-content: center;
  align-items: center;
`;

const CardSectionImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--color-gray-500);
  width: 100%;
  margin: 1rem 1rem auto;
  border-radius: 10px;

  > h1 {
    margin-top: 0.6rem;
  }
  > p {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const CardInfo = styled.div`
  margin-left: 0.7rem;
  align-self: center;
  justify-self: center;

  > h1 {
    margin-bottom: 1rem;
  }
`;

export default ViewCard;
