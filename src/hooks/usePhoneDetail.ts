import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Phone } from '@/types'
import { productsService } from '@/services'
import { CartContext } from '@/context/CartContext'

const defaultPhone: Phone = {
  id: '',
  brand: '',
  name: '',
  description: '',
  basePrice: 0,
  rating: 0,
  specs: {
    screen: '',
    resolution: '',
    processor: '',
    mainCamera: '',
    selfieCamera: '',
    battery: '',
    os: '',
    screenRefreshRate: '',
  },
  colorOptions: [],
  storageOptions: [],
  similarProducts: [],
}

export const usePhoneDetail = (id: string) => {
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  const [phone, setPhone] = useState<Phone>(defaultPhone)
  const [colorUrl, setColorUrl] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [storagePrice, setStoragePrice] = useState(0)
  const [selectedStorage, setSelectedStorage] = useState('')

  useEffect(() => {
    setSelectedColor('')
    setSelectedStorage('')
    setStoragePrice(0)
    productsService.getProductById(id).then((data) => {
      if (data) {
        setPhone(data)
        setColorUrl(data.colorOptions[0]?.imageUrl ?? '')
      }
    })
  }, [id])

  const handleColor = (imageUrl: string, colorName: string) => {
    setColorUrl(imageUrl)
    setSelectedColor(colorName)
  }

  const handleStorage = (price: number, capacity: string) => {
    setStoragePrice(price)
    setSelectedStorage(capacity)
  }

  const handleAddToCart = () => {
    addToCart({
      cartItemId: '',
      brand: phone.brand,
      name: phone.name,
      price: storagePrice,
      storage: selectedStorage,
      color: selectedColor,
      colorUrl,
    })
    navigate('/cart')
  }

  const displayedImageUrl = colorUrl || phone.colorOptions[0]?.imageUrl || ''
  const canAddToCart = !!selectedColor && !!selectedStorage

  return {
    phone,
    displayedImageUrl,
    selectedColor,
    selectedStorage,
    storagePrice,
    canAddToCart,
    handleColor,
    handleStorage,
    handleAddToCart,
  }
}
