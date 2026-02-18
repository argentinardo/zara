import type { PhoneListItem } from '@/types'
import { NavLink } from 'react-router-dom'

interface PhoneItemProps {
  phone: PhoneListItem
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const { id, name, brand, imageUrl, basePrice } = phone
  return (
    <NavLink className="phone-item" to={`/products/${id}`}>
      <img className="phone-item__img" src={imageUrl} alt={`${brand} ${name}`} />
      <h3 className="phone-item__brand">{brand}</h3>
      <div className="phone-item__footer">
          <span className="phone-item__name">{name}</span>{basePrice} EUR
      </div>
    </NavLink>
  )
}

export default PhoneItem