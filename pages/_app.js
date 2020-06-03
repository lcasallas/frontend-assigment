import App from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Component {...pageProps} />
				<GlobalStyle />
			</>
		);
	}
}