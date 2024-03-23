import { FC } from 'react'
import { Link } from 'react-router-dom'
import { styled, Typography } from '@mui/material'

interface NavItemProps {
  to: string
  text: string
}

const StyledLink = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const NavItem = ({ to, text }: NavItemProps) => (
  <StyledLink to={to}>
    <Typography variant="paragraph">{text}</Typography>
  </StyledLink>
)

export const HeaderComponent: FC = () => (
  <nav>
    <NavItem to="/" text="Home" />
    <NavItem to="/about" text="About" />
    <NavItem to="/contact" text="Contact" />
  </nav>
)
