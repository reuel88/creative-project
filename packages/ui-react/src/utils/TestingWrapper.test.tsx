/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen } from "@testing-library/react";
import TestingWrapper from "./TestingWrapper";
import { FC, PropsWithChildren } from "react";

jest.mock("react-i18next", () => {
  return {
    I18nextProvider: ({ children }) => {
      return <>{children}</>;
    },
  } as { I18nextProvider: FC<PropsWithChildren> };
});

describe("<TestWrapper />", () => {
  it("should retrieve and return the translations", () => {
    const i18nSpy = jest.spyOn(require("i18next"), "init");

    render(
      <TestingWrapper translations={{ hello: "world" }}>
        <>hello</>
      </TestingWrapper>
    );

    expect(i18nSpy).toBeCalledWith({
      fallbackLng: ["en"],
      interpolation: { escapeValue: false },
      lng: "en",
      resources: { en: { translation: { hello: "world" } } },
    });
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
