import React from "react";
import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";
import Button from "../components/generic/Button";
import DisplayTime from "../components/generic/DisplayTime";
import DisplayRound from "../components/generic/DisplayRound";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

/**
 * You can document your components by using the DocumentComponent component
 */
const Documentation = () => {
  return (
    <Container>
      <div>
        <Title>Documentation</Title>

        <DocumentComponent
          title="Button"
          component={<Button label={"Button"}/>}
          propDocs={[
            {
              prop: "onClick",
              description: "Takes function (ex. reset, or fastForward)",
              type: "function",
              defaultValue: "none",
            },
            {
              prop: "label",
              description: "Text inside the button",
              type: "string",
              defaultValue: "none",
            },
            {
              prop: "activeState",
              description: "Sets the disabled attribute of the button",
              type: "bool",
              defaultValue: "none",
            },
            {
              prop: "theme",
              description: "Sets the theme/style of the button",
              type: "string",
              defaultValue: "green",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayTime "
          component={<DisplayTime time={90}/>}
          propDocs={[
            {
              prop: "time",
              description: "Takes time in seconds",
              type: "number",
              defaultValue: "none",
            },
          ]}
        />
        <DocumentComponent
          title="DisplayRound "
          component={<DisplayRound rounds={4} period = "Work" theme = "green"/>}
          propDocs={[
            {
              prop: "rounds",
              description: "Takes number of rounds",
              type: "number",
              defaultValue: "none",
            },
            {
              prop: "period",
              description: "Takes a string (ex. 'Workout', 'Rest')",
              type: "string",
              defaultValue: "none",
            },
            {
              prop: "theme",
              description: "Sets the color of the period display",
              type: "string",
              defaultValue: "green",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;
