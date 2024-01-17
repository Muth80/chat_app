import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={VITE_CHAT_ENGINE_PROJECT_ID} //Replace with the actual project ID
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
      />
    </div>
  );
};

export default ChatsPage;