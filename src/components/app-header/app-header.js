import React from 'react';
import styled from 'styled-components';

const AppHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1{
    font-size: 26px;
  }
  h2{
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <AppHeaderWrapper>
            <h1>Maxim Dmitriev</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </AppHeaderWrapper>
    )
}

export default AppHeader;