import { fireEvent, render, screen } from "@testing-library/react";
import { SearchButton } from "./index";
import TestingWrapper from "../../utils/TestingWrapper";

describe("<SearchButton />", () => {
  it("should render correctly and Search btn can be clicked", async () => {
    const handleClick = jest.fn();

    render(
      <TestingWrapper translations={{ Search: "Search" }}>
        <SearchButton onClick={handleClick} />
      </TestingWrapper>
    );

    const searchBtn = screen.getByText("Search");

    fireEvent.click(searchBtn);

    expect(handleClick).toBeCalled();
  });
});
