import ShowCard from './ShowCard'
import './ShowList.css'

function ShowList({ shows }) {
  return (
    <div className="show-list">
      {shows.map((item) => (
        <ShowCard key={item.show.id} show={item.show} />
      ))}
    </div>
  )
}

export default ShowList