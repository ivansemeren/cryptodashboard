import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, greenBoxShadows, redBoxShadow, greenBoxShadow} from "./Styles";

export const Tile = styled.div`
    ${subtleBoxShadow};
    ${lightBlueBackground};
    padding:10px;
`

export const SelectableTile = styled(Tile)`
    &:hover {
        cursor: pointer;
        ${greenBoxShadow};
    }
`