import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    position: absolute;

    bottom: 0;
    padding: 20px 0 23px 38px;

    @media screen and (max-height: 920px) {
        position: unset;
    }

    span {
        font-size: 14px;
        color: $color2;
    }
`;
