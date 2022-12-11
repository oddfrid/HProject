import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex justify-around items-center h-[calc(100vh-13rem)] p-48">
      <button className="w-1/5 border border-2 border-blue-400 p-4 rounded">
        <h2 className="text-3xl">
          Выбери рецепт <br />
          по вкусу
        </h2>
        <div className="text-3xl mt-4">​🍱​😋​🍕​</div>
      </button>
      ➡️
      <button className="w-1/5 border border-2 border-blue-400 p-4 rounded">
        <h2 className="text-3xl">Узнай о его ингредиентах</h2>
        <div className="text-3xl mt-4">​🍅​🦑​🥕​</div>
      </button>
      ➡️
      <button className="w-1/5 border border-2 border-blue-400 p-4 rounded">
        <h2 className="text-3xl">Закажи в один клик</h2>
        <div className="text-3xl mt-4">​👨‍🍳​💻​🛒​</div>
      </button>
    </div>
  )
}
