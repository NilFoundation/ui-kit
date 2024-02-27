import { ReactElement } from "react";
import { renderToString } from "react-dom/server";

// Ensures that browser-specific code does not run during SSR
// To make test pass wrap browser specific code in useEffect
export const createComponentSSRTest = (ui: ReactElement) => {
  const windowSpy = jest.spyOn(global, "window", "get");
  const documentSpy = jest.spyOn(global, "document", "get");
  const locationSpy = jest.spyOn(global, "location", "get");
  const navigatorSpy = jest.spyOn(global, "navigator", "get");

  renderToString(ui);

  expect(windowSpy).not.toHaveBeenCalled();
  expect(documentSpy).not.toHaveBeenCalled();
  expect(locationSpy).not.toHaveBeenCalled();
  expect(navigatorSpy).not.toHaveBeenCalled();

  windowSpy.mockRestore();
  documentSpy.mockRestore();
  locationSpy.mockRestore();
  navigatorSpy.mockRestore();
};
