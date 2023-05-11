import React from "react";
import "./withColorScheme.css";

const withColorScheme = (Story, context) => {
  const { scheme } = context.globals;

  function Flex(props) {
    return (
      <div
        {...props}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem 0",
          width: "100%",
        }}
      />
    );
  }

  if (scheme === "light") {
    return (
      <>
        <Flex className="light">
          <Story />
        </Flex>
      </>
    );
  }

  if (scheme === "dark") {
    return (
      <>
        <Flex className="dark">
          <Story />
        </Flex>
      </>
    );
  }

  return (
    <>
      <Flex className="light">
        <Story />
      </Flex>
      <Flex className="dark">
        <Story />
      </Flex>
    </>
  );
};

export default withColorScheme;
