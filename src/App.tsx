import React from "react";
import styled from "@emotion/styled";

const AppWrapper = styled.div<{}>({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "100%",
});

function App() {
  return (
    <AppWrapper>
      <div css={{ color: "red" }}>Zuuvo Challenge</div>
    </AppWrapper>
  );
}

export default App;
