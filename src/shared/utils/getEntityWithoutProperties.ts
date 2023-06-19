export const getEntityWithoutProperties = (data: any, keys: string[]): any => {
  const target: any = {};
  for (const key in data) {
    if (keys.indexOf(key) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(data, key)) continue;
    target[key] = data[key];
  }
  return target;
};
