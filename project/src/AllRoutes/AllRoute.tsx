
import { Route, Routes } from 'react-router-dom'
import MovieListPage from '../Pages/MovieList'
import LoginPage from '../Auth/Login'
import SignUp from '../Auth/Auth'

const AllRoute = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<MovieListPage />} />
        <Route path='/auth' element={<SignUp />} />
        <Route path='/login' element={<LoginPage />} />
    </Routes>
   
    </div>
  )
}

export default AllRoute
