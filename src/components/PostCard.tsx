import './component.css'
import {postTypes} from '../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// const filler = "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose."
interface IPostCard{
    singularPostCard: postTypes;
    setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedPostCard: React.Dispatch<React.SetStateAction<postTypes | undefined>>;
    deletePosts: (id: number) => Promise<void>
}

function PostCard(props: IPostCard) {
    const{singularPostCard, setIsModalShown, setSelectedPostCard, deletePosts} = props //destructure props
    function stringTrimmer(filler:string) {
        if (filler.length >= 200) {
            const trimmedString = filler.substring(0, 200);
            return trimmedString + "...click TITLE to read more"
        }
        else {
            return filler
        }};

    return (
    <div className="PostCard">
        <button className="DeleteButton" onClick={()=>deletePosts(singularPostCard.id)}>
            <FontAwesomeIcon icon={faTrash}/>
        </button>
        <h2 onClick={()=> {
            setIsModalShown(true); 
            setSelectedPostCard(singularPostCard)
            }}
            >{singularPostCard.title}</h2>
        <p>{stringTrimmer(singularPostCard.content)}</p>
    </div>
    )};

//interface so we can type 'allPosts' useState which is an array of objects
interface IMappedPostCard{ 
    allPosts: postTypes[], //postTypes is another interface which defines types of each 'post'
    setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedPostCard: React.Dispatch<React.SetStateAction<postTypes | undefined>>,
    deletePosts: (id: number) => Promise<void>
}    

//mapping over all elements in array allPosts
export default function MappedPostCard(props: IMappedPostCard) {
    const{allPosts, setIsModalShown, setSelectedPostCard, deletePosts} = props
    return (
        <div>
        {allPosts.map((item)=> <PostCard setSelectedPostCard={setSelectedPostCard} singularPostCard={item} setIsModalShown={setIsModalShown} deletePosts={deletePosts}/>)}
        </div>
    )}

        //Same as above...
    //{allPosts.map((item)=> PostCard({singularPostCard:item, setIsModalShown:setIsModalShown}))} 