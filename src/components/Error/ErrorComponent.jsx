import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

const ErrorContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Error = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

const ErrorComponent = ({ error }) => {
  return (
    <ErrorContainer>
      <Error>
        {error ? `Error fetching data: ${error}` : 'This movie cannot be found'}
      </Error>
    </ErrorContainer>
  );
};

export default ErrorComponent;
