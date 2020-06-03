import React from 'react';
import Link from 'next/link';

const Home = () => {
	return (
		<div>		
			<h1>Test Frontend Developer</h1>
      <p>Leonardo Casallas</p>
			<Link href='/article'>
				<a>Resultado</a>
			</Link>
		</div>
	);
};

export default Home;