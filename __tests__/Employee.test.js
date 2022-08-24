const Employee = require('../lib/employee')

describe("employee inputs", () => {
    it("should return the newly created objects",  () =>{
    const obj = new Employee();
    expect(typeof(obj)).toBe("object");

    })
    it("should return the newly created array",  () => {
        const obj = new Employee('bryan',2, 'bryan@email.com');
        expect (obj).toEqual({"name": "bryan",  "id": 2,"email": "bryan@email.com"})
        })
    it('get role should return "Employee"',  () => {
        const returned = new Employee('hi', 4, '@gmail');
        expect (returned.getRole()).toEqual('Employee')
        })   
})