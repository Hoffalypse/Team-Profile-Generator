const Intern = require('../lib/intern')

describe("intern inputs", () => {
    it("should return the newly created objects",  () => {
    const obj = new Intern();
    expect(typeof(obj)).toBe("object");
    })
    it("should return the newly created array",  () => {
        const obj = new Intern('bryan',2, 'bryan@email.com','Stanford');
        expect (obj).toEqual({"name": "bryan",  "id": 2,"email": "bryan@email.com", "school": 'Stanford'})
        })

    it('get role should return "Intern"',  () => {
            const returned = new Intern('hi', 4, '@gmail', 'Stanford');
            expect (returned.getRole()).toEqual('Intern')
            })
    
})