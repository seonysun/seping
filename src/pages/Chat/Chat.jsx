/* eslint-disable tailwindcss/no-custom-classname */
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import chatOptions from '../../utils/api/chatOptions';

function Chat() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(chatOptions.getChat(id));
  const { data: comments } = useQuery(chatOptions.getComments(id));

  if (isLoading) return <p>로딩 중...</p>;
  return (
    <section className="space-y-6 p-4 md:px-[10%]">
      <div className="mx-auto max-w-2xl rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-600">작성자: {post.authorId}</p>
        <p className="mt-4">{post.content}</p>
        <div className="mt-4 flex items-center space-x-4">
          <button type="button" className="btn btn-main hover:btn-main-hover">
            ❤️ {post.likes}
          </button>
          <span>조회수: {post.views}</span>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">댓글</h2>
          {comments?.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border-b p-4">
                <p className="font-semibold">{comment.authorId}</p>
                <p>{comment.content}</p>
              </div>
            ))
          ) : (
            <p>댓글이 없습니다.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Chat;
