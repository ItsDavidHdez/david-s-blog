// Tags:

// Desarrollo: (#44C103)
//     - Javascript (#EFD81D)
//     - React (#5AD1F3)
//     - Nodejs (#8BBE3D)
//     - Golang (#70C8D6)

// Finanzas: (#F7B81B)

// Marketing Digital: (#0068DF)

// Blockchain: (#B5E7B8)

// DevOps: (#18851D)

export let color;

export const useTag = (title: string) => {
  switch (title) {
    case "Desarrollo":
      color = "#44C103";
      break;
    case "Javascript":
      color = "#EFD81D";
      break;
    case "React":
      color = "#5AD1F3";
      break;
    case "Nodejs":
      color = "#8BBE3D";
      break;
    case "Golang":
      color = "#70C8D6";
      break;
    case "Finanzas":
      color = "#F7B81B";
      break;
    case "Marketing Digital":
      color = "#0068DF";
      break;
    case "Blockchain":
      color = "#B5E7B8";
      break;
    case "DevOps":
      color = "#18851D";
      break;
    default:
      break;
  }
};
