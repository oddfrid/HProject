import Link from "next/link"
import { Dropdown } from "../../dropdowns/Dropdown"
import { ImageIcon } from "../../imageIcon/ImageIcon"

const url: string = "/"
const isAuthd = true

export const Header: React.FC = () => {
  return (
    <header>
      <div className="flex justify-between items-center bg-slate-200 h-12">
        <div className="my-outline mx-5">
          <Link href={url} className="my-link">
            Logo
          </Link>
        </div>
        <nav className="hidden md:flex w-5/6  justify-between items-center">
          <nav className="w-1/4 flex  justify-around items-center">
            <Link href={url} className="my-link">
              Продукты
            </Link>
            <Link href={url} className="my-link">
              Рецепты
            </Link>
          </nav>
          <nav className="w-1/3 flex justify-end items-center">
            <nav className="flex justify-around items-center">
              <Link href={url} className="my-link mx-5">
                FAQ
              </Link>
              {!isAuthd && (
                <Link href={url} className="my-link mx-5">
                  Регистрация
                </Link>
              )}
              {!isAuthd && (
                <Link href={url} className="my-link mx-5">
                  Войти
                </Link>
              )}
            </nav>
            {isAuthd && (
              <div className="mx-5 flex items-center">
                <ImageIcon classProps="" isClickable type="avatar" />
              </div>
            )}
          </nav>
        </nav>
        <ImageIcon
          classProps="mx-5 flex items-center justify-center md:hidden"
          isClickable
          type="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 my-link"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </ImageIcon>
      </div>

      <h1 className="mt-3  text-3xl bg-gradient-to-r from-green-300 to-cyan-300 hover:from-green-300 hover:via-red-300 hover:to-cyan-300">
        <span className="">Привет, киса!</span>
      </h1>
      <Dropdown markerType="icon" list={["1", "2"]}>
        -{" "}
      </Dropdown>
    </header>
  )
}
