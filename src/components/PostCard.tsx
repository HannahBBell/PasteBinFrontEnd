import './component.css'
import {postTypes} from '../App';

// const filler = "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose."
interface IPostCard{
    singularPostCard: postTypes;
    setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedPostCard: React.Dispatch<React.SetStateAction<postTypes | undefined>>;
}

function PostCard(props: IPostCard) {
    const{singularPostCard, setIsModalShown, setSelectedPostCard} = props //destructure props
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
    setSelectedPostCard: React.Dispatch<React.SetStateAction<postTypes | undefined>>
}    

//mapping over all elements in array allPosts
export default function MappedPostCard(props: IMappedPostCard) {
    const{allPosts, setIsModalShown, setSelectedPostCard} = props
    return (
        <div>
        {allPosts.map((item)=> <PostCard setSelectedPostCard={setSelectedPostCard} singularPostCard={item} setIsModalShown={setIsModalShown}/>)}
        </div>
    )}

        //Same as above...
    //{allPosts.map((item)=> PostCard({singularPostCard:item, setIsModalShown:setIsModalShown}))} 