import ArrowIcon from "./icons/cards/ArrowIcon";
import InventoryIcon from "./icons/cards/InventoryIcon";

export default function Inventory() {
	return (
		<div className="rounded-xl w-auto h-auto shadow-lg m-[1rem] px-[1.5rem]">
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

			<div className="flex justify-between py-2 text-blue font-normal text-sm">
				<select name="loja" id="loja">
					<option value="loja">Walmart Supercenter #3081</option>
				</select>
				<select name="months" id="months">
					<option value="august">August</option>
				</select>
			</div>

			<div className="py-5">
				<span className="text-light font-normal text-sm">Low stock (unit)</span>
				<div className="flex justify-between items-center font-normal text-sm py-1">
					<span className="text-gray">Aciclovir</span>
					<div className="h-0 w-[80%] border border-zinc-200 border-dashed"></div>
					<span className="text-[#CD4C4C]">0</span>
				</div>
				<div className="flex justify-between items-center font-normal text-sm py-1">
					<span className="text-gray">Simeticone</span>
					<div className="h-0 w-[80%] border border-zinc-200 border-dashed"></div>
					<span className="text-light">3</span>
				</div>
				<div className="flex justify-between items-center font-normal text-sm py-1">
					<span className="text-gray">Paroxetine</span>
					<div className="h-0 w-[80%] border border-zinc-200 border-dashed"></div>
					<span className="text-light">5</span>
				</div>
				<div className="flex justify-between items-center font-normal text-sm py-1">
					<span className="text-gray">Risperidone</span>
					<div className="h-0 w-[80%] border border-zinc-200 border-dashed"></div>
					<span className="text-light">5</span>
				</div>
				<div className="flex justify-between items-center font-normal text-sm py-1">
					<span className="text-gray">Melatonin</span>
					<div className="h-0 w-[80%] border border-zinc-200 border-dashed"></div>
					<span className="text-light">5</span>
				</div>
				<div className="flex justify-between items-center font-normal text-sm py-1">
					<span className="text-gray">Amoxicillin</span>
					<div className="h-0 w-[80%] border border-zinc-200 border-dashed"></div>
					<span className="text-light">7</span>
				</div>
				<div className="flex justify-between items-center font-normal text-sm py-1">
					<span className="text-gray">Nefopam</span>
					<div className="h-0 w-[80%] border border-zinc-200 border-dashed"></div>
					<span className="text-light">8</span>
				</div>
				<div className="flex justify-between items-center font-normal text-sm py-1">
					<span className="text-gray">Loratadine</span>
					<div className="h-0 w-[80%] border border-zinc-200 border-dashed"></div>
					<span className="text-light">8</span>
				</div>
			</div>
		</div>
	);
}
