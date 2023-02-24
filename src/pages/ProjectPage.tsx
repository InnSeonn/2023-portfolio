import styled, { css } from 'styled-components';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Pagination from '../components/Pagination';
import Project from '../components/Project';
import projectData from '../db/projectData';
import { Layout } from './Home';

const ProjectPageLayout = styled(Layout)`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding-top: calc(var(--container-padding) * 3);
  }
`;
const ProjectPageCol = styled.div<{ col: number }>`
  ${(props) =>
    (props.col === 1 &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        margin: calc(var(--vh, 1vh) * 4.2) 0;
        padding: 0 var(--container-padding);
        border-right: 1px solid var(--color-grey-light);
        text-align: right;
        @media screen and (max-width: 768px) {
          display: none;
        }
      `) ||
    (props.col === 2 &&
      css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: calc(var(--vh, 1vh) * 4.2) var(--container-padding);
        @media screen and (max-width: 768px) {
          margin: 0;
        }
      `)}
`;
const ProjectPageSlideList = styled.ul`
  display: flex;
  transition: transform 0.3s;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ProjectPageSlideBox = styled.div`
  overflow: hidden;
  width: 73vw;
  cursor: grab;
  user-select: none;
  &.drag {
    cursor: grabbing;
    ${ProjectPageSlideList} {
      transition: none;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    cursor: auto;
  }
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const matches = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    //projectDetail 페이지와의 전환 시 애니메이션 적용 안함
    if (document.getElementById('detail') && layoutRef.current?.className.includes('bounce-enter')) {
      bounceRef.current.map((elem) => elem && (elem.style.animation = 'none'));
    }
  }, [layoutRef.current?.className]);

  useEffect(() => {
    if (listRef.current === null) return;
    //슬라이드-리스트형 전환 시 위치 조정을 위해 transform, page 초기화
    if (window.matchMedia('(max-width: 768px)').matches) {
      listRef.current.removeAttribute('style');
      setPage(0);
      return;
    }

    //선택된 아이템을 가장 앞쪽으로 위치
    //슬라이드 뒤쪽에 여백이 생길 경우 슬라이드 끝에 아이템을 위치
    transformX.current =
      page * (listRef.current.offsetWidth * 0.15) + page * 40 < listRef.current.scrollWidth - listRef.current.offsetWidth
        ? page * (listRef.current.offsetWidth * 0.15) + page * 40
        : listRef.current.scrollWidth - listRef.current.offsetWidth;
    listRef.current.style.transform = `translateX(-${transformX.current}px)`;
  }, [windowWidth, page]);

  const mouseEventHandler = (e: React.MouseEvent) => {
    startX.current = transformX.current + e.clientX;
    slideRef.current?.addEventListener('mouseup', clearEventHandler);
    slideRef.current?.addEventListener('mouseleave', clearEventHandler);
    slideRef.current?.addEventListener('mousemove', handleSlideMove);
  };

  const handleSlideMove = useCallback((e: Event) => {
    if (listRef.current === null) return;
    slideRef.current?.classList.add('drag'); //grabbing 커서로 표시
    //현재 위치에서 이동한 위치 사이의 거리 계산
    const moveX = e instanceof MouseEvent ? startX.current - e.clientX : e instanceof TouchEvent ? startX.current - e.touches[0].pageX : 0;
    if (moveX < 0) {
      transformX.current = 0;
    } else if (moveX > listRef.current.scrollWidth - listRef.current.offsetWidth) {
      transformX.current = listRef.current.scrollWidth - listRef.current.offsetWidth;
    } else {
      transformX.current = moveX;
    }
    listRef.current.style.transform = `translateX(-${transformX.current}px)`;
  }, []);

  const clearEventHandler = useCallback((e: Event) => {
    slideRef.current?.classList.remove('drag');
    if (e.type === 'mouseup') {
      slideRef.current?.removeEventListener('mouseup', clearEventHandler);
      slideRef.current?.removeEventListener('mouseleave', clearEventHandler);
      slideRef.current?.removeEventListener('mousemove', handleSlideMove);
    } else if (e.type === 'touchend') {
      slideRef.current?.removeEventListener('touchend', clearEventHandler);
      slideRef.current?.removeEventListener('touchmove', handleSlideMove);
    }
  }, []);

  const touchEventHandler = (e: React.TouchEvent) => {
    startX.current = transformX.current + e.touches[0].pageX;
    slideRef.current?.addEventListener('touchend', clearEventHandler);
    slideRef.current?.addEventListener('touchmove', handleSlideMove);
  };

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
        <ProjectPageSlideBox draggable='false' ref={slideRef} onMouseDown={matches ? undefined : mouseEventHandler} onTouchStart={matches ? undefined : touchEventHandler}>
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
