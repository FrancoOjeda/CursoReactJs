import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre Nosotros',
    desciption: 'Hola! Me llamo Franco y estoy creando un clon de React Router con Midudev'
  },
  en: {
    title: 'About Us',
    desciption: 'Hello! My name is Franco and I am creating a clone of React Router with Midudev'
  }
}
const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}
export default function About ({ routeParams }) {
  const i18n = useI18n(routeParams.lang || 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <img src='https://picfiles.alphacoders.com/300/thumb-1920-300273.jpg' alt='Foto de gatito en la compu' />
      <p>{i18n.desciption}</p>
      <Link to='/'>Ir a Home</Link>
    </>
  )
}
