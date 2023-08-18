import { addNext, addShow } from "../../store/ShowSlice";
import { useAppDispatch } from "../../store/store";
import FormTitle from "./FormTitle"
import Submit from "./Submit";
import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z.string().nonempty({message: "Name is required"}).min(3),
  email: z.string().nonempty({ message: "Email is required"}).email(),
  phone: z.string().regex(/^\+\d{1,}$/ , {message: "Invalid Phone Number"}).nonempty({message: "phone is required"})
})
export type PersonlForm = z.infer<typeof schema> 
function PersonalForm() {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PersonlForm>({ resolver: zodResolver(schema) })
  return (
    <form onSubmit={handleSubmit(e => {
      console.log(e);
      dispatch(addNext(true));
      dispatch(addShow({ show: 1, next: 1 }))
      reset();
    })}>
      <FormTitle title="Personal Plan" par="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
      <div className="form-input mb-4">
        <label className="form-label">Name</label>
        <input {...register("name")} type="text" className="form-control" name="name"/>
        {errors.name?.message && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="form-input mb-4">
        <label className="form-label">Email</label>
        <input type="text" {...register("email")} className="form-control" name="email" />
        {errors.email?.message && <p className="text-danger">{errors.email.message}</p>}
      </div>
      <div className="form-input mb-4">
        <label className="form-label">Phone Number</label>
        <input type="text" {...register("phone")} className="form-control" name="phone" placeholder="e.g +123456789" />
        {errors.phone?.message && <p className="text-danger">{errors.phone.message}</p>}
      </div>
      <Submit show="false"/>
    </form>
  )
}

export default PersonalForm
