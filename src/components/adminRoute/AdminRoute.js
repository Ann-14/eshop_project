
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectEmail } from '../../redux/slice/authSlice'

export const AdminRoute = ({children}) => {
    const userEmail = useSelector(selectEmail)

    if(userEmail === 'test2@gmail.com')
    {return children}else{
        return (
            <section>
                <h2>Acces denied</h2>
                <h4>Only Site administrator(s) have acces to this page.</h4>
                <Link to='/'>
                <button>&larr; Back to Home</button></Link>
            </section>
        )
    }
}
export const AdminLink = ({children}) => {
    const userEmail = useSelector(selectEmail)

    if(userEmail === 'test2@gmail.com')
    {return children}else{
        return null
    }
}
