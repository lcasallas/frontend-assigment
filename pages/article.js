import React from 'react';

import Layout from '../src/components/Layout';
import Card from '../src/components/CardNews';

const Article = () => {
	return (
		<Layout>
			<h1>Contenido</h1>
			<Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
		</Layout>
	);
};

export default Article;