import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Menu from './Menu';
import Avatar from './Avatar';
import ButtonIcon from './ButtonIcon';

const Navbar = styled.div`
	height: 70px;
	padding: 0px 30px;
	box-sizing: border-box;
	background-color: #1a80c7;
	color: white;
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	box-shadow: 3px 0px 8px #333;

	& .info_container {
		display: flex;
    flex-wrap: wrap;
		align-items: center;
	}

	& .item {
		display: inline;
		margin-right: 50px;
	}

	& .action-container {
		border-left: 1px solid white;
		height: 60%;
		display: grid;
		align-items: center;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
	}

	& .action-item {
		justify-self: center;
	}
`;

const Header = ({ children }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		window.alert('buscando...');
	};

	return (
		<Navbar>
      <div className='item'>
        <Logo />
      </div>
			<div className='info_container'>
				<div className='item'>
					<SearchBar onSubmit={handleSubmit} />
				</div>
				<div>
					<Menu text='Inicio' icon='home' />
				</div>
			</div>
			<div className='action-container'>
				<div className='action-item'>
					<ButtonIcon icon='bell' color='white' badge='104' />
				</div>
				<div className='action-item'>
					<Menu>
						<Avatar srcAvatar='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb' />
					</Menu>
				</div>
				<div className='action-item'>
					<ButtonIcon icon='settings' color='white' />
				</div>
			</div>
		</Navbar>
	);
};

export default Header;
