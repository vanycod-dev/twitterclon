import Tweet from "./Tweet";

export default function Feed() {
  const tweets = [
    { id: 1, content: "Hola mundo!", username: "usuario1", name: "Juan Pérez" },
    { id: 2, content: "Tailwind CSS es genial!", username: "usuario2", name: "Ana Gómez" },
  ];

  return (
    <div className="flex-1">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}