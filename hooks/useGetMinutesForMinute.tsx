export const useGetMinutesForMinute = (content: string) => {
  const wordsForMinute: number = content.length / 1000;
  return Math.round(wordsForMinute);
};
