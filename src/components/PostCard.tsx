import './component.css'

const filler = "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose."

export default function PostCard() {

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
        <h2>Title</h2>
        <p>{stringTrimmer(filler)}</p>
    </div>
    )};

