import { useAppSelector } from "../../store/store"
import FormTitle from "./FormTitle"
import Submit from "./Submit"
function Summary() {
  const plan = useAppSelector(state => state.plan.plan);
  return (
    <div className="summary">
      <FormTitle title="Finishing Up" par="" />
      <div className="summary-div">
        <ul className="p-0">
          <li className="d-flex justify-content-between list-unstyled fw-bold">
            <div>
              <p>Arcade ({plan == "monthly" ? "Monthly" : "Yearly"})</p>
              <a href="#">Change</a>
            </div>
            <div>
              $9/{plan == "monthly" ? "Month" : "Year"}
            </div>
          </li>
          <hr />
          <li className="d-flex justify-content-between list-unstyled">
            <p>Arcade (Monthly)</p>
            <p>$9/{plan == "monthly" ? "Month" : "Year"}</p>
          </li>
          <li className="d-flex justify-content-between list-unstyled">
            <p>Online Shipping</p>
            <p>$9/{plan == "monthly" ? "Month" : "Year"}</p>
          </li>
        </ul>
      </div>
      <div className="total d-flex justify-content-between">
        <p>Total (per {plan == "monthly" ? "Month" : "Year"})</p>
        <p className="">$18</p>
      </div>
      <Submit show="true"/>
    </div>
  )
}

export default Summary
