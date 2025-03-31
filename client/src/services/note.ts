import { Note } from "../types/note";

let API_URL = "";
if (import.meta.env.VITE_MODE === "development") {
  API_URL = import.meta.env.VITE_LOCAL_API_URL;
}
if (import.meta.env.VITE_MODE === "production") {
  API_URL = import.meta.env.VITE_API_URL!;
}

console.log("API ...", API_URL);

export const getNotes = async () => {
  const response = await fetch(`${API_URL}/todos`);
  console.log("Response ..." + response);
  const data = await response.json();
  console.log("data .. " + data);
  return data.todos;
};

// export const createNotes = async (): Promise<Note> => {
//   const response = await fetch(`${API_URL}/create`);
// };
