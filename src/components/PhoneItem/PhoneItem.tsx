import type { PhoneListItem } from '@/types'


const handleGetId = (id:string)=> {
  console.log(id)
}

interface PhoneItemProps {
  phone: PhoneListItem
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const { id, name, brand, imageUrl, basePrice } = phone
  return (
    <div className="phone-item" onClick={()=>handleGetId(id)}>
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
    </div>
  )
}
export default PhoneItem