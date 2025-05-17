export default function Tweet({ content, username, name }) {
  return (
    <div className="p-4 border-b border-neutral-700">
      <div className="flex items-start space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div>
          <div className="font-bold">{name} <span className="text-gray-300 font-normal">@{username}</span></div>
          <p>{content}</p>
          <div className="flex space-x-4 mt-2 text-gray-500">
            <button>❤️</button>
            <button>🔄</button>
            <button>💬</button>
          </div>
        </div>
      </div>
    </div>
  );
}