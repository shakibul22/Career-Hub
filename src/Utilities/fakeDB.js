
// use local storage to manage cart data
const addToDb = id => {

      let appliedJobs = {};

      // Get Previous Data From Local Storage
      const storedAppliedJobs = localStorage.getItem('applied-Jobs')
      if(storedAppliedJobs){
        appliedJobs = JSON.parse(storedAppliedJobs)
      }


      // Add Quantity

      const quantity = appliedJobs[id]
      
      if(quantity){
        const newQuantity = quantity + 1
        appliedJobs[id] = newQuantity
      }else{
        appliedJobs[id] = 1
      }
      localStorage.setItem('applied-Jobs', JSON.stringify(appliedJobs))
      
    }

const getStoredJobsData = ()=>{
       let appliedJobs = {}
      const storedJobs = localStorage.getItem('applied-Jobs')
      if(storedJobs){
        appliedJobs = JSON.parse(storedJobs)
      }
      return appliedJobs
}

  const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart)
      if (id in shoppingCart) {
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      }
    }
  }
  
  const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
  }
  
  export { addToDb, getStoredJobsData, removeFromDb, deleteShoppingCart }
  