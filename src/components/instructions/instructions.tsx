export function Instructions(props: { mouseX?: number; mouseY?: number }) {
	return (
		<div>
			<div>
				<h1>Instructions</h1>
			</div>
			<p
				style={{ fontWeight: "bold" }}
			>{`x: ${props.mouseX}, y: ${props.mouseY}`}</p>
			<ol>
				<li>Spawn a "Dot" where the mouse is placed on "left click"</li>
				<li>Display a menu on "left click" dot</li>
				<ul>
					<li>Menu should have "Edit text" option</li>
					<li>Menu should have "Delete dot" option</li>
				</ul>
				<li>"Edit text" option should display a text input field</li>
				<li>"Delete dot" option should delete the dot</li>
			</ol>
		</div>
	);
}
