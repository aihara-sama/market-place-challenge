const ComboBoxItem = ({ icon, name, handleSelectItem }) => {
	const handleKeyDown = (e) => {
		if (e.key === "Enter") handleSelectItem(name);
	};

	return (
		<div
			tabIndex={0}
			className="combo-box-item"
			onClick={() => handleSelectItem(name)}
			onKeyDown={handleKeyDown}
		>
			<div className="combo-box-item-icon">{icon}</div>
			<span className="combo-box-item-name">{name}</span>
		</div>
	);
};

export default ComboBoxItem;
