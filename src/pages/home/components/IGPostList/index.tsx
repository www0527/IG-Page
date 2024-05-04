import IGUser from "components/IGUser";
import { IGPostProps } from "type/dataType";
import Comment from "./Comment";



const IGPost: React.FC<IGPostProps> = (PostProps) => {
    return (
        <div className="shadow-md pb-4 lg:mb-8">
            <IGUser account={PostProps.account} location={PostProps.location} avatar={PostProps.avatar} />
            <img src={PostProps.photo} />
            <Comment
                photo={PostProps.photo}
                likes={PostProps.likes}
                description={PostProps.description}
                hashTags={PostProps.hashTags}
                createTime={PostProps.createTime}
            />
        </div>
    );
};

export default IGPost;