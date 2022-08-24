const Engineer = require('../lib/engineer');

describe("engineer inputs", () => {
    it("should return the newly created objects",  () =>{
    const obj = new Engineer();
    expect(typeof(obj)).toBe("object");
    });

    it("should return the newly created array",  () => {
        const obj = new Engineer('bryan',2, 'bryan@email.com','hoffalypse');
        expect (obj).toEqual({"name": "bryan",  "id": 2,"email": "bryan@email.com", "git": 'hoffalypse'})
        });

    it('get role should return "engineer"',  () => {
        const returned = new Engineer('hi', 4, '@gmail', 'gitname');
        expect (returned.getRole()).toEqual('Engineer')
        })
    })