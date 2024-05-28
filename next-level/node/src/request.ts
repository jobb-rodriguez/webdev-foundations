const REQUEST_TIMEOUT = 500;

function encrypt(data: string) {
    return "encrypted data";
}


function send(url: string, data: string) {
    const encryptedData: string = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

export {
    REQUEST_TIMEOUT,
    send
}