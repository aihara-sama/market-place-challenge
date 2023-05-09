import "./App.css";
import ComboBox from "./components/ComboBox";
import AppleIcon from "./components/icons/AppleIcon";
import BananaIcon from "./components/icons/BananaIcon";
import MangoIcon from "./components/icons/MangoIcon";
import BlueberryIcon from "./components/icons/BlueberryIcon";

const fruits = [
	{
		name: "Apple",
		icon: <AppleIcon />,
	},
	{
		name: "Banana",
		icon: <BananaIcon />,
	},
	{
		name: "Mango",
		icon: <MangoIcon />,
	},
	{
		name: "Bleuberry",
		icon: <BlueberryIcon />,
	},
];

function App() {
	return (
		<div className="app">
			<ComboBox items={fruits} />
		</div>
	);
}

export default App;
