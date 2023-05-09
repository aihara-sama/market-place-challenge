import { useState } from "react";
import "./index.css";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ComboBoxItem from "./ComboBoxItem";

const ComboBox = ({ items }) => {
	const [searchInput, setSearchInput] = useState("");
	const [isSearchInputActive, setIsSearchInputActive] = useState(false);
	const [isItemSelected, setIsItemSelected] = useState(false);

	const handleComboBoxHeaderFocus = () => {
		setIsSearchInputActive(true);
		setIsItemSelected(false);
	};

	const handleSelectItem = (name) => {
		setSearchInput(name);
		setIsSearchInputActive(false);
		setIsItemSelected(true);
	};
	const handleChangeInput = (e) => {
		setSearchInput(e.target.value);
	};
	const handleComboBoxKeyDown = (e) => {
		if (e.key === "Enter") setIsSearchInputActive(true);
	};

	return (
		<div
			className={`combo-box${isSearchInputActive ? " combo-box-active" : ""}`}
		>
			<div
				onKeyDown={handleComboBoxKeyDown}
				tabIndex={0}
				className={`combo-box-header${
					isSearchInputActive ? " combo-box-header-active" : ""
				}${isItemSelected ? " combo-box-header-selected" : ""}`}
			>
				<input
					onFocus={handleComboBoxHeaderFocus}
					type="text"
					value={searchInput}
					onChange={handleChangeInput}
					placeholder="Choose a Fruit:"
				/>
				<ArrowDownIcon
					onClick={() => setIsSearchInputActive((prev) => !prev)}
				/>
			</div>
			<div
				tabIndex={0}
				className={`combo-box-body ${isSearchInputActive ? "show" : "hide"}`}
			>
				{items
					.filter((item) =>
						item.name.toLowerCase().includes(searchInput.toLowerCase())
					)
					.map((item, idx) => (
						<ComboBoxItem
							key={idx}
							name={item.name}
							icon={item.icon}
							handleSelectItem={handleSelectItem}
						/>
					))}
			</div>
		</div>
	);
};

export default ComboBox;
