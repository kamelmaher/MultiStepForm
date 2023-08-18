import { addShow } from "../../store/ShowSlice"
import { useAppDispatch, useAppSelector } from "../../store/store"

type SubmitProps = {
    show : string,
}
function Submit({show}:SubmitProps) {
    const dispatch = useAppDispatch();
    const next = useAppSelector(next => next.show.next);
    return (
        <div className="d-flex justify-content-between mt-5">
            {
            show == "true" && <button className="btn fw-bold" onClick={()=>{
                dispatch(addShow({show: -1 , next: next}))
            }}>Go Back</button>
            }
            <button onClick={()=> dispatch(addShow({show:1 , next: next}))} className={show == "false" ? "btn btn-success fw-bold ms-auto" : "btn btn-success fw-bold" }>
                Next Step
            </button>
        </div>
    )
}

export default Submit
