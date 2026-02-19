import { usePhoneDetail } from '@/hooks/usePhoneDetail'
import MainButton from '../MainButton'
import Storage from '../Storage'
import ColorSelector from '../ColorSelector'
import SimilarItems from '../SimilarItems'

interface PhoneSpecsProps {
  id: string
}

const PhoneSpecs = ({ id }: PhoneSpecsProps) => {
  const {
    phone,
    displayedImageUrl,
    selectedColor,
    selectedStorage,
    storagePrice,
    canAddToCart,
    handleColor,
    handleStorage,
    handleAddToCart,
  } = usePhoneDetail(id)

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
  } = phone

  return (
    <>
    <div className="phone-specs">
      <div className="phone-specs__hero">
        <img className="phone-specs__hero-img" src={displayedImageUrl} alt={name} />
        <div className="phone-specs__hero-panel">
          <div className="phone-specs__hero-title">{name}</div>
          <div className="phone-specs__hero-subtitle">
            {storagePrice ? storagePrice : `From ${basePrice}`} EUR
          </div>
          <Storage
            storageOptions={storageOptions}
            selectedStorage={selectedStorage}
            onSelectStorage={handleStorage}
          />
          <ColorSelector
            action={handleColor}
            colorOption={colorOptions}
            selectedColor={selectedColor}
          />
          <MainButton 
            disabled={!canAddToCart}
            full
            action={handleAddToCart}
          >Añadir</MainButton>
        </div>
      </div>
      <div className="phone-specs__details">
        <div className="phone-specs__details-title">SPECIFICATIONS</div>
        <div className="phone-specs__details-list">
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">BRAND</span>
            {brand}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">NAME</span>
            {name}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">DESCRIPTION</span>
            {description}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">SCREEN</span>
            {screen}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">RESOLUTION</span>
            {resolution}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">PROCESSOR</span>
            {processor}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">MAIN CAMERA</span>
            {mainCamera}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">SELFIE CAMERA</span>
            {selfieCamera}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">BATTERY</span>
            {battery}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">OS</span>
            {os}
          </div>
          <div className="phone-specs__details-list-item">
            <span className="phone-specs__details-list-first">SCREEN REFRESH RATE</span>
            {screenRefreshRate}
          </div>
        </div>
      </div>
    </div>
    <SimilarItems similarProducts={similarProducts} />
  </>
  )
}

export default PhoneSpecs
