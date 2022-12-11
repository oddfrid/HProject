import Link from "next/link"
import { UrlObject } from "url"

enum EInfoType {
  links = "links",
  btns = "btns",
}

enum EMarkerType {
  marker = "marker",
  icon = "icon",
  none = "none",
}

interface IListProps {
  icon?: React.ReactNode
  url: UrlObject | string
  text: string
}

export interface IDropdownItemProps {
  markerType?: "marker" | "icon" | "none"
  icon?: React.ReactNode
  text?: string
}

export interface IDropdownProps {
  list: IListProps[]
  markerType?: "marker" | "icon" | "none"
  classProps?: string
  children?: React.ReactNode
  infoType: "links" | "btns"
  isHidden?: boolean
}

const defaultClassNames =
  "rounded flex-col justify-center items-center bg-slate-200 w-48 "

const DropItem: React.FC<IDropdownItemProps> = ({ markerType, icon, text }) => {
  return (
    <>
      {markerType === EMarkerType.icon && <div className="mr-3">{icon}</div>}
      <div className="">{text}</div>
    </>
  )
}

export const Dropdown: React.FC<IDropdownProps> = ({
  list,
  classProps,
  markerType = "none",
  infoType,
  isHidden = false,
}) => {
  const hidden = isHidden ? "hidden" : ""
  const classNames = `${defaultClassNames} ${hidden}`

  return (
    <div className="z-40 absolute top-14 right-1 transition-opacity duration-500">
      <ul className={classNames}>
        {list.map((item, _index) => {
          return (
            <>
              {infoType === EInfoType.links && (
                <Link
                  key={_index + 1}
                  href={item.url}
                  className=" outline-primary/50 outline-1 flex items-center px-3 py-2 my-link hover:bg-slate-300 first:rounded-t last:rounded-b"
                >
                  <DropItem
                    markerType={markerType}
                    icon={item.icon}
                    text={item.text}
                  />
                </Link>
              )}
              {infoType === EInfoType.btns && (
                <button
                  className="flex items-center px-3 py-2  text-slate-500 hover:bg-slate-300 first:rounded-t last:rounded-b w-full"
                  key={_index + 2}
                >
                  <DropItem
                    markerType={markerType}
                    icon={item.icon}
                    text={item.text}
                  />
                </button>
              )}
            </>
          )
        })}
      </ul>
    </div>
  )
}
