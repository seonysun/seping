/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import chatOptions from '../../utils/api/chatOptions';

function ChatList() {
  const navigate = useNavigate();

  const { data: posts, isLoading: postsLoading } = useQuery(
    chatOptions.getChatList(),
  );
  const { data: users, isLoading: usersLoading } = useQuery(
    chatOptions.getUsers(),
  );

  const getUsername = (authorId) => {
    const user = users.find((user) => user.id === authorId);
    return user ? user.username : '탈퇴한 회원입니다';
  };

  const queryClient = useQueryClient();

  const updateViews = useMutation({
    mutationFn: async ({ postId, currentViews }) =>
      chatOptions.updateViews(postId, currentViews),
    onSuccess: (updatedPost) => {
      queryClient.setQueryData(['chats', 0], (oldPosts) =>
        oldPosts.map((post) =>
          post.id === updatedPost.id
            ? { ...post, views: updatedPost.views }
            : post,
        ),
      );
    },
    onError: (error) => {
      console.error('Mutation 실패:', error);
    },
  });

  const handlePostClick = (postId, currentViews) => {
    updateViews.mutate({ postId, currentViews });
    navigate(`/home/chat/${postId}`);
  };

  return (
    <section className="my-4 space-y-6">
      {postsLoading || usersLoading ? (
        <div>채팅방 찾는 중...</div>
      ) : (
        posts?.map((post) => (
          <div
            key={post.id}
            className="rounded-lg p-6 shadow-lg transition-shadow hover:cursor-pointer hover:shadow-2xl"
            onClick={() => handlePostClick(post.id, post.views)}
          >
            <h2 className="mb-3 text-xl font-semibold">{post.title}</h2>
            <div className="mb-4 flex justify-between gap-3">
              <p className="line-clamp-2">{post.content}</p>
              <span className="w-32">
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
