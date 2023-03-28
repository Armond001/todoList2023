const InstagramPost = (props) => {
    const {numberOfLikes,userName,caption}=props;
    return(        
        <div>
        
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB85IKgevd_c9JwlYb_Cano2FzHiSdy41nWy-ULVawQ&s' alt=""></img>
            <div>
                <button>like</button>
                <button>reply</button>
                <button>share</button>
            </div>
            <div>
                <p>{numberOfLikes} Likes</p>
                <p>{userName}</p>
                <p>{caption}</p>
            </div>
        </div>

    )
}
export default InstagramPost;
