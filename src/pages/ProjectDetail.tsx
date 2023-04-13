import styled, { css } from 'styled-components';
import { BsArrowUp } from 'react-icons/bs';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsLink45Deg } from 'react-icons/bs';
import projectData from '../db/projectData';
import ProjectStory from '../components/ProjectStory';

const ProjectDetailLayout = styled.article`
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: var(--color-bg);
  transition: all 0.5s;
  z-index: 9999;
  &.out {
    transition: none;
    transform: translateY(calc(var(--vh, 1vh) * 100));
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ProjectDetailCol = styled.div<{ col: number }>`
  ${(props) =>
    (props.col === 1 &&
      css`
        position: sticky;
        top: 0;
        width: 50%;
        @media screen and (max-width: 1400px) {
          width: 45%;
        }
      `) ||
    (props.col === 2 &&
      css`
        display: flex;
        flex-direction: column;
        width: 50%;
        @media screen and (max-width: 1400px) {
          width: 55%;
        }
      `)}
  @media screen and (max-width: 1200px) {
    position: static;
    width: 100%;
  }
`;
const ProjectDetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: var(--container-padding);
`;
const ProjectDetailButton = styled.button`
  color: var(--color-black);
  font-size: 1.25rem;
  svg {
    transform: rotate(-90deg);
  }
`;
const ProjectDetailHeading = styled.h3`
  color: transparent;
  font-size: 3rem;
  font-weight: 900;
  text-align: right;
  -webkit-text-stroke: 1px var(--color-black);
`;
const ProjectDetailLinkBox = styled.div`
  width: 100%;
  text-align: right;
`;
const ProjectDetailLink = styled.a.attrs({ target: '_blank' })`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.2em 0;
  margin: 2em 0 0 2em;
  font-weight: 700;
  font-size: 1.125rem;
  &::after {
    position: absolute;
    inset: auto auto -2px 0;
    width: 0;
    height: 2px;
    background-color: var(--color-black);
    transition: all 0.5s;
    content: '';
  }
  svg {
    transition: all 0.5s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
    svg {
      transform: rotate(270deg);
    }
  }
`;
const ProjectLinkSpan = styled.span`
  padding-left: 0.4em;
`;

const ProjectDetailVideoBox = styled.div<{ active: boolean }>`
  overflow: hidden;
  padding: var(--container-padding);
  @media screen and (max-width: 768px) {
    padding: calc(var(--container-padding) / 2);
  }
  video {
    visibility: hidden;
    display: block;
    width: 100%;
    max-width: 760px;
    max-height: 660px;
    margin: 0 auto;
    border: 1px solid var(--color-grey-light);
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
  const paramsRef = useRef<string | undefined>(useParams().name);
  const data = useRef(projectData.find((data) => data.name === paramsRef.current));
  const layoutRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number[]>([0]);
  const isBackBtn = useRef<boolean>(false);

  useEffect(() => {
    window.addEventListener('popstate', preventGoBack);
    return () => window.removeEventListener('popstate', preventGoBack);
  }, []);

  const backToPage = (e: React.MouseEvent) => {
    isBackBtn.current = true;
    navigate(-1);
  };

  const preventGoBack = (e: Event) => {
    if (!layoutRef.current) return;
    if (!isBackBtn.current) {
      //윈도우 뒤로가기 버튼 또는 제스처 시 애니메이션 적용 X
      layoutRef.current.classList.add('out');
    }
  };

  return (
    <ProjectDetailLayout id='detail' ref={layoutRef}>
      <ProjectDetailCol col={1}>
        <ProjectDetailHeader>
          <nav>
            <ProjectDetailButton onClick={backToPage}>
              <BsArrowUp />
            </ProjectDetailButton>
          </nav>
          <ProjectDetailHeading>{data.current?.title}</ProjectDetailHeading>
          <ProjectDetailLinkBox>
            <ProjectDetailLink href={data.current?.github}>
              <BsLink45Deg />
              <ProjectLinkSpan>Github</ProjectLinkSpan>
            </ProjectDetailLink>
            <ProjectDetailLink href={data.current?.website}>
              <BsLink45Deg />
              <ProjectLinkSpan>Website</ProjectLinkSpan>
            </ProjectDetailLink>
          </ProjectDetailLinkBox>
        </ProjectDetailHeader>
        <ProjectDetailVideoBox active={active.length > 0}>
          <video loop autoPlay playsInline>
            <source src={data.current?.video} type='video/mp4' />
          </video>
        </ProjectDetailVideoBox>
      </ProjectDetailCol>
      <ProjectDetailCol col={2}>
        <div>
          {data.current?.story.map((item) => (
            <ProjectStory key={item.id} item={item} active={active} setActive={setActive} />
          ))}
        </div>
      </ProjectDetailCol>
    </ProjectDetailLayout>
  );
}
