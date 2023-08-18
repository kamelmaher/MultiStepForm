import { useAppSelector } from "../../store/store"
import FormTitle from "./FormTitle"
import Submit from "./Submit"
function AddOns() {
  const plan = useAppSelector(state => state.plan.plan)
  return (
    <div>
      <FormTitle title="Pick Add Ones" par="" />
      <div className="cards">
        <div className="pick mb-4 d-flex">
          <input type="checkbox" id="select" />
          <label className="ms-4 w-100 d-flex justify-content-between align-items-center gap-4" htmlFor="select">
            <div className="fw-bold" >
              <h5 className=" mb-0">Online Service</h5>
              <span className="text-black-50 fs-6">Lorem ipsum dolor sit.</span>
            </div>
            <p className="price">{plan == "yearly" ? "$30/year" : "$3/mo"}</p>
          </label>
        </div>
        <div className="pick mb-4 d-flex">
          <input type="checkbox" id="select2" />
          <label className="ms-4 w-100 d-flex justify-content-between align-items-center gap-4" htmlFor="select2">
            <div className="fw-bold" >
              <h5 className=" mb-0">Larger Storage</h5>
              <span className="text-black-50 fs-6">Lorem ipsum dolor sit.</span>
            </div>
            <p className="price">{plan == "yearly" ? "$20/year" : "$2/mo"}</p>
          </label>
        </div>
        <div className="pick mb-4 d-flex">
          <input type="checkbox" id="select3" />
          <label className="ms-4 w-100 d-flex justify-content-between align-items-center gap-4" htmlFor="select3">
            <div className="fw-bold" >
              <h5 className=" mb-0">customizable Profile</h5>
              <span className="text-black-50 fs-6">Lorem ipsum dolor sit.</span>
            </div>
            <p className="price">{plan == "yearly" ? "$10/year" : "$2/mo"}</p>
          </label>
        </div>
      </div>
      <Submit show="true"/>
    </div>
  )
}

export default AddOns
