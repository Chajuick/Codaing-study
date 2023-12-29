import { useState } from "react"
import Side from "../components/Side"
import { JavascriptQData } from "../components/data/JavascriptQData"
import styled from "styled-components";

const Container = styled.div`

`;

const MainContent = styled.main`

`;

export default function Javascript() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  return (
    <>
    <Side 
      data={JavascriptQData}
      setSelectedQuestion={setSelectedQuestion}
    />
    <Container className="main-container">
      <MainContent className="main-content">
        <p className="detail-content">
          자바스크립트(JavaScript)는 동적인 웹 페이지를 만들기 위해 고안된 스크립트 언어입니다.
          초기에는 웹 브라우저에서 클라이언트 측 스크립트 언어로 사용되었지만, 현재는 Node.js같이
          서버 측 개발에서도 널리 사용되고 있습니다.
          JavaScript는 동적인 특성, 이벤트 기반, 객체 기반, 크로스 플랫폼, 경량 및 유연성
        </p>
      </MainContent>
    </Container>
    </>
  )
};