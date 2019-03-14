import React from 'react';

import styled from 'styled-components';

const Text = styled.p`
  margin: 40px 0;
  text-align: center;
  color: #fff;
  font-size: 48px;
`;

const StyledSpan = styled.span`
  font-weight: bolder;
`;

const JumbotronText = () => {
  return (
    <Text>
      Connect <StyledSpan>end-users</StyledSpan> to{' '}
      <StyledSpan>farmers</StyledSpan> directly <br />
      with <StyledSpan>fresh</StyledSpan> & <StyledSpan>good</StyledSpan>{' '}
      quality crops
    </Text>
  );
};

export default JumbotronText;
