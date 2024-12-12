import PropTypes from 'prop-types'

const Movie = (props) => {
  return (
    <div>
      <div className=' border-4 border-x-indigo-500 border-y-red-500 w-full h-48 sm:h-64'>
        <img className='object-cover w-full h-full' src={props.img} alt={props.heading} />
      </div>
      <h3 className='mt-2 font-semibold text-2xl'>{props.heading}</h3>
      <span className='text-xl'>{props.topic}</span>
    </div>

  )
}
Movie.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired
}

export default Movie




