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
import { Button} from '@chakra-ui/react'

const text1 = [
    {
        prefix: "",
        surfix: "through thousands of information",
        change: ["Search", " Find", "Ask"]
    },
    {
        prefix: "",
        surfix: "something people want.",
        change: ["Create", "Design", "Produce"]
    },
    {
        prefix: "Be",
        surfix: "people seek",
        change: ["the inspiration", "The Influencer"]
    }
]

const TEXT_CHANGE_DELAY = 1000 * 2;




function SuggestItem({ text }) {
    const [count, setCount] = useState(0)
    const animatedContainer = useRef(null)

    useEffect(() => {
        const intervalId = setInterval(() =>
            setCount(count => count + 1),
            TEXT_CHANGE_DELAY
        );
        return () => clearTimeout(intervalId);
    }, [])

    return (
        <div ref={animatedContainer} className='suggest_item'>
            <Flex>
                <p>{text.prefix ? text.prefix : ""}</p>
                <Spacer />
                <TextTransition inline={true} style={{ color: "#0084f4", marginLeft: "5px", marginRight: "5px", fontWeight: "bold" }} springConfig={presets.wobbly}>
                    <Button color='#0583f1' size='xs'>{text.change[count % text.change.length]}</Button>
                </TextTransition>
                <p>{text.surfix ? text.surfix : ""}</p>
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
                    <input value={"Search, Create, Inspire, Share"} className='search_input' type="text" placeholder='Search some thing ...' />
                </div>
                <BiMicrophone color='#0084f4' size={25} />
            </div>
            <div className="gtt">
                <div className='searchDorpdown'>
                    <List>
                        {text1.map((e, i) => {
                            return <SuggestItem key={i} text={e} />
                        })}
                    </List>
                </div>

            </div>


        </div>
    )
}

export default Searcher
