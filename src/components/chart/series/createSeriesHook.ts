import { ISeriesApi } from "lightweight-charts";
import { ForwardedRef, useContext, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { ChartContext } from "../ChartContext";

export function createSeriesHook<T extends SeriesActionParams>(type: T["type"]) {
  return (props: Omit<T, "type">, ref: ForwardedRef<ISeriesApi<T["type"]>>) => {
    const chartApi = useContext(ChartContext);

    const context = useRef(
      createLazyValue(
        () => series(chart(), { ...props, type }),
        (value: SeriesActionResult<T>) => value.destroy()
      )
    );

    useLayoutEffect(() => {
      context.current();

      return () => {
        context.current.reset();
      };
    }, []);

    useLayoutEffect(() => {
      context.current().update({ ...props, type: type } as T);
    }, [props]);

    useImperativeHandle(ref, () => context.current().subject(), []);

    return context;
  };
}
