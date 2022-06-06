import React from "react"
import { FiltersNavbar } from "./CouchFilters.style"
import Dropdown from "components/General/Dropdown"

const options = [
  { id: 1, value: "Alle" },
  { id: 2, value: "Abnehmen" },
  { id: 3, value: "Gesunde Ernährung" },
  { id: 4, value: "Muskelaufbau" },
]

const CouchFilters = () => {
  const onChange = (item) => {
    console.log(item)
  }

  return (
    <FiltersNavbar className="d-flex align-items-center">
      <div className="d-flex flex-wrap left">
        <Dropdown options={options} onChange={onChange} />
        <Dropdown options={options} onChange={onChange} />
        <Dropdown options={options} onChange={onChange} />
      </div>
      <button className="btn-secondary">Nächsten freien Termin buchen</button>
    </FiltersNavbar>
  )
}

export default CouchFilters
