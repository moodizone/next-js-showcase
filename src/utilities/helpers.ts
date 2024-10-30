export async function sleep(duration: number = 1500) {
  return new Promise((resolve) => {
    setTimeout(() => resolve, duration);
  });
}
