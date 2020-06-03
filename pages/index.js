import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
	padding: 20px;
`;

const Home = () => {
	return (
		<Container>
			<h1>Test Frontend Developer</h1>
      <p>Leonardo Casallas</p>
			<Link href='/article'>
				<a>Ver resultado</a>
			</Link>
		</Container>
	);
};

export default Home;