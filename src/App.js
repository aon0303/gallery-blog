import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Gallery() {
  return (
    <>
      <div className="gallery-header">
          <h1 style ={{fontSize : "3rem", fontFamaily : "'Roboto', sans-serif"}}> Gallery </h1>
      </div>
            <div className="gallery-container">
                <Card
                    img="/img/1.jpg"
                    title="좋은아침"
                    description="2024.10.09"
                />
                <Card
                    img="/img/2.jpg"
                    title="안 드세요?"
                    description="2024.10.09" />
                <Card
                    img="/img/3.jpg"
                    title="당장 말 해"
                    description="2024.10.09"
                />
                <Card
                    img="/img/4.jpg"
                    title="로딩 중..."
                    description="2024.10.09"
                />
                <Card
                    img="/img/5.jpg"
                    title="블랙맘바"
                    description="2024.10.09" />
                <Card
                    img="/img/6.jpg"
                    title="잘자호소묘"
                    description="2024.10.09" />
                <Card
                    img="/img/7.jpg"
                    title="사랑앓이"
                    description="2024.10.09" />
                <Card
                    img="/img/8.jpg"
                    title="웃참고앵"
                    description="2024.10.09" />

            </div>
        </>
  );
}

export default Gallery;

function Card(props) {
  let [heart, heartchange] = useState(0);
  return (
      <div className="picture-card">
          <img src={props.img}></img>
          <div style={{ display: "flex", alignItems: "center" }}>
          <h4>{props.title}</h4>
          <span onClick={() => {heartchange(heart + 1)}}>❤️</span> {heart}
          </div>
          <p>{props.description}</p>
      </div>
  )
}
