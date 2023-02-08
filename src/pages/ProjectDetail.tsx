import styled, { css } from 'styled-components';
import { BsArrowUp } from 'react-icons/bs';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsLink45Deg } from 'react-icons/bs';
import projectData from '../db/projectData';
import ProjectStory from '../components/ProjectStory';
import { Layout } from './Home';

const ProjectDetailLayout = styled(Layout)`
  top: 0;
  left: 0;
  display: flex;
  background-color: var(--color-bg);
  transition: all 0.5s;
  z-index: 9999;
`;
const ProjectDetailCol = styled.div<{ col: number }>`
  ${(props) =>
    (props.col === 1 &&
      css`
        width: 40%;
      `) ||
    (props.col === 2 &&
      css`
        width: 60%;
        border-left: 1px solid var(--color-grey-light);
      `)}
`;
const ProjectDetailHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: var(--container-padding);
`;
const ProjectDetailButton = styled.button`
  font-size: 1.25rem;
  svg {
    transform: rotate(-90deg);
  }
`;
const ProjectDetailHeading = styled.h3`
  color: transparent;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  -webkit-text-stroke: 1px var(--color-black);
`;
const ProjectDetailLinkBox = styled.div`
  width: 100%;
  text-align: right;
`;
const ProjectDetailLink = styled.a.attrs({ target: '_blank' })`
  display: inline-flex;
  align-items: center;
  padding: 0.5em 0;
  margin: 1em 0 0 1.4em;
  font-weight: 700;
`;

const ProjectDetailImgBox = styled.div<{ active: boolean }>`
  overflow: hidden;
  position: sticky;
  top: 25%;
  padding: var(--container-padding);
  img {
    visibility: hidden;
    width: 100%;
    transform: translateY(calc(100% + 80px));
    transition: all 0.5s;
    ${(props) =>
      props.active &&
      css`
        visibility: visible;
        transform: translateY(0);
      `}
  }
`;

export default function ProjectDetail() {
  const navigate = useNavigate();
  const paramsRef = useRef<string | undefined>(useParams().name?.replace(':', ''));
  const data = useRef(projectData.find((data) => data.name === paramsRef.current));
  const layoutRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number[]>([]);

  useEffect(() => {
    if (layoutRef.current?.classList.value.includes('enter-done')) {
      setActive([0]);
    }
  }, [layoutRef.current?.classList.value]);

  const backToPage = (e: React.MouseEvent) => {
    navigate(-1);
  };

  return (
    <ProjectDetailLayout as='article' ref={layoutRef}>
      <ProjectDetailCol col={1}>
        <ProjectDetailHeader>
          <nav>
            <ProjectDetailButton onClick={backToPage}>
              <BsArrowUp />
            </ProjectDetailButton>
          </nav>
          <ProjectDetailHeading>{data.current?.name}</ProjectDetailHeading>
          <ProjectDetailLinkBox>
            <ProjectDetailLink href={data.current?.github}>
              <BsLink45Deg /> readme
            </ProjectDetailLink>
            <ProjectDetailLink href={data.current?.website}>
              <BsLink45Deg /> website
            </ProjectDetailLink>
          </ProjectDetailLinkBox>
        </ProjectDetailHeader>
        <ProjectDetailImgBox active={active.length > 0}>
          <img src={data.current?.img}></img>
        </ProjectDetailImgBox>
      </ProjectDetailCol>
      <ProjectDetailCol col={2}>
        {data.current?.story.map((item) => (
          <ProjectStory key={item.id} item={item} active={active} setActive={setActive} />
        ))}
      </ProjectDetailCol>
    </ProjectDetailLayout>
  );
}
