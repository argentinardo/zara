import type { StorageOption } from '@/types/phone'
interface StorageTabsProps {
    storageOptions: StorageOption[]
    onSelectStorage: (price: number, capacity: string) => void
}

const StorageTabs = ({ storageOptions, onSelectStorage }: StorageTabsProps) => {
    return (
        <div className="storage">
            <div className="storage__text">
                Storage ¿hOW MUCH SPACE DO YOU NEED?
            </div>
            <div className="storage__tabs">
                {storageOptions.map((item) => (
                    <button
                        key={item.capacity}
                        className="storage__tabs-btn"
                        type="button"
                        onClick={() => onSelectStorage(item.price, item.capacity)}
                    >
                        {item.capacity}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default StorageTabs
