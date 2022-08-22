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


function Footer() {

  const [lang, setLang] = useState('français')


  return (
    <div className='footer_contaiser'>
      <Flex justify="space-between">
        <Wrap spacingX={10} align="center">
          <WrapItem>
            <a href='/'>Advertising</a>
          </WrapItem>
          <WrapItem>
            <a href='/'>Business</a>
          </WrapItem>
          <WrapItem>
            <a href='/'>About</a>
          </WrapItem>
        </Wrap>
        <Wrap spacingX={10} align="center">
          <WrapItem>
            <a href='/'>Terms</a>
          </WrapItem>
          <WrapItem>
            <a href='/'>Privacy</a>
          </WrapItem>
          <FiSettings />
          <Menu>
            <MenuButton>
              <div className="lang_btn">
                {lang}
              </div>
            </MenuButton>
            <MenuList onChange={(va) => setLang(va.target.value)}>
              <MenuItem value="fr">Français</MenuItem>
              <MenuItem value={"us"}>Englais</MenuItem>
            </MenuList>
          </Menu>
        </Wrap>
      </Flex>
    </div>

  )
}

export default Footer