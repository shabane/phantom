import express, { Express, Request, Response } from "express";
const app: Express = express();
import { MAX_FILE_UPLOADS, nameIt, UPLOAD_DIR } from "./config";

import multer from "multer";
// const upload = multer({ dest: "uploads/" });

// serving uploaded files
app.use("/file", express.static(UPLOAD_DIR));

app.get("/api/file/", (_: Request, res: Response) => {
	res.send("Post Your Files here");
});

const storage = multer.diskStorage({
	destination: function(_: Request, file: any, cb: any) {
		cb(null, UPLOAD_DIR);
	},

	filename: function(_: Request, file: any, cb: any) {
		cb(null, nameIt() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });

app.post(
	"/api/file/",
	upload.array("files", MAX_FILE_UPLOADS),
	(req: Request, res: Response) => {
		console.log("we are here");
		res.send("we recived your files");
	},
);

app.listen(3000, () => {
	console.log("App Listen on 3000");
});
