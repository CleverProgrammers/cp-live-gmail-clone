import React from 'react'

import styled from 'styled-components'
import { sidebarButtonItems } from '../../data/SidebarButtonItems'

import Compose from '../buttons/Compose'

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { bottomIcons } from '../../data/BottomIconsData'

const Sidebar = () => {
    return (
        <Wrapper>
            <TopSectionWrapper>
                <ComposeWrapper>
                    <Compose />
                </ComposeWrapper>

                <SideButtonsWrapper>
                    {
                        sidebarButtonItems.map(item =>(
                            <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                        ))
                    }
                </SideButtonsWrapper>
            </TopSectionWrapper>

            <BottomSectionWrapper>
                <SidebarSectionWrapper>
                    <Title>Meet</Title>
                    <p><VideocamIcon/> New Meeting</p>
                    <p><KeyboardIcon/> Join Meeting</p>
                </SidebarSectionWrapper>

                <SidebarSectionWrapper>
                    <Title>Hangouts</Title>
                    <p><AccountCircleIcon/> David Rakosi</p>
                </SidebarSectionWrapper>

                <BottomIconsWrapper>
                    {
                        bottomIcons.map(icon => (
                            <>
                                {icon}
                            </>
                        ))
                    }
                </BottomIconsWrapper>
            </BottomSectionWrapper>

        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const BottomSectionWrapper = styled.div`
    margin-bottom: 30px;
`

const TopSectionWrapper = styled.div``

const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`

const SideButtonsWrapper = styled.div``

const SidebarButtonItem = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 8px;

    :hover{
        background-color: #f5f7f7
    }
`

const SidebarSectionWrapper = styled.div`
    border-top: 1px solid lightgray;

    p {
        color: gray;
        display: grid;
        grid-template-columns: 14% auto;
        height: 30px;
        align-items: center;
        padding-left: 25px;
    }
`

const Title = styled.h4`
    padding-left: 25px;
    margin-bottom: 4px;
    margin-top: 8px;
`

const BottomIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: gray;
    border-top: 1px solid lightgray;
    margin-top: 60px;

    .MuiSvgIcon-root{
        padding: 2px;
    }

`

