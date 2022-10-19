import styled from "styled-components";
import ViewCard from "../../components/ViewCard";
import shoCardImage from "../../data.js";

const Home = () => {
  return (
    <>
      <Container>
        {shoCardImage.map((img) => (
          <ViewCard img={img.image} header={img.header} desc={img.desc} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  background-color: white;
`;

export default Home;
