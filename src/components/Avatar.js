import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
	width: 30px;
	height: 30px;
	border: 2px solid white;
	border-radius: 50%;

	& .avatar {
		width: 30px;
		height: 30px;
		object-fit: cover;
		border-radius: 50%;
	}
`;

const Avatar = ({ srcAvatar }) => {
	return (
		<AvatarContainer>
			<img className='avatar' src={srcAvatar} alt='User Avatar' />
		</AvatarContainer>
	);
};

export default Avatar;
