import React from 'react'
import styled from 'styled-components'

import Checkbox from '@material-ui/core/Checkbox'
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import { emailData } from '../../temp/EmailData'

import EmailItem from '../emailItem/EmailItem'

const EmailsView = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <Checkbox />
                
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </TopWrapper>

            <EmailsContainer>
                {
                    emailData.map(({starred, from, subject, message, received, read})=>(
                        <EmailItem
                            starred={starred}
                            from={from}
                            subject={subject}
                            message={message}
                            received={received}
                            read={read}
                        />
                        
                    ))
                }
            </EmailsContainer>

        </Wrapper>
    )
}

export default EmailsView

const Wrapper = styled.div``

const TopWrapper = styled.div`
    padding-left: 20px;
    height: 48px;
`

const EmailsContainer = styled.div`

`