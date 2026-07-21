import Header from "./components/Header/Header";

export const revalidate = 1;

export default async function Home() {
  return (
    <>
      <Header />
    </>
  );
}
