// Using ECMAScript over CommonJS
import { send } from "./request";
import { read } from "./response";

function makeRequest(url: string, data: string): string {
    send(url, data);
    return read();
}

const responseData: any = makeRequest("https://google.com", "hello");
console.log(responseData);