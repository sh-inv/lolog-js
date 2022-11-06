import Post from './Post';
import styled from 'styled-components';
import { postListMaxWidth1056px, postListMaxWidth1440px, postListMaxWidth1920px } from '../../styles/media';
import PostListNavBar from '../PostListNavBar';

const PostList = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <PostListBox>
      <PostListNavBar />
      <div className='post-list-out-box'>
        <div className='post-list-inner-box'>
          {arr.map((el, i) => {
            return <Post key={i} />;
          })}
        </div>
      </div>
    </PostListBox>
  );
};

const PostListBox = styled.div`
  width: 1728px;
  margin: 0 auto;
  .post-list-out-box {
    margin: 2rem auto 0 auto;
    .post-list-inner-box {
      display: flex;
      flex-wrap: wrap;
      margin: -1rem;
    }
  }

  ${postListMaxWidth1920px}
  ${postListMaxWidth1440px}
  ${postListMaxWidth1056px}
`;

export default PostList;