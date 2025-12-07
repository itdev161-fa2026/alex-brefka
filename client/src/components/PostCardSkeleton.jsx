import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./PostCard.css";

const PostCardSkeleton = () => {
    return (
        <div className="post-card" >
            <h2>
                <Skeleton width={150} height={28} />
            </h2>
            < div className="post-meta" >
                <Skeleton width={80} height={16} />
                <Skeleton width={120} height={16} />
            </div>

            < p className="post-preview" >
                <Skeleton height={18} />
            </p>

            < span className="read-more">
                <Skeleton width={110} height={18} style={{ backgroundColor: '#61dafb' }} />
            </span>
        </div>
    );
};

export default PostCardSkeleton;