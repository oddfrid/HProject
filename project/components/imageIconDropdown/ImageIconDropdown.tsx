"use client"

import { useEffect, useRef, useState } from "react"
import { Dropdown, IDropdownProps } from "../dropdowns/Dropdown"
import { ImageIcon, IImageIconProps } from "../imageIcon/ImageIcon"

export const ImageIconDropdown: React.FC<IImageIconProps & IDropdownProps> = (
  props
) => {
  const [active, setActive] = useState(false)

  const handle = () => {
    setActive(!active)
  }

  function close() {
    setActive(false)
  }

  return (
    <div className="flex" onBlur={close}>
      <ImageIcon
        classProps=""
        isClickable
        type="avatar"
        handleClick={handle}
        isActive={active}
      />
      <Dropdown
        markerType="icon"
        list={props.list}
        infoType="links"
        isHidden={!active}
      />
    </div>
  )
}
