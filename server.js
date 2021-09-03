import express from "express";

const { json, urlencoded } = express;

const app = express();

app.use(json());
app.use(
	urlencoded({
		extended: "true",
	})
);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
});

app.post("/inbound", (req, res) => {
	handleParams(req.body, res);
});

function handleParams(params, res) {
	if (!params.to || !params.msisdn) {
		console.log("This is not a valid inbound SMS message!");
	} else {
		let incomingData = {
			messageId: params.messageId,
			from: params.msisdn,
			text: params.text,
			type: params.type,
			timestamp: params["message-timestamp"],
		};
		console.log("Success", incomingData);
	}
	res.status(200).end();
}
