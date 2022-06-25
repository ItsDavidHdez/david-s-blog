export const useDate = (day: number, month: number, year: number) => {
  let monthFormatted = "";

  if (month === 1) {
    monthFormatted = "Enero";
  } else if (month === 2) {
    monthFormatted = "Febrero";
  } else if (month === 3) {
    monthFormatted = "Marzo";
  } else if (month === 4) {
    monthFormatted = "Abril";
  } else if (month === 5) {
    monthFormatted = "Mayo";
  } else if (month === 6) {
    monthFormatted = "Junio";
  } else if (month === 7) {
    monthFormatted = "Julio";
  } else if (month === 8) {
    monthFormatted = "Agosto";
  } else if (month === 9) {
    monthFormatted = "Septiembre";
  } else if (month === 10) {
    monthFormatted = "Octubre";
  } else if (month === 11) {
    monthFormatted = "Noviembre";
  } else if (month === 12) {
    monthFormatted = "Diciembre";
  }

  return `${day} de ${monthFormatted} del ${year}`;
};
