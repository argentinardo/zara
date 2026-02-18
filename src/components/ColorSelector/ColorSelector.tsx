import {ColorOption} from '@/types/phone'
import styles from './ColorSelector.module.css'

interface ColorSelectorProps {
    colorOption : ColorOption[],
    action: (imageUrl: string, name: string) => void
}

const ColorSelector = ({colorOption, action} : ColorSelectorProps) => {
  return (
    <div className={styles['color-selector']}>
        <div className="color-selector__text">color. pick your favourite.</div>
        <ul role="list" className="color-selector__tabs">
            {colorOption.map((item) => (
            <li key={item.name}>
                <button
                className='color-selector__tabs-tab'
                style={{ backgroundColor: item.hexCode }}
                onClick={() => action(item.imageUrl, item.name)}
                >
                </button>
                <p className="color-selector__name">{item.name}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}
export default ColorSelector