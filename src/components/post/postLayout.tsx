import React from 'react';
import commentIcon from '../../assets/images/commentIcon.svg'
import PostActionButton from "./postActionButton.tsx";
import defaultAvatar from '../../assets/images/avatar.svg'
import likeIconForCount from '../../assets/images/notLikedIcon.svg'
import {timeDiff} from "../../utility/utility.ts";
import '../../css/postLayout.scss'

export interface PostLayoutProps {
    userAvatar: string,
    userName: string,
    postContent: string,
    postImg?: string,
    createAt: string,
    likeCount: number,
    commentCount: number,
}


const PostLayout: React.FC<PostLayoutProps> = ({
   userAvatar,
   userName,
   postContent,
   postImg,
   createAt,
   commentCount,
   likeCount
   }) => {

    return (
        <div className={'post_container'}>
            <div className={'poster_information_container'}>
                <img src={userAvatar || defaultAvatar} alt="avatar"/>
                <div className={'poster_details'}>
                    <span style={{fontSize:"1.2rem",fontFamily:"Young Serif, serif"}}>{userName}</span>
                    <span style={{fontSize:"1rem",fontFamily:"Arial, serif",color:"#a2a2a2"}}>{timeDiff(createAt)} </span>
                </div>
            </div>

            < div className={'post_content'}>
                <div>{postContent}</div>
                {postImg && <img src={postImg} alt="postImg"/>}
            </div>


            <div className={'reply_post'}>
                    <PostActionButton totalNumber={commentCount} image={commentIcon}/>
                    <PostActionButton totalNumber={likeCount} image={likeIconForCount}/>
            </div>

        </div>
    );
};

export default PostLayout;