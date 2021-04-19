const Movie = ({title, poster_path, overview, vote_average, id}) => {

    const IMG_API = 'https://image.tmdb.org/t/p/w500'

    return ( 
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie__info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

            <div className="movie__descr">
                <h2>Overview : </h2>
                <p>{ overview}</p>
            </div>
        </div>
     );
}
 
export default Movie;