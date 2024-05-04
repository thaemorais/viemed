import HomeIcon from "./icons/navbar/HomeIconBar";

export default function Navbar() {
	return (
		<div className="w-[80px]">
			<div>
				<HomeIcon />
				<span className="font-sans font-medium text-gray">Home</span>
			</div>
		</div>
	);
}
