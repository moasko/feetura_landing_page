import {
    List,
    Flex,
    Spacer
} from '@chakra-ui/react'
import React, { useEffect, useState, useRef } from 'react'
import { BiMicrophone } from 'react-icons/bi'
import { IoIosSearch } from 'react-icons/io'
import { HiChevronRight } from "react-icons/hi"
import "./Style.css"
import TextTransition, { presets } from "react-text-transition";

const text1 = ["ici", "laba", "comment", "bala"]

function SuggestItem({ text }) {
    const [count, setCount] = useState(0)
    const animatedContainer = useRef(null)
    useEffect(() => {
        const intervalId = setInterval(() =>
            setCount(count => count + 1),
            2000
        );
        return () => clearTimeout(intervalId);
    }, [])

    return (
        <div ref={animatedContainer} className='suggest_item'>
            <Flex>
                  <p>salut la population</p>
                  <Spacer />
            <TextTransition style={{color:"#0084f4",marginLeft:"5px",fontWeight:"bold"}} springConfig={presets.wobbly}>
                {text[count % text.length]}
            </TextTransition>
            </Flex>
            <HiChevronRight size={20} />
        </div>
    )
}



function Searcher() {
    return (
        <div className='searcheContainer'>
            <div className='search_groupe'>
                <div className='sercher_left'>
                    <IoIosSearch size={30} />
                    <input className='search_input' type="text" placeholder='Search some thing ...' />
                </div>
                <BiMicrophone color='#0084f4' size={25} />
            </div>
            <div className='searchDorpdown'>
                <List>
                    <SuggestItem text={text1} />
                    <SuggestItem text={text1} />
                </List>
            </div>
        </div>
    )
}

export default Searcher
