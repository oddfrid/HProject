import Link from "next/link"
import { UrlObject } from "url"
import { Dropdown } from "../../dropdowns/Dropdown"
import { ImageIcon } from "../../imageIcon/ImageIcon"
import { ImageIconDropdown } from "../../imageIconDropdown/ImageIconDropdown"

const url: string = "/"
const isAuthd = true
interface IListProps {
  icon?: React.ReactNode
  url: UrlObject | string
  text: string
}
const ListEx: IListProps[] = [
  {
    url: "/",
    text: "Мой профиль",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    url: "/",
    text: "Мои покупки",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
      </svg>
    ),
  },
  {
    url: "/",
    text: "Выйти",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]
export const Header: React.FC = () => {
  return (
    <header>
      <div className="flex justify-between items-center bg-slate-200 h-12">
        <div className="my-outline mx-5">
          <Link href={url} className="my-link my-outline">
            Logo
          </Link>
        </div>
        <nav className="hidden md:flex w-5/6  justify-between items-center">
          <nav className="w-1/4 flex  justify-around items-center">
            <Link href={url} className="my-link my-outline">
              Продукты
            </Link>
            <Link href={url} className="my-link my-outline">
              Рецепты
            </Link>
          </nav>
          <nav className="w-1/3 flex justify-end items-center">
            <nav className="flex justify-around items-center">
              <Link href={url} className="my-link my-outline mx-5">
                FAQ
              </Link>
              {!isAuthd && (
                <Link href={url} className="my-link my-outline mx-5">
                  Регистрация
                </Link>
              )}
              {!isAuthd && (
                <Link href={url} className="my-link my-outline mx-5">
                  Войти
                </Link>
              )}
            </nav>
            {isAuthd && (
              <div className="mx-5 flex items-center">
                {/* <ImageIcon classProps="" isClickable type="avatar" /> */}
                <ImageIconDropdown
                  infoType="links"
                  isClickable
                  type="icon"
                  list={ListEx}
                />
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
            className="w-6 h-6 my-link my-outline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </ImageIcon>
      </div>
    </header>
  )
}
