// TODO
// Разобраться с классами
// Если не выбрана аватарка:
// >Либо ставить какую-то дефолтную
// Либо выводить первую букву Имени/логина

enum EType {
  avatar = "avatar",
  icon = "icon",
}

interface IProps {
  type: "avatar" | "icon"
  isClickable?: boolean
  classProps?: string
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

const defaultClassNames =
  "w-9 h-9 rounded-full transition-all duration-300 focus:ring-2 ring-offset-4 ring-primary/50 ring-offset-inherit outline-none"

const avatarClasses = "bg-blue-400"
const iconClasses = ""

export const ImageIcon: React.FC<IProps> = ({
  type,
  classProps,
  isClickable = false,
  handleClick,
  children,
}: IProps) => {
  const cointerClass = isClickable ? "cursor-pointer" : "cursor-auto"
  const byTypeClasses = type === EType.avatar ? avatarClasses : iconClasses

  const classNames = `${defaultClassNames} ${cointerClass} ${classProps} ${byTypeClasses}`

  return (
    <button
      className={classNames}
      disabled={!isClickable}
      onClick={isClickable ? handleClick : undefined}
    >
      {children}
    </button>
  )
}
