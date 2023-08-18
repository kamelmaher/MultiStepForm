import './App.css'
import Form from './components/Form'
import List from './components/List'
function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row wrapper">
          <div className="col-md-3">
            <List />
          </div>
          <div className="col-md-7">
            <Form /> 
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
