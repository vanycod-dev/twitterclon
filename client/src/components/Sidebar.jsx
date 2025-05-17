export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 p-4 border-r border-neutral-700">
      <div className="text-2xl font-bold text-blue-500 mb-8">Twitter Clone</div>
      <nav>
        <ul className="space-y-4">
          <li className="hover:bg-neutral-500 p-2 rounded-full cursor-pointer">Inicio</li>
          <li className="hover:bg-neutral-500 p-2 rounded-full cursor-pointer">Explorar</li>
          <li className="hover:bg-neutral-500 p-2 rounded-full cursor-pointer">Notificaciones</li>
          <li className="hover:bg-neutral-500 p-2 rounded-full cursor-pointer">Mensajes</li>
          <button className="bg-blue-500 text-white rounded-full py-2 px-4 w-full mt-4 hover:bg-blue-600">
            Twittear
          </button>
        </ul>
      </nav>
    </div>
  );
}