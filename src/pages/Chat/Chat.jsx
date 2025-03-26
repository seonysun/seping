import { useParams } from 'react-router-dom';

function Chat() {
  const { id } = useParams();

  return <section className="space-y-6 p-4 md:px-[10%]">{id}</section>;
}

export default Chat;
