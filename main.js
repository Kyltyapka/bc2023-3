const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
    if (err === null) {
        console.log('DONE');

        const jsonString = JSON.parse(data);

        let minV = Infinity;
        let minA = null;

        for (const active of jsonString) {
            if (active.value < minV) {
                minV = active.value;
                minA = active;
            }
        }

        fs.writeFile('output.txt', `${minA.txt} : ${minA.value}`, (err) => {

            if (err === null) {
                console.log("DONE2");
            } else {
                console.log(err);
            }
        });
    } else {
        console.log(err);
    }
});
