import React, { useState } from "react"
import classsames from "classnames"
import { ChevronDown } from "react-feather"

const Dropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")

  const selected = selectedItem?.value || "Select"

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown">
      <div
        className={classsames("dropdown-top d-flex align-items-center", {
          open: isOpen,
        })}
        onClick={handleToggle}
      >
        <span className="title">{selected}</span>
        <span className="icon">
          <ChevronDown size={20} />
        </span>
      </div>
      {isOpen && (
        <div
          className={classsames("dropdown-menu d-flex flex-wrap", {
            open: isOpen,
          })}
        >
          {options.map(({ id, value }) => (
            <div
              className="chip-item"
              key={id}
              onClick={() => {
                onChange({ id, value })
                setSelectedItem({ id, value })
              }}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
