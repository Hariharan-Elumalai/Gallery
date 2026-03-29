function ImageCard(props){
    return(
        <div className="card">
            <img src={props.data.url} alt={props.data.title}></img>
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
        </div>
    )
}

export default ImageCard;