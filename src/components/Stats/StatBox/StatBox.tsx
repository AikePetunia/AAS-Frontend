import "./StatBox.css"

type StatBoxProps = {
    title: string;
    number: string | number;
    icon?: string;
    accentColor?: string;
}

export function StatBox({ title, number, icon = "fa-solid fa-store", accentColor = "#a3e635" }: StatBoxProps) {
    return (
        <>
            <div className="sb__container" style={{ "--accent-color": accentColor } as React.CSSProperties}>
                <div className="sb__bg-icon-container" aria-hidden="true">
                    <i className={icon}></i>
                </div>

                <div className="sb__content">
                    <div className="sb__title-container">
                        <h5 className="sb__title">{title}</h5>
                        <i className={icon}></i>
                    </div>
                    <div className="sb__number-container">
                        <span className="sb__number">{number}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatBox