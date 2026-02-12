import { useEffect, useState } from 'react'
import { productsService } from '@/services'
import type { PhoneListItem } from '@/types'

const PhoneList = () => {
    const [list, setList] = useState<PhoneListItem[]>([])

    useEffect(() => {
        productsService.getProducts().then((data) => {
            setList(data)
        })
    }, [])

    return (
        <>
            {list.map((phone: PhoneListItem) => (
                <ul key={phone.id}>
                    <li>{phone.name}</li>
                    <li>{phone.basePrice}</li>
                    <li>{phone.brand}</li>
                    <img src={phone.imageUrl} />
                </ul>
            ))}
        </>
    )
}

export default PhoneList