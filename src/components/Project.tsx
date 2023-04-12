import styled, { css } from 'styled-components';
import { PageType } from './Pagination';
import { ani } from './GlobalStyle';
import { useNavigate } from 'react-router-dom';
import { ProjectType } from '../db/projectData';
import React, { useMemo, useLayoutEffect } from 'react';

const ProjectImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 440px;
  @media screen and (max-width: 992px) {
    height: 333px;
  }
  @media screen and (max-width: 768px) {
    height: 55.65vw;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    -webkit-user-drag: none;
    @media screen and (max-width: 768px) {
      height: auto;
    }
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
  transition: font-size 0.5s;
`;
const ProjectDescParagraph = styled.p`
  visibility: hidden;
  height: 2em;
  color: var(--color-grey);
  clip-path: inset(0 100% 0 0);
  @media screen and (max-width: 768px) {
    visibility: visible;
    clip-path: inset(0 0 0 0);
  }
`;
const ProjectButton = styled.button`
  visibility: hidden;
  position: absolute;
  right: 3%;
  bottom: 0;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: var(--color-black);
  box-shadow: 0px 7px 8px 0px #44444440;
  color: var(--color-black);
  opacity: 0;
  transform: translateY(30%);
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
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(30%) scale(1.1);
      &::before,
      &::after {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }
  @media screen and (max-width: 768px) {
    visibility: visible;
    opacity: 1;
  }
  @media screen and (max-width: 576px) {
    transform: translateY(30%) scale(0.9);
    &:hover {
      transform: translateY(30%) scale(1);
    }
  }
`;
const ProjectItem = styled.li<{ active: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: 15%;
  max-width: 900px;
  &:not(:last-child) {
    margin-right: 40px;
  }
  transition: width 0.5s;
  ${(props) =>
    props.active &&
    css`
      width: 100%;
      ${ProjectDescParagraph} {
        visibility: visible;
        clip-path: inset(0 0 0 0);
        transition: clip-path 0.5s 0.3s;
      }
      ${ProjectButton} {
        animation: ${ani(`to{visibility: visible; opacity: 1}`)} 0.3s 0.3s forwards;
      }
    `}
  @media screen and (max-width: 1280px) {
    max-width: 700px;
  }
  @media screen and (max-width: 992px) {
    max-width: 530px;
  }
  @media screen and (max-width: 768px) {
    max-width: 700px;
    width: 100%;
    transition: none;
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: calc(var(--container-padding) * 2);
    }
  }
`;

type Props = PageType & {
  item: ProjectType;
};

function Project({ item, page, setPage }: Props) {
  const { id, name, text } = item;
  const navigate = useNavigate();
  const images = useMemo(() => [require(`../images/${name}_700.png`), require(`../images/${name}_900.png`)], [id]);

  const handleItemClick = (e: React.MouseEvent) => {
    setPage(id);
  };

  const goToDetailPage = (e: React.MouseEvent) => {
    navigate(`./detail/${name}`);
  };

  return (
    <ProjectItem active={id === page ? true : false} onClick={handleItemClick}>
      <ProjectImgBox>
        <picture>
          <source srcSet={images[0]} media='(max-width: 1280px)'></source>
          <img src={images[1]} alt='' />
        </picture>
        <ProjectButton onClick={goToDetailPage}>자세히보기</ProjectButton>
      </ProjectImgBox>
      <ProjectTextBox>
        <ProjectNameParagraph>{name}</ProjectNameParagraph>
        <ProjectDescParagraph>{text}</ProjectDescParagraph>
      </ProjectTextBox>
    </ProjectItem>
  );
}

export default React.memo(Project);
