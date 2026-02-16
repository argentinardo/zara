interface PhoneSpecsProps {
    id: string
}

const PhoneSpecs = ({ id }: PhoneSpecsProps) => {
    return (
        <div className="phoneSpecs">
            <div className="phoneSpecs__hero">
                <div className="phoneSpecs__hero-img">

                </div>
                <div className="phoneSpecs__hero-panel">
                    <div className="phoneSpecs__hero-title">{id}</div>
                    <div className="phoneSpecs__hero-subtilte"></div>
                    <div className="phoneSpecs__hero-storage">
                        <div className="phoneSpecs__hero-storage-text"></div>
                        <ul role="list" className="phoneSpecs__hero-storage-tabs">
                            <li className="phoneSpecs__hero-storage-tab"><button></button></li>
                            <li className="phoneSpecs__hero-storage-tab"><button></button></li>
                            <li className="phoneSpecs__hero-storage-tab"><button></button></li>
                        </ul>
                    </div>
                    <div className="phoneSpecs__hero-color">
                        <div className="phoneSpecs__hero-color-text"></div>
                        <ul role="list" className="phoneSpecs__hero-color-tabs">
                            <li className="phoneSpecs__hero-color-tab"><button></button></li>
                            <li className="phoneSpecs__hero-color-tab"><button></button></li>
                            <li className="phoneSpecs__hero-color-tab"><button></button></li>
                        </ul>
                    </div>
                    <button className="phoneSpecs__hero-add">
                        añadir
                    </button>
                </div>
            </div>

        </div>

    )
}
export default PhoneSpecs