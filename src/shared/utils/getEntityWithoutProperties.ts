export const getEntityWithoutProperties = (data: Record<string, any>, keys: string[]): Record<string, any> => {
  const target: any = {};
  for (const key in data) {
    if (keys.indexOf(key) >= 0) continue;
    if (!Object.hasOwnProperty.call(data, key)) continue;
    target[key] = data[key];
  }
  return target;
};
