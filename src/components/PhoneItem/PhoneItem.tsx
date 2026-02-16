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
      <div className="phone-item__footer">
          <div className="phone-item__footer-model">
              <h3>{brand}</h3>
              <h1>{name}</h1>
          </div>
          <div className="phone-item__footer-price">
              {basePrice}
          </div>
      </div>
    </NavLink>
  )
}

export default PhoneItem