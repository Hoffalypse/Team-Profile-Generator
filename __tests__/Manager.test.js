const Manager = require('../lib/manager')

describe("manager inputs", () => {
    it("should return the newly created objects",  () => {
    const obj = new Manager();
    expect(typeof(obj)).toBe("object");
    })

    it("should return the newly created array",  () => {
        const obj = new Manager('bryan',2, 'bryan@email.com',2);
        expect (obj).toEqual({"name": "bryan",  "id": 2,"email": "bryan@email.com", "office": 2})
        })
    
    it('get role should return "Intern"',  () => {
        const returned = new Manager('hi', 4, '@gmail', 'Stanford');
        expect (returned.getRole()).toEqual('Manager')
        })   
})