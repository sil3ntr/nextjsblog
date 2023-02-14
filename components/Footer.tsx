import { StyledHeader, NavStyle, Logo, HeaderStyledBox } from "../styles/Header.Styled"
import { ContainerStyle, ContainerLeft, ContainerRight } from "../styles/ContainerStyled"
import { FooterStyledBox } from "../styles/Footer.Styled"
import { Flex } from "../styles/Flex.Styled"


export default function Footer () {
    return (
        <>
            <Flex>
                <FooterStyledBox>
                    <p>I call Perth Western Australia home.</p>
                </FooterStyledBox>
            </Flex>
        </>
    )
}