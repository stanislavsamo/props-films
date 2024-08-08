const { nanoid } = require("nanoid");

export const films = [
  {
    id: nanoid(),
    title: "Супермен",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCInJZhPw7usndV9dwQm9c_gD5WM0YvUNfgQ&s",
    price: 1299,
    count: 0,
  },
  {
    id: nanoid(),
    title: "Человек паук",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeSbt1_YWYLQmhZWVgYp6v9iUoC7rIIckIg&s",
    price: 1999,
    count: 1,
  },
  {
    id: nanoid(),
    title: "Выстрел в пустоту",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWZh_TkV-ro5Go5Z8B7sus-sGwaXCnX5z9A&s",
    price: 1899,
    count: 5,
  },
  {
    id: nanoid(),
    title: "Гнев человеческий",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOXq5n_7mJwIY4I3hW3Adw2GuLODV8i3WM39LGOwseA&s",
    price: 1200,
    count: 8,
  },
];
