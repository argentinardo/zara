import { useEffect, useState } from 'react'
import { productsService } from '@/services'
import type { PhoneListItem } from '@/types'
import PhoneItem from '../PhoneItem'

const PhoneList = () => {
    const [list, setList] = useState<PhoneListItem[]>([])
    useEffect(() => {
        productsService.getProducts().then((data) => {
            setList(data)
        })
    }, [])
    const listCleanner = ()=>{
        return list.filter(
            (phone, index, self) =>
              index === self.findIndex(p => p.id === phone.id)
          );
    }
    const listUnique = listCleanner();
    return (
        <div className="phone-list">
            {listUnique.map((phone: PhoneListItem) => (
                <PhoneItem key={phone.id} phone={phone}  />
            ))}
        </div>
    )
}

export default PhoneList