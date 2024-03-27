import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className="mt-auto logout_btn">
			<p>
				{!loading ? (
					<BiLogOut
						className="w-6 h-6 text-white cursor-pointer"
						onClick={logout}
					/>
				) : (
					<span className="loading loading-spinner"></span>
				)}
			</p>
		</div>
	);
};
export default LogoutButton;
