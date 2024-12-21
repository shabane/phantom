import express, { Express, Request, Response } from "express";
const app: Express = express();

app.get("/api/file/", (req: Request, res: Response) => {
	res.send("Post Your Files here");
});

app.listen(3000, () => {
	console.log("App Listen on 3000");
});
