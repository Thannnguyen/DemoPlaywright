import {test} from "@playwright/test";
import * as fs from "fs";
import {parse} from "csv-parse/sync";


const records = parse(fs.readFileSync("./testdata/testdata.csv"), {
    columns:true, 
    skip_empty_lines: true,
    // delimiter:";"
});

records.forEach((record) => {
    test(`Get Value from CSV file -  ${record.Id}`, async({page})=>{
        console.log(records);
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.locator("//input[@id='firstName']").fill(record.FirstName);
        await page.locator("//input[@id='lastName']").fill(record.LastName);

    }) 
});
//c2
// for(const record of records){
//     test(`Get Value from CSV file:  ${record.Id}`, async({page})=>{
//         console.log(records);
//         await page.goto("https://demoqa.com/automation-practice-form");
//         await page.locator("//input[@id='firstName']").fill(record.FirstName);
//         await page.locator("//input[@id='lastName']").fill(record.LastName);

//     }) 
// }

