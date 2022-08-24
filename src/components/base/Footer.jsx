import React, { useState } from 'react'
import "./styles/Footer.css"

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { FiSettings } from "react-icons/fi"
import { Button} from '@chakra-ui/react'
import {AiOutlineHeart} from "react-icons/ai" 
import {MdNotificationsNone} from "react-icons/md" 
import {FiCalendar} from "react-icons/fi"


function Footer() {

  const [lang, setLang] = useState('English')


  return (
    <div className='footer_contaiser'>
      <Flex justify="space-between">
        <Wrap spacingX={10} align="center">
          <WrapItem>
          <Flex justifyContent="space-between">
                    <Button bgColor={"transparent"} color='red' leftIcon={<AiOutlineHeart />}>
                        Donate
                    </Button>
                    <Button bgColor={"transparent"} color='#0583f1' leftIcon={<MdNotificationsNone />}>
                        Join our waiting list
                    </Button>
                </Flex>
          </WrapItem>
          <Button bgColor={"transparent"} color='#0583f1' leftIcon={<FiCalendar />}>
                        Calendy
                    </Button>
     

        </Wrap>
        <Wrap spacingX={10} align="center">
          <WrapItem>
            <a href='/'>Terms & Privacy</a>
          </WrapItem>
          <WrapItem>
            <a href='/'>Contact</a>
          </WrapItem>
          <FiSettings />
          <Menu>
            <MenuButton>
              <div className="lang_btn">
                {lang}
              </div>
            </MenuButton>
            <MenuList onChange={(va) => setLang(va.target.value)}>
              <MenuItem value="fr">English</MenuItem>
              <MenuItem value={"us"}>fr</MenuItem>
            </MenuList>
          </Menu>
        </Wrap>
      </Flex>
    </div>

  )
}

export default Footer