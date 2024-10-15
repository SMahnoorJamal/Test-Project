import socket from '../socket';

export const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, {
          ...message,
          createdAt: new Date(message.createdAt),
        }),
      );
    });
    return () => {
      socket.off('message');
    };
  }, []);
  const onSend = useCallback((newMessages) => {
    socket.emit('message', newMessages[0].text);
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{ _id: 1 }}
    />
  );
};