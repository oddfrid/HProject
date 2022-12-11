// TODO
// Разобраться с классами
// Если не выбрана аватарка:
// >Либо ставить какую-то дефолтную
// Либо выводить первую букву Имени/логина

// import { useState } from "react"

enum EType {
  avatar = "avatar",
  icon = "icon",
}

export interface IImageIconProps {
  type: "avatar" | "icon"
  isClickable?: boolean
  isActive?: boolean
  classProps?: string
  handleClick?: any
  children?: React.ReactNode
}

const defaultClassNames =
  "w-9 h-9 rounded-full transition-all duration-300 focus-visible:ring-2 ring-offset-4 ring-primary/50 ring-offset-inherit outline-none relative"
const avatarClasses = "bg-blue-400"
const iconClasses = ""
const activeClasses = "ring-2"

export const ImageIcon: React.FC<IImageIconProps> = ({
  type,
  classProps,
  isClickable = false,
  isActive = false,
  handleClick,
  children,
}: IImageIconProps) => {
  const cointerClass = isClickable ? "cursor-pointer" : "cursor-auto"
  const byTypeClasses = type === EType.avatar ? avatarClasses : iconClasses
  const activeClasses = isActive ? "ring-2" : ""

  const classNames = `${defaultClassNames} ${cointerClass} ${classProps} ${byTypeClasses} ${activeClasses}`

  return (
    <button
      className={classNames}
      disabled={!isClickable}
      onClick={isClickable ? handleClick : undefined}
      // onMouseOver={isClickable ? handleClick : undefined}
    >
      {children}
    </button>
  )
}
