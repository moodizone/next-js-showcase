import { sleep } from "@/utilities/helpers";

interface UserType {
  firstName: string;
  lastName: string;
  age: number;
}

export async function fetchData(duration: number = 2000) {
  const response: UserType = {
    age: 12,
    firstName: "Moo",
    lastName: "AL",
  };
  await sleep(duration);
  return response;
}
