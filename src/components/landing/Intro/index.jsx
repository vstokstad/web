import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Vilhelm Stokstad</h1>
				<h4>Game developer and programmer.</h4>
				<Button as={AnchorLink} href="#contact">
					Contact
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Villhelm Stokstad is a Game Developer and programmer " />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
