import { StyledHeader, NavStyle, Logo } from "../styles/Header.Styled"
import { ContainerStyle, ContainerLeft, ContainerRight } from "../styles/ContainerStyled"
import Link from "next/link"
import {Flex, FlexCol} from '../styles/Flex.Styled'

export default function Header () {
    return (
        <>
            <StyledHeader>
                    <ContainerStyle>
                            <NavStyle>
                                <ContainerLeft>
                                    <Logo> 
                                        <img src='./images/next.svg' alt='Linette Devigan Logo'/> 
                                    </Logo>
                                </ContainerLeft>
                                <ContainerRight>
                                    <ul>
                                        <li><Link href={`/blogs/`}>BLOG</Link></li>
                                    </ul>
                                    <ul>
                                    <li><Link href={`/cv/`}>CV</Link></li>
                                    </ul>
                                </ContainerRight>
                            </NavStyle>
                    </ContainerStyle>
            </StyledHeader>
        </>
    )
}