import styled, { css } from 'styled-components';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Pagination from '../components/Pagination';
import Project from '../components/Project';
import projectData from '../db/projectData';
import { Layout } from './Home';

const ProjectPageLayout = styled(Layout)`
  display: flex;
  justify-content: center;
`;
const ProjectPageCol = styled.div<{ col: number }>`
  ${(props) =>
    (props.col === 1 &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
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
        margin: calc(var(--container-padding) * 3) var(--container-padding);
      `)}
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
  width: 73vw;
  transition: all 0.5s;
`;

export default function ProjectPage() {
  const projectItem = useRef(projectData);
  const slideRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const startX = useRef(0);
  const transformX = useRef(0);
  const [page, setPage] = useState(0);
  const layoutRef = useRef<HTMLElement>(null);
  const bounceRef = useRef<(null | HTMLDivElement)[]>([null]);

  useEffect(() => {
    //projectDetail 페이지와의 전환 시 애니메이션 적용 안함
    if (document.getElementById('detail') && layoutRef.current?.className.includes('bounce-enter')) {
      bounceRef.current.map((elem) => elem && (elem.style.animation = 'none'));
    }
  }, [layoutRef.current?.className]);

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
    <ProjectPageLayout ref={layoutRef}>
      <ProjectPageCol col={1} ref={(elem) => (bounceRef.current[0] = elem)}>
        <ul>
          {projectItem.current.map((elem, index) => (
            <Pagination key={index} id={index} page={page} setPage={setPage} />
          ))}
        </ul>
      </ProjectPageCol>
      <ProjectPageCol col={2} ref={(elem) => (bounceRef.current[1] = elem)}>
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
