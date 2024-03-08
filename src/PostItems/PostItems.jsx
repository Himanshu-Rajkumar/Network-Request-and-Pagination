function PostItems({items}){
    return (
        <div style={{ border:"2px solid black",padding:"10px" , marginBottom:'10px'}}>
            <p>{items.id}</p>
            <p>{items.title}</p>
            <p>{items.body}</p>
        </div>
    )
}

export default PostItems