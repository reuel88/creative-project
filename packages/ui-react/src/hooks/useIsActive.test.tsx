import { render, screen } from "@testing-library/react";
import { useIsActive } from "./useIsActive";

describe("useIsActive", () => {
  const MockComponent = (props: {
    label: string;
    value?: string;
    onChange: () => void;
  }) => {
    const [isActive] = useIsActive(props);

    return (
      <div>
        <span>{isActive ? "active" : "not active"}</span>
      </div>
    );
  };

  it("should active when value set", () => {
    render(
      <MockComponent
        value="foo"
        onChange={() => {
          console.log("");
        }}
        label="foo"
      />
    );

    expect(screen.getByText("active")).toBeInTheDocument();
  });

  it("should be not active when value undefined", () => {
    render(
      <MockComponent
        value={undefined}
        onChange={() => {
          console.log("");
        }}
        label="foo"
      />
    );

    expect(screen.getByText("not active")).toBeInTheDocument();
  });

  it("should active when selectedKey set", () => {
    const MockComponent = (props: {
      label: string;
      selectedKey?: string;
      onChange: () => void;
    }) => {
      const [isActive] = useIsActive(props);

      return (
        <div>
          <span>{isActive ? "active" : "not active"}</span>
        </div>
      );
    };

    render(
      <MockComponent
        selectedKey="foo"
        onChange={() => {
          console.log("");
        }}
        label="foo"
      />
    );

    expect(screen.getByText("active")).toBeInTheDocument();
  });

  it("should be not active when selectedKey undefined", () => {
    const MockComponent = (props: {
      label: string;
      selectedKey?: string;
      onChange: () => void;
    }) => {
      const [isActive] = useIsActive(props);

      return (
        <div>
          <span>{isActive ? "active" : "not active"}</span>
        </div>
      );
    };

    render(
      <MockComponent
        selectedKey={undefined}
        onChange={() => {
          console.log("");
        }}
        label="foo"
      />
    );

    expect(screen.getByText("not active")).toBeInTheDocument();
  });
});
