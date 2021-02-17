import React from 'react'
import styled from 'styled-components'

import AddIcon from '@material-ui/icons/Add';

const Compose = () => {
    return (
        <Wrapper>
            <AddIcon fontSize='large'/>
            <p>Compose</p>
        </Wrapper>
    )
}

export default Compose

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 35% auto;
    width: auto;
    align-items: center;
    padding: 6px 32px 6px 8px;
    border-radius: 50px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
    cursor: pointer;
    color: #3c4043;
    font-weight: 500;
    font-size: 0.875rem;
    transition: box-shadow .08s linear,min-width .15s cubic-bezier(0.4,0.0,0.2,1);

    :hover {
        box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
        background-color: #fafafb;
    }
`
