import React from 'react';

import Layout from '../src/components/Layout';
import RelatedNews from '../src/containers/RelatedNews';
import Button from '../src/components/Button';
import Label from '../src/components/Label';
import TitleSection from '../src/components/TitleSection';

const Article = () => {
	return (
		<Layout>
			<h1>Contenido</h1>
			<RelatedNews />
			<Button text='Guardar' />
			<Label text='Medicina Interna' />
			<Label text='Pediatria' />
			<Label text='Obstetricia' />
			<TitleSection text='Noticias destacadas' />
		</Layout>
	);
};

export default Article;