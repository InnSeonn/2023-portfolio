import styled, { css } from 'styled-components';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Pagination from '../components/Pagination';
import Project, { ProjectType } from '../components/Project';
import { bounceAnimation } from '../components/GlobalStyle';

const ProjectPageLayout = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
const ProjectPageCol = styled.div<{ col: number }>`
  ${bounceAnimation}
  ${(props) =>
    (props.col === 1 &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        width: 35%;
        margin: calc(var(--container-padding) * 3) 0;
        padding: 0 var(--container-padding);
        border-right: 1px solid var(--color-grey-light);
        text-align: right;
      `) ||
    (props.col === 2 &&
      css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 65%;
        margin: calc(var(--container-padding) * 3) var(--container-padding);
      `)}
`;
const ProjectPageTitleParagraph = styled.p`
  font-size: 5rem;
  font-weight: 100;
  line-height: 1.3;
`;
const ProjectPageSubParagraph = styled.p`
  color: var(--color-grey);
  line-height: 1.5;
`;
const ProjectPageSlideBox = styled.div`
  overflow: hidden;
  cursor: grab;
  user-select: none;
  &.drag {
    cursor: grabbing;
  }
`;
const ProjectPageSlideList = styled.ul`
  display: flex;
  width: 100%;
  transition: all 0.5s;
`;

const ProjectPageBtnList = styled.ul`
  margin-top: 1rem;
`;

export default function ProjectPage() {
  const projectItem = useRef<ProjectType[]>([
    {
      id: 0,
      name: 'portfolio',
      text: '개인 프로젝트와 본인 소개를 담은 반응형 포트폴리오 웹사이트',
    },
    {
      id: 1,
      name: 'todolist',
      text: '할 일을 추가하고 관리할 수 있는 반응형 투두리스트 웹사이트',
    },
    {
      id: 2,
      name: 'clone website',
      text: 'UI와 기능을 참고하여 제작한 반응형 클론 웹사이트',
    },
  ]);
  const slideRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const startX = useRef(0);
  const transformX = useRef(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (listRef.current === null) return;
    transformX.current =
      page * (listRef.current.offsetWidth * 0.2) < listRef.current.scrollWidth - listRef.current.offsetWidth
        ? page * (listRef.current.offsetWidth * 0.2)
        : listRef.current.scrollWidth - listRef.current.offsetWidth;
    listRef.current.style.transitionDuration = '0.5s';
    listRef.current.style.transform = `translateX(-${transformX.current}px)`;
  }, [page]);

  const mouseEventHandler = (e: React.MouseEvent) => {
    startX.current = transformX.current + e.clientX;
    slideRef.current?.addEventListener('mouseup', clearEventHandler);
    slideRef.current?.addEventListener('mouseleave', clearEventHandler);
    slideRef.current?.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseMove = useCallback((e: Event) => {
    if (listRef.current === null) return;
    if (e instanceof MouseEvent) {
      slideRef.current?.classList.add('drag');
      const moveX = startX.current - e.clientX;
      if (moveX < 0) {
        transformX.current = 0;
      } else if (moveX > listRef.current.scrollWidth - listRef.current.offsetWidth) {
        transformX.current = listRef.current.scrollWidth - listRef.current.offsetWidth;
      } else {
        transformX.current = startX.current - e.clientX;
      }
      listRef.current.style.transitionDuration = '0.1s';
      listRef.current.style.transform = `translateX(-${transformX.current}px)`;
    }
  }, []);

  const clearEventHandler = useCallback((e: Event) => {
    slideRef.current?.classList.remove('drag');
    slideRef.current?.removeEventListener('mouseup', clearEventHandler);
    slideRef.current?.removeEventListener('mouseleave', clearEventHandler);
    slideRef.current?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ProjectPageLayout>
      <ProjectPageCol col={1}>
        <div>
          <ProjectPageTitleParagraph>Website</ProjectPageTitleParagraph>
          <ProjectPageSubParagraph>학습하며 개인으로 제작한 웹사이트</ProjectPageSubParagraph>
        </div>
        <ProjectPageBtnList>
          {projectItem.current.map((elem, index) => (
            <Pagination key={index} id={index} page={page} setPage={setPage} />
          ))}
        </ProjectPageBtnList>
      </ProjectPageCol>
      <ProjectPageCol col={2}>
        <ProjectPageSlideBox draggable='false' ref={slideRef} onMouseDown={mouseEventHandler}>
          <ProjectPageSlideList ref={listRef}>
            {projectItem.current.map((elem) => (
              <Project key={elem.id} item={elem} page={page} setPage={setPage} />
            ))}
          </ProjectPageSlideList>
        </ProjectPageSlideBox>
      </ProjectPageCol>
    </ProjectPageLayout>
  );
}