import styled, { css } from 'styled-components';

// import backgroundImage from '../../../assets/img/anyName.png';
import { Text } from '../../../components/elements';

export const bgType = {
  grass: css`
    background-color: #5f875f;
  `,
  fire: css`
    background-color: #f28d30;
  `,
  water: css`
    background-color: #358ede;
  `,
  bug: css`
    background-color: #a4fc88;
  `,
  normal: css`
    background-color: #a7a9b0;
  `,
  poison: css`
    background-color: #754c6f;
  `,
  electric: css`
    background-color: #d6b347;
  `,
  ground: css`
    background-color: #c48568;
  `,
  fairy: css`
    background-color: #cc8ba5;
  `,
  flying: css`
    background-color: #526ba1;
  `,
  fighting: css`
    background-color: #c7365a;
  `,
  rock: css`
    background-color: #4c4a5c;
  `,
  ice: css`
    background-color: #78bdc4;
  `,
  psychic: css`
    background-color: #ed3e3e;
  `,
  dragon: css`
    background-color: #5063a3;
  `,
  ghost: css`
    background-color: #6c58a8;
  `,
  steel: css`
    background-color: #3187b0;
  `,
  default: css`
    background-color: #ffffff;
  `,
};

export const Wrapper = styled.div`
  border-radius: 10px;
  padding: 10px;
  height: 130px;
  ${(props) =>
    props.loading !== 'loading' &&
    css`
      ${'' /* background: url(${backgroundImage}); */}
    `}

  ${(props) => bgType[props.color || 'default']}
  cursor:pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: #000066;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 170px;
`;
export const NumberStyled = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;
