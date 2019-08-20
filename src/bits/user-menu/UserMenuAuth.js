import React, {useState} from 'react';
// import UserIcon from "./UserIcon";
import styled from '@emotion/styled';
import HoverMenu from "@bit/gstanto.treehouse_tech.hover-menu";
import PropTypes from 'prop-types';

const Container = styled.div`
    display: inline-block
    align-items: center;
    position: relative;
    cursor: pointer;
    .name {
        font-size: 12px;
        color: white;
    }
    .email {
        color: white;
        font-weight: 400;
        font-size: 10px;
    }
    .user-icon-container {
        margin-left: 4px;
        svg {
            margin-top: 6px;
            height: 20px;
        }
    }
`;

const UserMenuAuth = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <Container data-cy="profile-closed" onClick={() => setOpen(true)}>
            <div style={{display: 'flex'}}>
                <div style={{textAlign: 'center'}}>
                    <div className="name">{props.name || 'Doc Holiday'}</div>
                    <div className="email">{props.email || 'dholiday@mail.com'}</div>
                </div>
                <div className="user-icon-container">
                    {/*<UserIcon/>*/}
                    icon
                </div>
            </div>
            <HoverMenu open={open} close={(event) => {if (event) event.stopPropagation(); setOpen(false)}}>
                {props.children}
            </HoverMenu>
        </Container>
    )
};

UserMenuAuth.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string
};

export default UserMenuAuth;
