import { render } from "@testing-library/react";
import Chart from "./ChartWrapper";
import { LineSeries } from "./series";
import { MockViewport, mockViewport } from "jsdom-testing-mocks";
import { setupJestCanvasMock } from "jest-canvas-mock";

let viewport: MockViewport;

beforeEach(() => {
  viewport = mockViewport({ width: "1320px", height: "568px" });
  setupJestCanvasMock();
});

afterEach(() => {
  viewport.cleanup();
});

const lineData = [
  { time: "2018-12-22", value: 23 },
  { time: "2018-12-23", value: 54 },
  { time: "2018-12-24", value: 36 },
  { time: "2018-12-25", value: 48 },
  { time: "2018-12-26", value: 24 },
  { time: "2018-12-27", value: 73 },
  { time: "2018-12-28", value: 287 },
  { time: "2018-12-29", value: 96 },
  { time: "2018-12-30", value: 37 },
  { time: "2018-12-31", value: 54 },
  { time: "2019-01-01", value: 62 },
  { time: "2019-01-02", value: 71 },
  { time: "2019-01-03", value: 88 },
  { time: "2019-01-04", value: 99 },
  { time: "2019-01-05", value: 13 },
  { time: "2019-01-06", value: 28 },
  { time: "2019-01-07", value: 92 },
];

describe("Chart", () => {
  it("renders without crashing", () => {
    render(
      <Chart height={400}>
        <LineSeries data={lineData} />
      </Chart>
    );
  });

  // Add more tests as needed
});
