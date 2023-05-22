export const getDaysMonthsYears = (date) => {
  const newDate = new Date(date);
  const getDay = newDate.getDate();
  const getMonth = newDate.getMonth() + 1;
  const getYear = newDate.getFullYear();

  return { getDay, getMonth, getYear };
};
