import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Phone } from '@/types'
import { productsService } from '@/services'
import { CartContext } from '@/context/CartContext'
import MainButton from '../MainButton'
import Storage from '../Storage'
import ColorSelector from '../ColorSelector'
import SimilarItems from '../SimilarItems'

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

interface PhoneSpecsProps {
  id: string
}

const PhoneSpecs = ({ id }: PhoneSpecsProps) => {
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  const [specsData, setSpecsData] = useState<Phone>(defaultPhone)
  const [colorUrl, setColorUrl] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [storagePrice, setStoragePrice] = useState(0)
  const [selectedStorage, setSelectedStorage] = useState('')

  useEffect(() => {
    productsService.getProductById(id).then((data) => {
      if (data) {
        setSpecsData(data)
        const first = data.colorOptions[0]
        setColorUrl(first.imageUrl)
        setSelectedColor(first.name)
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
      cartItemId: "",
      brand: specsData.brand,
      name: specsData.name,
      price: storagePrice,
      storage: selectedStorage,
      color: selectedColor,
      colorUrl: colorUrl,
    })
    navigate('/cart')
  }

  const {
    name,
    brand,
    description,
    basePrice,
    specs: {
      screen,
      resolution,
      processor,
      mainCamera,
      selfieCamera,
      battery,
      os,
      screenRefreshRate,
    },
    colorOptions,
    storageOptions,
    similarProducts,
  } = specsData

  const displayedImageUrl = colorUrl || colorOptions[0]?.imageUrl || ''

  return (
    <div className="phoneSpecs">
      <div className="phoneSpecs__hero">
        <img className="phoneSpecs__hero-img" src={displayedImageUrl} alt={name} />
        <div className="phoneSpecs__hero-panel">
          <div className="phoneSpecs__hero-title">{name}</div>
          <div className="phoneSpecs__hero-subtilte">
            {storagePrice ? storagePrice : `From ${basePrice}`} EUR
          </div>
          <Storage
            storageOptions={storageOptions}
            onSelectStorage={handleStorage}
          />
          <ColorSelector
            action={handleColor}
            colorOption={colorOptions}
          />
          <MainButton full light action={handleAddToCart}>Añadir</MainButton>
        </div>
      </div>
      <div className="phone-specs__details">
        <div className="phone-specs__details-title">SPECIFICATIONS</div>
        <div className="phone-specs__details-list">
          <div className="phone-specs__details-list-item">
            <span>BRAND</span>
            {brand}
          </div>
          <div className="phone-specs__details-list-item">
            <span>NAME</span>
            {name}
          </div>
          <div className="phone-specs__details-list-item">
            <span>DESCRIPTION</span>
            {description}
          </div>
          <div className="phone-specs__details-list-item">
            <span>SCREEN</span>
            {screen}
          </div>
          <div className="phone-specs__details-list-item">
            <span>RESOLUTION</span>
            {resolution}
          </div>
          <div className="phone-specs__details-list-item">
            <span>PROCESSOR</span>
            {processor}
          </div>
          <div className="phone-specs__details-list-item">
            <span>MAIN CAMERA</span>
            {mainCamera}
          </div>
          <div className="phone-specs__details-list-item">
            <span>SELFIE CAMERA</span>
            {selfieCamera}
          </div>
          <div className="phone-specs__details-list-item">
            <span>BATTERY</span>
            {battery}
          </div>
          <div className="phone-specs__details-list-item">
            <span>OS</span>
            {os}
          </div>
          <div className="phone-specs__details-list-item">
            <span>SCREEN REFRESH RATE</span>
            {screenRefreshRate}
          </div>
        </div>
      </div>
      <SimilarItems similarProducts={similarProducts} />
    </div>
  )
}

export default PhoneSpecs
