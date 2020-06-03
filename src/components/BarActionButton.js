import React from 'react';
import styled from 'styled-components';

import ButtonIconInfo from '../components/ButtonIconInfo';
import ButtonIcon from './ButtonIcon';

const BarContainer = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid #1a80c7;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 8px 15px;
  box-sizing: border-box;
`;

const BarActionButton = ({destacarAction, comentarAction, compartirAction}) => {
  return (
    <BarContainer>
      <ButtonIconInfo icon='star' color='#B8D6EC' text='Destacar' size='20' onClick={destacarAction} />
      <ButtonIconInfo icon='message-square' color='#B8D6EC' text='Comentar' size='20' onClick={comentarAction} />
      <ButtonIconInfo icon='arrow-up-right' color='#BDBCBC' text='Compartir' size='20' onClick={compartirAction} />
    </BarContainer>
  );
}

export default BarActionButton;