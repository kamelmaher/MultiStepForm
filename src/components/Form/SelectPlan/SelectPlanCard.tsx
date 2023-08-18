import { useAppSelector } from "../../../store/store"

// import img from "../images/icon-arcade.svg"
type CardProps = {
    text: string,
    price:number,
    active:boolean,
    id:number,
    img: string
    onClick: (id:number)=>void
}
function SelectPlanCard({text , price , onClick , active , id , img}:CardProps) {
    const plane = useAppSelector(state => state.plan.plan)
    return (
    <>
            <div className={active ? "card p-2 pb-3 select-card active" : "card p-2 pb-3 select-card"} onClick={()=>onClick(id)}>
            <img src={img} className="card-img-top "/>
            <div className="pt-4 ps-2">
                <h5 className="card-title mb-0 fs-6 fw-bold">{text}</h5>
                    <p className="card-text">${price}/{plane == "monthly" ? "Month" : "Year"}</p>
            </div>
        </div>
    </>
    )
}

export default SelectPlanCard
