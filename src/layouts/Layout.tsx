import { Outlet } from "react-router-dom";
import Header2 from "../components/Header2";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notifications";

export default function Layout() {
  const loadFavorites = useAppStore((state) => state.loadFavorites);
  useEffect(() => {
    loadFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header2 />
      <main className="container mx-auto py-16 bg-black">
        <Outlet />
      </main>
      <Modal />
      <Notification />
    </>
  );
}
