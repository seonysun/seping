/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import chatAPI from '../../utils/api/chatAPI';

function ChatList() {
  const navigate = useNavigate();

  const { data: posts, isLoading: postsLoading } = useQuery(
    chatAPI.getChatList(),
  );
  const { data: users, isLoading: usersLoading } = useQuery(chatAPI.getUsers());

  const getUsername = (authorId) => {
    const user = users.find((user) => user.id === authorId);
    return user ? user.username : '탈퇴한 회원입니다';
  };

  return (
    <section className="space-y-6 p-4 md:px-[10%]">
      {postsLoading || usersLoading ? (
        <div>채팅방 찾는 중...</div>
      ) : (
        posts?.map((post) => (
          <div
            key={post.id}
            className="rounded-lg p-6 shadow-lg transition-shadow hover:cursor-pointer hover:shadow-2xl"
            onClick={() => navigate(`/home/chat/${post.id}`)}
          >
            <h2 className="mb-3 text-xl font-semibold">{post.title}</h2>
            <div className="mb-4 line-clamp-1 flex justify-between">
              {post.content}
              <span>
                👀 {post.views} ♥️ {post.likes}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>작성자: {getUsername(post.authorId)}</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default ChatList;
