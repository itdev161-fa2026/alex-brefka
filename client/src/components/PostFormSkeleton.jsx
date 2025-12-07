import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./PostForm.css";

const PostFormSkeleton = () => {
    return (
        <div className="post-form">
            <h2>
                <Skeleton height={34} width={120} />
            </h2>

            <div className="form-group">
                <label>
                    <Skeleton height={18} width={50} />
                </label>
                <Skeleton height={40} width={"100%"} />
            </div>

            <div className="form-group">
                <label>
                    <Skeleton height={18} width={50} />
                </label>
                <Skeleton height={340} width={"100%"} />
            </div>

            <div className="form-actions">
                <div className="submit-skeleton">
                    <Skeleton height={50} style={{ backgroundColor: "#61dafb" }} />
                </div>

                <Skeleton height={50} width={120} />
            </div>
        </div>
    );
};

export default PostFormSkeleton;