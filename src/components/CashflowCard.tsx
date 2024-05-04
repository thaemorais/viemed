import ArrowDownIcon from "./icons/cards/ArrowDownIcon";
import ArrowIcon from "./icons/cards/ArrowIcon";
import ArrowUpIcon from "./icons/cards/ArrowUpIcon";
import CashflowIcon from "./icons/cards/CashflowIcon";

export default function CashflowCard() {
	return (
		<div className="w-screen h-auto shadow-lg m-[1rem] px-[1.5rem]">
			<div className="flex justify-between items-center pt-5 pb-2">
				<div className="flex items-center gap-3">
					<CashflowIcon />
					<span className="text-2xl text-blue font-normal">Cashflow</span>
				</div>
				<ArrowIcon />
			</div>

			<div className="h-0 mx-auto border border-zinc-200 border-dashed"></div>

			<div className="flex justify-between pt-2 text-blue font-normal text-sm">
				<span>Walmart Supercenter #3081</span>
				<select name="months" id="months">
					<option value="august">August</option>
				</select>
			</div>

			<div className="flex flex-col py-8 gap-1">
				<span className="text-light font-normal text-sm">
					Closing cash balance
				</span>
				<span className="text-gray font-normal text-3xl">$ 187.092,46</span>
				<span className="text-green font-normal text-sm">
					5% vs previous month
				</span>
			</div>

			<div className="h-0 mx-auto border border-zinc-200 border-dashed"></div>

			<div className="flex justify-between py-5">
				<div className="">
					<div className="flex items-center gap-1">
						<ArrowUpIcon />
						<span className="text-light font-normal text-sm">
							Cash receipts
						</span>
					</div>
					<span className="text-regular font-medium text-lg">$ 302.348,98</span>
				</div>
				<div>
					<div className="flex items-center gap-1">
						<ArrowDownIcon />
						<span className="text-light font-normal text-sm">
							Cash payments
						</span>
					</div>
					<span className="text-regular font-medium text-lg">$ 115.256,52</span>
				</div>
			</div>
		</div>
	);
}
