import dotenv from "dotenv";
dotenv.config();

export let MAX_FILE_UPLOADS = Number(process.env.MAX_FILE_UPLOADS) || 3; // maximum number of files to upload at once

export let MAX_RANDOM_CHARS = Number(process.env.MAX_RANDOM_CHARS) || 64; // random chars for each file name (A-z 0-9)

export let MAX_SEPRATOR = Number(process.env.MAX_SEPRATOR) || 3; // how much time use random char for each files like: 9v7b1a8zzssx3key04t5i91bithkca3b0ihyts3znjsxnfybvk0ej7k02ro29y9n-oplnzg67lu4a44o6ekbreen090hoce63tnbb5gm59hmyp60fqia923g8022zsn4j-dku7adn66tmgp33t3dghv1nsg95ydwfvyf65fq0t3mk9gee6712t6jipucd5zhqf

export let SEPRATOR = process.env.SEPRATOR || "-"; // seprate between each file name. use general ascii chars(RFC 3986)

let chars = "a b c d e f g h i j k l m n o p q r s t u v w x y z ";
chars += "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ";
chars += "0 1 2 3 4 5 6 7 8 9";

export const CHARS = chars.split(" ");

export function nameIt() {
	let name: string = "";
	for (let i = 0; i < MAX_SEPRATOR; i++) {
		for (let j = 0; j < MAX_RANDOM_CHARS; j++) {
			let rnd = Math.floor(Math.random() * CHARS.length - 1);
			name += CHARS[rnd];
		}
		if (i < MAX_SEPRATOR - 1) {
			name += SEPRATOR;
		}
	}
	return name;
}

export let UPLOAD_DIR = "./uploads/";

export let EMAIL_HOST: string = process.env.EMAIL_HOST;
export let EMAIL_PORT: number = process.env.EMAIL_PORT;
export let EMAIL_SECURE: boolean = false;
export let EMAIL_AUTH_USER: string = process.env.EMAIL_AUTH_USER;
export let EMAIL_AUTH_PASSWORD: string = process.env.EMAIL_AUTH_PASSWORD;
export let EMAIL_FROM: string = process.env.EMAIL_FROM;
