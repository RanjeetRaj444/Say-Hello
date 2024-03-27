import useGetConversations from "../../hooks/useGetConversations";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Conversation_nav from "./Conversation_nav";
import { getRandomEmoji } from "../../utils/emojis";
import LogoutButton from "../sidebar/LogoutButton";
import Slider from "react-slick";
const Navbar = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	const { loading, conversations } = useGetConversations();
	return (
		<div className="navbar_container">
			<div className="heading_container">
				<div className="logo_text">
					<div className="logout-btn">
						<LogoutButton />
					</div>
					<h1 className="heading">Chat</h1>
				</div>
			</div>
			<div className="nav_conversation">
				<Slider {...settings}>
					{conversations.map((conversation, idx) => (
						<Conversation_nav
							key={conversation._id}
							conversation={conversation}
							emoji={getRandomEmoji()}
							lastIdx={idx === conversations.length - 1}
						/>
					))}
				</Slider>
				{loading ? (
					<span className="loading loading-spinner mx-auto"></span>
				) : null}
			</div>
		</div>
	);
};

export default Navbar;
