import {test as baseTest } from "@playwright/test"

type MyFixture = {
    logindata:any;
    testdata:any;
}

export const test = baseTest.extend<MyFixture>({
    logindata:{
        uname: "Admin",
        pw: "admin123",
    },
    testdata:{
        fname: "Than",
        mname:"Thi",
        lname:"Nguyen",
        email:"fgfh123@gmail.com"
    }
})

export {expect} from "@playwright/test"