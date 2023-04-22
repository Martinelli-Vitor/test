import PropTypes from 'prop-types'

function Items({type,descr,price}){

    return(
        <>
            <li>{type} - {descr} - R${price}</li>
        </>
    )
}

Items.propTypes = {
    type: PropTypes.string.isRequired,
    descr: PropTypes.string,
    price: PropTypes.number.isRequired
}

export default Items