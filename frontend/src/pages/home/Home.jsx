import Navbar from "../../components/Navbar/Navbar";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {
	return (
		<div className="sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 home">
			<Navbar />
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
