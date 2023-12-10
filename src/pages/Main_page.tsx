import React from "react";
import Content from "../modules/content/Content";
import styled from "styled-components";


const Background = styled.img`
  min-height: 100%;
  min-width: 640px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(3px);
`

const Box = styled.div`
  display: block;
  width: 50vw;
  padding: 5px;
  height: 100%;
  font-size: 2rem;
  color: white;
  border: solid 2px black;
  border-radius: 20px;
  position: relative;
  margin: 20vh auto;
  justify-content: center;
  text-align: center;
  background: linear-gradient(124deg, rgba(0,0,0,1) 56%, rgba(0,28,54,1) 68%, rgba(13,143,170,1) 100%);
`

export default function MainPage() {
  return (
    <>
      <Background src="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666389905_27-mykaleidoscope-ru-p-klassnaya-priroda-oboi-29.jpg"/>

      <Box>
      <div>
          <h1>Главная страница</h1>
        </div>
        <div>
          <p>
            Сайт предназначет для просмотра различных данных связанных с погодными условиями. 
            Есть возможность получать информацию в виде списка и с помощью карты.
            Выбирать с помощью кнопок фильтрацию данных, либо источник данных.<br/><br/>
            Тестовая версия
          </p>
        </div>
      </Box>
    </>
  );
}
