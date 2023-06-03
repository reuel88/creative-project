import { render } from "@testing-library/react";
import { useContainerClasses } from "./useContainerClasses";
import { VARIANT } from "../constants";
import { ReactNode } from "react";

describe("useContainerClasses", () => {
  const MockComponent = (props: {
    variant?: typeof VARIANT.PRIMARY | typeof VARIANT.SECONDARY;
    errorMessage?: ReactNode;
  }) => {
    const {
      containerClasses,
      containerTopClasses,
      containerTopLeftClasses,
      containerTopMiddleClasses,
      containerTopRightClasses,
    } = useContainerClasses(props);
    return (
      <>
        <div id="container">{containerClasses}</div>
        <div id="container--top">{containerTopClasses}</div>
        <div id="container--top--left">{containerTopLeftClasses}</div>
        <div id="container--top--middle">{containerTopMiddleClasses}</div>
        <div id="container--top--right">{containerTopRightClasses}</div>
      </>
    );
  };

  it("should return with primary", () => {
    const { container } = render(<MockComponent />);

    expect(container.querySelector("#container")).toHaveTextContent(
      "container"
    );
    expect(container.querySelector("#container--top")).toHaveTextContent(
      "container--top primary"
    );
    expect(container.querySelector("#container--top--left")).toHaveTextContent(
      "container--top--left primary"
    );
    expect(
      container.querySelector("#container--top--middle")
    ).toHaveTextContent("container--top--middle primary");
    expect(container.querySelector("#container--top--right")).toHaveTextContent(
      "container--top--right primary"
    );
  });

  it("should return with secondary", () => {
    const { container } = render(<MockComponent variant={VARIANT.SECONDARY} />);

    expect(container.querySelector("#container")).toHaveTextContent(
      "container"
    );
    expect(container.querySelector("#container--top")).toHaveTextContent(
      "container--top secondary"
    );
    expect(container.querySelector("#container--top--left")).toHaveTextContent(
      "container--top--left secondary"
    );
    expect(
      container.querySelector("#container--top--middle")
    ).toHaveTextContent("container--top--middle secondary");
    expect(container.querySelector("#container--top--right")).toHaveTextContent(
      "container--top--right secondary"
    );
  });

  it("should return with error", () => {
    const { container } = render(
      <MockComponent errorMessage={"Error Message"} />
    );

    expect(container.querySelector("#container")).toHaveTextContent(
      "container"
    );
    expect(container.querySelector("#container--top")).toHaveTextContent(
      "container--top primary error"
    );
    expect(container.querySelector("#container--top--left")).toHaveTextContent(
      "container--top--left primary error"
    );
    expect(
      container.querySelector("#container--top--middle")
    ).toHaveTextContent("container--top--middle primary error");
    expect(container.querySelector("#container--top--right")).toHaveTextContent(
      "container--top--right primary error"
    );
  });
});
