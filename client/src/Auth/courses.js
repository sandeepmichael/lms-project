import React from 'react'


const courses = () => {

const onSubmit = () => {
    localStorage.removeItem("token")
    window.location.href = '/login'
}

    return (
        <div className='App'>
                  <nav class="navbar navbar-dark bg-dark">
  <a  class="navbar-brand" href="/dashboard">Dashboard</a>
</nav>
    
            <h1>courses</h1>
            <div>
  <button style={{marginLeft:'90%'}} type="submit" class="btn btn-danger" onClick={onSubmit}>Logout </button>
  </div>
             <div class="form-group">
    <label for="exampleFormControlTextarea1">Course Page</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="40"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Mark Completed </button>
  
        </div>
   
    )
}

export default courses
