
// Provider
import AppProvider from "./provider";

// Layout
import DefaultLayout from "@/layouts/DefaultLayout";

// Components
import Main from "@/components/home/Main";

export default function Home() {
  return (
    <AppProvider>
      <DefaultLayout>
        <div
          className="w-full h-full px-5 py-5">
          <Main />
        </div>
      </DefaultLayout>
    </AppProvider>
  );
}
