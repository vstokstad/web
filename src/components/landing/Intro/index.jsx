import React, { useContext } from 'react';
import { Header } from '../../theme/'
import { Container } from '../../common'
import dev from '../../../assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import { ThemeContext } from '../../../providers/ThemeProvider';

export const Intro = () => {
	const { theme } = useContext(ThemeContext);

	return (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details theme={theme}>
				<h1>Vilhelm Stokstad</h1>
				<h4>Game programmer</h4>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Villhelm Stokstad is a Game programmer" />
			</Thumbnail>
		</IntroWrapper>

	</Wrapper>
)}