import TodoContainer from "@/components/TodoContainer";
import { server } from "@/const";
export const runtime = "edge";
const getData = async () => {
  try {
    const result = await fetch(server, {
      cache: "no-cache",
    });
    return result.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 bg-white ">
      <TodoContainer data={data} />
    </main>
  );
}
