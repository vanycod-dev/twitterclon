import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Trends from "../components/Trends";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-neutral-900 text-white">
      <Sidebar />
      <Feed />
      <div className="w-80 p-4">
        <Trends />
      </div>
    </div>
  );
}