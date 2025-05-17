export default function Trends() {
  const trends = [
    { topic: "React", tweets: "25.4K" },
    { topic: "TailwindCSS", tweets: "15.2K" },
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="font-bold text-xl mb-4">Tendencias</h2>
      <ul className="space-y-4">
        {trends.map((trend, index) => (
          <li key={index} className="hover:bg-neutral-700 p-2 rounded cursor-pointer">
            <div className="font-bold">#{trend.topic}</div>
            <div className="text-gray-300">{trend.tweets} tweets</div>
          </li>
        ))}
      </ul>
    </div>
  );
}