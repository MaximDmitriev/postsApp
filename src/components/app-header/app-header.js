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

    const words = ["записей", "записи", "запись"];
    const excludes = [11, 12, 13, 14];
    let checkNum;
    let word;

    allPosts > 9 ? checkNum = allPosts % 10 : checkNum = allPosts; 

    if (checkNum === 0 || (checkNum > 4  && !excludes.includes(allPosts))) word = words[0];
    if (checkNum === 1) word = words[2];
    if (checkNum > 1 && checkNum < 5) word = words[1];

    return (
        <AppHeaderWrapper>
            <h1>Maxim Dmitriev</h1>
            <h2>{allPosts} {word}, из них понравилось {liked}</h2>
        </AppHeaderWrapper>
    )
}

export default AppHeader;