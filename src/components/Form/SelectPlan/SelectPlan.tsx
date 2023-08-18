// import { useState } from "react"
import { useState } from "react"
import FormTitle from "../FormTitle"
import Submit from "../Submit"
import SelectPlanCard from "./SelectPlanCard"
import img1 from "../images/icon-arcade.svg" 
import img2 from "../images/icon-advanced.svg"
import img3 from "../images/icon-pro.svg"
import { useAppDispatch } from "../../../store/store"
import { setPlan, setPrice } from "../../../store/PlanSlice"
function SelectPlan() {
  type PlaneCard = {
    text: string,
    price:number
    img: string
  }
  const Cards: PlaneCard[] = [{ text: "Arcade", price: 9, img:img1 }, { text: "Advanced", price: 12, img: img2 }, { text: "PRO", price: 15, img:img3}];
  const [activeIndex, setActiveIndex] = useState(10);
  const dispatch = useAppDispatch();
  return (
    <form >
      <FormTitle title="Select Your Plan" par="" />
      <div className="row mb-5">
        {Cards.map((e , index) => {
          return <div className="col-md-4">
            <SelectPlanCard key={index} id={index}
            active={activeIndex === index}
            text={e.text}
            price={e.price}
            img={e.img}
            onClick={(id)=> {
            setActiveIndex(id);
            dispatch(setPrice(e.price));
            }}/>
          </div>
        })}
      </div>
      <div className="plan p-3">
        <ul className="w-50 fw-bold m-auto list-unstyled d-flex gap-3">
          <li>Monthly</li>
          <li>
            <label className="switch">
              <input type="checkbox" onChange={(e) => dispatch(setPlan(e.target.checked ? "yearly" : "monthly"))}/>
              <span className="slider round"></span>
            </label>
          </li>
          <li>Yearly</li>
        </ul>
      </div>
      <Submit show="true"/>
    </form>
  )
}

export default SelectPlan
