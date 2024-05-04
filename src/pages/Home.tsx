import CashflowCard from "../components/CashflowCard";
import Header from "../components/Header";
import Inventory from "../components/InventoryCard";

export default function Home() {
	return (
		<>
			<Header />
			<CashflowCard />
			<Inventory />
		</>
	);
}
