import styled from 'styled-components';

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes circle-loading {
    to {
      transform: rotateZ(360deg);
    }
  }
`;

const Circle = styled.span`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #fff;
  animation: circle-loading 1200ms ease infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Circle />
    </LoadingContainer>
  );
};

export default Loading;
