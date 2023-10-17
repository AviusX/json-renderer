import ReactJson from 'react-json-view';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [jsonToRender, setJSONToRender] = useState<object>();

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const base64JSONToRender = urlSearchParams.get('base64JSON');

		if (base64JSONToRender === null) return;
		const json = JSON.parse(atob(base64JSONToRender));

		setJSONToRender(json);
	}, []);

	return (
		<div>
			{jsonToRender ? (
				<ReactJson
					src={jsonToRender}
					theme={'google'}
					style={{ fontSize: 18 }}
					indentWidth={8}
				/>
			) : (
				<h3>Waiting for JSON to render</h3>
			)}
		</div>
	);
}

export default App;
