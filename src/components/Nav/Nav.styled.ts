import styled from 'styled-components';

import { Button } from '../../theme/styles/styled-component';

export const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px 40px;

    a {
        text-decoration: unset;
        margin-left: 30px;
        color: #98a9bc;
        font-family: "Roboto", sans-serif;
        font-weight: 200;
        font-size: 18px;

        &:hover {
            color: #4d7cfe;
        }

        &.active {
            color: #4d7cfe;
            font-weight: 700;
        }
    }
`;

export const LogoutButton = styled(Button)`
    background-color: #d8d8d8;
    margin-left: 50px;

    &:hover {
        background-color: #fe4d97;
    }
`;
