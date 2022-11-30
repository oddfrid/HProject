enum EMarkerType {
  marker = "marker",
  icon = "icon",
  none = "none"
}

interface IProps {
  list: string[];
  markerType?: "marker" | "icon" | "none",
  classProps?: string
  children?: React.ReactNode
}

const defaultClassNames =
  "w-9 h-9 rounded-full transition-all duration-300 focus:ring-2 ring-offset-4 ring-primary/50 ring-offset-inherit outline-none"

export const Dropdown: React.FC<IProps> = ({
  list,
  classProps,
  markerType = "none",
  children
}) => {
  const classNames = `${defaultClassNames} ${classProps}`

  return (
    <ul className="flex-col justify-center items-center">
      {list.map((item, _index) => {
        return (
          <li key={_index} className="flex items-center">
            {markerType === EMarkerType.icon && <div>{children}</div>} <div>{item}</div> 
          </li>
        )
      })}
    </ul>
  )
}
