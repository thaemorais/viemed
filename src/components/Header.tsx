import Logo from "./img/Logo";
import Perfil from "./img/Perfil";

export default function Header() {
	return (
		<div className="flex justify-between items-center pl-[10%] py-[1rem] pr-[2%]">
			<div className="sm:hidden menu-icon flex flex-col justify-between w-8 h-5 cursor-pointer">
				<div className="bar bg-gray h-1 w-full"></div>
				<div className="bar bg-gray h-1 w-full"></div>
				<div className="bar bg-gray h-1 w-full"></div>
			</div>
			<Logo />
			<div className="flex gap-4">
				<div className="sm:flex flex-col text-end hidden">
					<span className="">Jéssica Parker</span>
					<span className="">Walmart Supercenter #3081</span>
				</div>
				<Perfil />
			</div>
		</div>
	);
}
