import { useAppSelector } from "../store/store"


function List() {
    const active = useAppSelector(state => state.show.show)
    return (
        <div className="p-3 list text-white">
            <ul className="list-unstyled p-3">
                <li className="d-flex align-items-center gap-3 mt-4 mb-5" >
                    <div className={active == 1 ? "counter active" : "counter"}>1</div>
                    <div>
                        <span className= "step">Step 1</span>
                        <p className="fw-bold m-0">Your Info</p>
                    </div>
                </li>
                <li className="d-flex align-items-center gap-3 mb-5 " >
                    <div className={active == 2 ? "counter active" : "counter"}>2</div>
                    <div>
                        <span className= "step">Step 2</span>
                        <p className="fw-bold m-0">Slelct Plan</p>
                    </div>
                </li>
                <li className="d-flex align-items-center gap-3 mb-5" >
                    <div className={active == 3 ? "counter active" : "counter"}>3</div>
                    <div>
                        <span className= "step">Step 3</span>
                        <p className="fw-bold m-0">ADD-ONS</p>
                    </div>
                </li>
                <li className="d-flex align-items-center gap-3 mb-5">
                    <div className={active == 4 ? "counter active" : "counter"}>4</div>
                    <div>
                        <span className= "step">Step 4</span>
                        <p className="fw-bold m-0">Summary</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default List
