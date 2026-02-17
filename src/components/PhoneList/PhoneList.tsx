import { useCallback, useEffect, useState } from 'react'
import { productsService } from '@/services'
import type { PhoneListItem } from '@/types'
import Searcher from '@/components/Searcher/Searcher'
import PhoneItem from '../PhoneItem'

const PhoneList = () => {
  const MAX_PHONES = 20
  const [list, setList] = useState<PhoneListItem[]>([])

  useEffect(() => {
    productsService.getProducts().then((data) => setList(data))
  }, [])

  const handleSearch = useCallback(async (term: string) => {
    const data = await productsService.getProducts(term || undefined)
    setList(data)
  }, [])

  const listUnique = list.filter(
    (phone, index, self) => index === self.findIndex((p) => p.id === phone.id),
  )

  const visiblePhones = listUnique.slice(0, MAX_PHONES)

  return (
    <section className="phone-list">
      <Searcher onSearch={handleSearch} resultsCount={visiblePhones.length} />
      <div className="phone-list__grid">
        {visiblePhones.map((phone: PhoneListItem) => (
          <PhoneItem key={phone.id} phone={phone} />
        ))}
      </div>
    </section>
  )
}

export default PhoneList