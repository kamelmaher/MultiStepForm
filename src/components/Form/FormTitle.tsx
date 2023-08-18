type FormTitleProps = {
    title: string,
    par: string
}
function FormTitle({title}: FormTitleProps) {
    return (
        <div className="mb-5">
            <h2 className="title">{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
    )
}

export default FormTitle
