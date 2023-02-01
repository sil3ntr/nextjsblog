import { StyledHeader, NavStyle, Logo } from "../styles/Header.Styled"
import {Flex} from '../styles/Flex.Styled'

export default function Header () {
    return (
        <>
            <StyledHeader>
                    <NavStyle>
                    <Flex>
                        <Logo src='./images/next.svg' alt='Linette Devigan Logo'/>
                        <ul>
                            <li>BLOG</li>
                        </ul>
                        <ul>
                            <li>CV</li>
                        </ul>
                    </Flex>
                    </NavStyle> 
            </StyledHeader>
        </>
    )
}