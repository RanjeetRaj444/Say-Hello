import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation_nav = ({ conversation }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const firstName = conversation.fullName.split(" ")[0];
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	return (
		<div>
			<div
				className={`cursor-pointer user_conversation`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className="w-12 rounded-full ">
						<img src={conversation.profilePic} alt="user avatar" />
					</div>
				</div>

				<div className="flex flex-col flex-1">
					<div className="flex gap-3 justify-between">
						<p
							className={`font-bold text-gray-200 ${
								isSelected ? "text-blue-900" : ""
							} hover:text-blue-900`}
						>
							{firstName}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Conversation_nav;
