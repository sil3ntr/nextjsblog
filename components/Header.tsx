import { StyledHeader, NavStyle, Logo, HeaderStyledBox } from "../styles/Header.Styled"
import { ContainerStyle, ContainerLeft, ContainerRight } from "../styles/ContainerStyled"
import { Flex } from "../styles/Flex.Styled"


export default function Header () {
    return (
        <>
            <StyledHeader>
                <Flex>
                    <HeaderStyledBox>
                        <ContainerStyle>
                                <NavStyle>
                                    <ContainerLeft>
                                    </ContainerLeft>
                                    <ContainerRight>
                                        <ul>
                                            <li>BLOG</li>
                                        </ul>
                                        <ul>
                                            <li>CV</li>
                                        </ul>
                                    </ContainerRight>
                                </NavStyle>
                        </ContainerStyle>
                    </HeaderStyledBox>
                </Flex>
            </StyledHeader>
        </>
    )
}