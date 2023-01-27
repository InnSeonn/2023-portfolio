import styled, { keyframes, css } from 'styled-components';
import { PageType } from './Pagination';
import { useRef } from 'react';

const ani = (content: string) => keyframes`
  ${content}
`;
const ProjectImgBox = styled.div`
  width: 100%;
  height: 440px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    -webkit-user-drag: none;
  }
`;
const ProjectTextBox = styled.div`
  margin-top: 0.5em;
`;
const ProjectNameParagraph = styled.p`
  padding: 0.5em 0 0.2em;
  margin-bottom: 0.5em;
  border-bottom: 1px solid var(--color-grey-light);
  font-size: 1.25rem;
  font-weight: 700;
`;
const ProjectDescParagraph = styled.p`
  height: 2em;
  color: var(--color-grey);
  clip-path: inset(0 100% 0 0);
  transition: all 0.5s;
`;
const ProjectButton = styled.button`
  visibility: hidden;
  position: absolute;
  right: 3%;
  bottom: 14%;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: var(--color-black);
  box-shadow: 0px 7px 8px 0px #44444440;
  opacity: 0;
  transition: all 0.5s;
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
    content: '';
  }
  &::before {
    width: 23px;
    height: 2px;
  }
  &::after {
    width: 2px;
    height: 23px;
  }
  &:hover {
    transform: scale(1.1);
    &::before,
    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
`;
const ProjectItem = styled.li<{ active: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: 20%;
  max-width: 700px;
  margin-right: 40px;
  transition: width 0.5s;
  ${(props) =>
    props.active &&
    css`
      width: 100%;
      ${ProjectDescParagraph} {
        clip-path: inset(0 0 0 0);
      }
      ${ProjectButton} {
        animation: ${ani(`to{visibility: visible; opacity: 1}`)} 0.3s 0.3s forwards;
      }
    `}
`;

export type ProjectType = {
  id: number;
  name: string;
  text: string;
};
type Props = PageType & {
  item: ProjectType;
};

export default function Project({ item, page, setPage }: Props) {
  const { id, name, text } = item;

  const handleItemClick = (e: React.MouseEvent) => {
    setPage(id);
  };

  return (
    <ProjectItem active={id === page ? true : false} onClick={handleItemClick}>
      <ProjectImgBox>
        <img src={`${require(`../images/project${id}.png`)}`} alt='' />
      </ProjectImgBox>
      <ProjectTextBox>
        <ProjectNameParagraph>{name}</ProjectNameParagraph>
        <ProjectDescParagraph>{text}</ProjectDescParagraph>
      </ProjectTextBox>
      <ProjectButton>자세히보기</ProjectButton>
    </ProjectItem>
  );
}
