import { useAppStore } from "../stores/useAppStore";

export default function HomePage() {
  useAppStore((state) => state.categories);
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
