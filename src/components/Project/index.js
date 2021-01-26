function Project(props) {
    return (
        <div class="card">
            <a target="_blank" rel="noreferrer" href={props.url}><img
                src={props.image_src}
                class="card-img-top" alt={props.title} /></a>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description} 
                The following technologies were used: {props.technologies}
                <a target="_blank" rel="noreferrer"
                        href={props.github}>Github here.</a></p>
            </div>
        </div>
    )
}

export default Project;