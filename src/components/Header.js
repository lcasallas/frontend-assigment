import React from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import Menu from './Menu';
import Avatar from './Avatar';
import ButtonIcon from './ButtonIcon';

const Navbar = styled.div`
	width: 100%;
	height: 70px;
	max-width: 100%;
	padding: 0px 30px;
	box-sizing: border-box;
	background-color: #1a80c7;
	color: white;
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	box-shadow: 3px 0px 8px #333;

	& .info_container {
		display: flex;
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
			<div className='info_container'>
				<div className='item'>
					<img
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAAA7CAMAAACntiOaAAAArlBMVEUAAAD////////////////////////////////////////+/v7////////////////////////+/v7////////////////////////////////////////////////+/v7////////////////////////////////////+/v7+/v7////////////////////////+/v7///////////////////////////////+Pecy4AAAAOXRSTlMAkupP96QZCwdZTDz71J5UBNp0QPPfx+RfyjQv+e+/ZCsgFM+ql4iDeH5qOB3sR7QoJMO8rRGNbqZWEuzqAAAEPklEQVRo3u2Y2XqiQBBGyxVUNiEIAkoUWdy3qFPv/2LT3SCyxIkzky96wbmytUkfqui/+QIVFRUVFf9JW1tIh1FfhZdg341mnoMxITwXxe6E2z7mmMKzOPXc2tjAMjY8gfbmIg1HmOfNa6kbDxHf4aexJNHBPPWBv9BYvw7PUFpiDv0YmBYPV4ZPUDKHeEX8mMs7YDxVyaePUHPYumxWQHkFpTWiU1h0r02eqVSrkyLx+a8yTRz/WUmJgh18A3YYBt2cUhsyLDKPekhTk4O78Igd+G/iNWf3lQZYYEYC4Z5SHbvwDXQQsXZfyaMxWYxNsRU1Vk9Siqu0sczasXi4CKIMRdbfoyR/rWTHR7Ac1jHHElK4XkeegJ4ocRs1IsOUvRlF5rWs7U5nA3wn6pyAcOpGkWtnstpdTBpfK/Ug4YAonKX0RaWVCtXWSDgmjZuPkDLbA2PygQy/fW3Lm6nT/i8AgnjqOFmiIyJBf1gpHijx65yY2RUT0tT1+EAfuW4cFf2WRPSb7EKbfD8414aIW6A08IoMg8xnwhljHlEqR6WWqZJBbpsH0ow3qkRqYgLBGqIwBeBGONqwK8bdjJJDDWdIMHSkTFj9COt/VdrclFRsJgkpEqUe4gZidJQAAnT2kHBTilZ7dWpTAZmHdxrBEigj2kKN20t/8yzdlBo3pT7O4fqpS4q0zewcBUbk15JS3PItWYxL7gVHrPAiq+fjSpz4mdIUcZUqaWDcEpxv4o4jLSkrBUBQ6kRkMSdcaPkVFRHdB3Opzd57/THLALuoZKHDp0pLEG5FBRF7O6xDnnSLT5uYhQtZrnytNKY/+8M0wAXu75T2DyspwSNKO3m+xjwmfNK4SaZxejoFuGzjykqKQbLJVSnmYm6yCHD/kN62GRx1LKBvG1BSAg9VuO24Fh5vZ5UAUMfgjhLNAGeZP9rEZEZZaXosnbSzSN4Doazk4tsqrgo946w49gi8gT5AhIINjFVRaYmE0D5ZgSDRyx2W49OuWFJagSJilqafLFJUSvtVp9WzdJbeUlL+pYdvHICiY5MG6VQVZgUlUlHKCAnU6RLffTkqBQUOGGOMA9o8QT/8Cl1rek+pbdCpHo3kRhw3essfIq5tVpw+WfU4FhCPChDkWCBJpoQ+i1cJY8hcP6tUBx8JXtixFYB5pnlDSdVWJSXCSWoi8ehd4mNXNZAitYGhBGzsucDoCg6eIeHSR0I94AHSK+uNBeI5q6R/IGEAMdwAcwj9WdjlCkpEytJoSfbxn+Z7ptvIZIliNbrvaYCu2hMOUqyOq92GylKmo8ltRm19LSQPV+Tz1sA8xjJR+gH8ETLWbcii7BrhrO9kasVNfkrJ9ZDi7OATVhtV8pIYH5jCDynxGlJ6cJeptYi37g8pEbSt+GF91d70Rfd1mCHjA16Iw0v83zIH79GgOMFLoUoRDxUVFRUVFSV+Az1fGi/VU11lAAAAAElFTkSuQmCC'
						alt='DocRed logo'
					/>
				</div>
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
