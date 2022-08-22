import React from 'react'
import "./styles/Header.css"

import { Avatar,WrapItem, Wrap } from '@chakra-ui/react'
import { IoIosNotifications } from "react-icons/io"
import { BsFillGrid3X3GapFill } from "react-icons/bs"

function Header() {
    return (
        <div className="header_container">
            <Wrap spacing='30px' justify="flex-end" align='center'>
                <WrapItem>
                    <BsFillGrid3X3GapFill color='#78798B' />
                </WrapItem>
                <WrapItem>
                    <IoIosNotifications color='#78798B' size={30} />
                </WrapItem>
                <WrapItem>
                    <Avatar size="sm" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
            </Wrap>

        </div>
    )
}

export default Header
