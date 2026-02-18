import type { SimilarProduct } from '@/types'
import PhoneItem from '../PhoneItem'

const MAX_SIMILAR = 6

interface SimilarItemsProps {
  similarProducts: SimilarProduct[]
}

const SimilarItems = ({ similarProducts }: SimilarItemsProps) => {
  const items = similarProducts.slice(0, MAX_SIMILAR)

  if (items.length === 0) return null

  return (
    <section className="similar-items">
      <h2 className="similar-items__title">SIMILAR ITEMS</h2>
      <div className="similar-items__slider">
        {items.map((product) => (
          <PhoneItem key={product.id} phone={product} />
        ))}
      </div>
    </section>
  )
}
export default SimilarItems
