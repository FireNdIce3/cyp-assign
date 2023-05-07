import { AiOutlineBook, AiOutlineDribbbleSquare, AiOutlineHome, AiOutlineSolution, AiOutlineTrophy } from "react-icons/ai";

export const linkArray = [
    {
      label: "Home",
      icon: <AiOutlineHome />,
      to: "/",
      API: "https://jsonplaceholder.typicode.com/users"
    },
    {
      label: "Academics",
      icon: <AiOutlineBook />,
      to: "/academics",
      API: "https://jsonplaceholder.typicode.com/users"
    },
    {
      label: "Cultural",
      icon: <AiOutlineTrophy />,
      to: "/cultural",
      API: "https://jsonplaceholder.typicode.com/users"
    },
    {
      label: "Games",
      icon: <AiOutlineDribbbleSquare />,
      to: "/games",
      API: "https://jsonplaceholder.typicode.com/users"
    },
    {
      label: "Attendance",
      icon: <AiOutlineSolution />,
      to: "/attendance",
      API: "https://jsonplaceholder.typicode.com/users"
    },
    
  ];

  export default linkArray;