import './ShowCard.css'

function ShowCard({ show }) {
  const imageUrl = show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'
  const rating = show.rating?.average || 'N/A'
  const premiered = show.premiered ? new Date(show.premiered).getFullYear() : 'Unknown'
  
  const stripHtml = (html) => {
    if (!html) return 'No summary available'
    const temp = document.createElement('div')
    temp.innerHTML = html
    return temp.textContent || temp.innerText || 'No summary available'
  }

  return (
    <div className="show-card">
      <img src={imageUrl} alt={show.name} className="show-image" />
      <div className="show-info">
        <h3 className="show-title">{show.name}</h3>
        <div className="show-meta">
          <span className="show-year">{premiered}</span>
          <span className="show-rating">⭐ {rating}</span>
        </div>
        <p className="show-summary">{stripHtml(show.summary)}</p>
        {show.genres && show.genres.length > 0 && (
          <div className="show-genres">
            {show.genres.slice(0, 3).map((genre) => (
              <span key={genre} className="genre-tag">{genre}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowCard