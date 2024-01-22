import { Link } from '../Link'
export default function Page404 () {
  return (
    <>
      <h1>Page not Found</h1>
      <img src='https://thumbs.dreamstime.com/z/error-page-not-found-glitch-effect-screen-vector-illustration-your-design-114821212.jpg' alt='Page not found image' />
      <Link to='/'>Go to home</Link>
    </>
  )
}
