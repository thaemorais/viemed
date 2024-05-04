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

			<div className="h-0 mx-auto border border-zinc-200 border-dashed"></div>

			<div className="flex justify-between pt-2 text-blue font-normal text-sm">
				<select name="loja" id="loja">
					<option value="loja">Walmart Supercenter #3081</option>
				</select>
				<select name="months" id="months">
					<option value="august">August</option>
				</select>
			</div>

			<div>
				<span>Low stock (unit)</span>
			</div>
		</div>
	);
}
