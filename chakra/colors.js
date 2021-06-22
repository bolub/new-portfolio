let defaultColor, defaultBrandColor;

if (typeof window !== "undefined") {
  defaultColor = localStorage.getItem("defaultColor") || "red";
}

let brand = {
  50: "#ffe4ed",
  100: "#fbb9c8",
  200: "#f28da4",
  300: "#ec607f",
  400: "#e5345b",
  500: "#cb1a41",
  600: "#9f1233",
  700: "#730b23",
  800: "#470415",
  900: "#1e0006",
};

switch (defaultColor) {
  case "red":
    brand = {
      50: "#ffe4ed",
      100: "#fbb9c8",
      200: "#f28da4",
      300: "#ec607f",
      400: "#e5345b",
      500: "#cb1a41",
      600: "#9f1233",
      700: "#730b23",
      800: "#470415",
      900: "#1e0006",
    };
    defaultBrandColor = "#cb1a41";
    break;

  case "blue":
    brand = {
      50: "#e5eeff",
      100: "#b9cbfb",
      200: "#8da8f3",
      300: "#6185eb",
      400: "#3563e4",
      500: "#1b49ca",
      600: "#12399e",
      700: "#0a2972",
      800: "#031847",
      900: "#00081d",
    };
    defaultBrandColor = "#1b49ca";

    break;

  case "yellow":
    brand = {
      50: "#fff4dc",
      100: "#fee2b0",
      200: "#fbce82",
      300: "#f8bb52",
      400: "#f6a723",
      500: "#dc8e09",
      600: "#ab6e04",
      700: "#7b4f01",
      800: "#4a2f00",
      900: "#1c0f00",
    };
    defaultBrandColor = "#dc8e09";

    break;

  default:
}

export { brand, defaultBrandColor };
