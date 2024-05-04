import ArrowIcon from "./icons/cards/ArrowIcon";
import InventoryIcon from "./icons/cards/InventoryIcon";

export default function Inventory() {
	return (
		<div className="w-screen h-auto shadow-lg m-[1rem] px-[1.5rem]">
			<div className="flex justify-between items-center pt-5 pb-2">
				<div className="flex items-center gap-3">
					<InventoryIcon />
					<span className="text-2xl text-blue font-normal">
						Inventory Monitor
					</span>
				</div>
				<ArrowIcon />
			</div>
		</div>
	);
}
