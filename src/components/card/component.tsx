import './card.style.css'

export const Card = ({children}:{children:JSX.Element}) => {
    return (
        <div className='container-card'>
            {children}
        </div>
    )
}