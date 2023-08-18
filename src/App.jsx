import { useState } from 'react'

const App = () => {
  return (
    <>
      <StarRating maxRating={7} />
      <StarRating />
    </>
  )
}

export default App

function StarRating({ maxRating = 5 }) {
  const [rating, setRating]         = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <>
      <div className='px-5 py-5 mt-10 text-white flex gap-5 items-start justify-center'>
        <div className='flex gap-2'>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={i}
              full={ tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
              onRate={() => setRating( i + 1)}
            />
          ))}
        </div>
        <div className='text-yellow-400 font-bold text-4xl pt-1 w-[100px]'>{ tempRating || rating || "" }</div>
      </div>
      <div className='text-white flex gap-5 items-start justify-center'>
        <p>{ rating ? `You have gave ${rating} ${rating > 1 ? 'stars' : 'star'} rating.` : 'No rating for this time!'}</p>
      </div>
    </>
  );
}

const starStyle = {
  width: '48px', 
  height: '48px', 
  display: 'block', 
  cursor: 'pointer'
}

function Star({ full, onHoverIn, onHoverOut, onRate }) {
  return (
    <>
      <span style={starStyle} 
        onMouseEnter={onHoverIn} 
        onMouseLeave={onHoverOut}
        onClick={onRate}
      >
      {full ? 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFF"
          viewBox="0 0 24 24"
          stroke="#FFF"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg> :
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFF"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      }
      </span>
    </>
  );
}