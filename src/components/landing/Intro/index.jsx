import React from 'react'
import { Header } from '../../theme/'
import { Container } from '../../common'
import dev from '../../../assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Vilhelm Stokstad</h1>
				<h4>Game programmer</h4>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Villhelm Stokstad is a Game programmer" />
			</Thumbnail>
		</IntroWrapper>

	</Wrapper>
)