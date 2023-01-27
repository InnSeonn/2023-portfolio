import styled, { css } from 'styled-components';
import { Dispatch, SetStateAction } from 'react';

const PaginationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0.5rem;
`;
const PaginationButton = styled.button<{ active: boolean }>`
  color: transparent;
  font-size: 3rem;
  font-weight: 900;
  -webkit-text-stroke: 1px var(--color-black);
  opacity: 0.5;
  transition: all 0.5s;
  ${(props) =>
    props.active &&
    css`
      color: var(--color-black);
      -webkit-text-stroke: 1px transparent;
      opacity: 1;
    `}
  &:hover {
    opacity: 1;
  }
`;

export type PageType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};
type Props = PageType & {
  id: number;
};

export default function Pagination({ id, page, setPage }: Props) {
  const handlePageClick = (e: React.MouseEvent) => {
    setPage(id);
  };

  return (
    <PaginationItem>
      <PaginationButton active={id === page ? true : false} onClick={handlePageClick}>
        {id + 1}
      </PaginationButton>
    </PaginationItem>
  );
}
