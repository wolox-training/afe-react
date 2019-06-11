// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  let intervalCont = 0;
  let dateNow = Date.now();
  return new Promise((resolve, reject) => {
    if (time > 5000) {
      const reason = new Error('This time is too much !');
      reject(reason);
    }
    const timer = setInterval(() => {
      const result = Date.now() - dateNow;
      if (intervalCont >= 1) {
        clearInterval(timer);
        resolve(result);
      }
      intervalCont += 1;
      dateNow = Date.now();
    }, time);
  });
}
export async function asyncDelay(time) {
  const dataTime = await delay(time);
  return dataTime;
}
