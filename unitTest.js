//expect method for chai
let expect = chai.expect;
//describe uses a name for the test and a function will facilitate it
describe('MyFunction', () => {
    describe('createRestuaurant', () => {
        it('It should return a name and a rating', () => {
            let testName = new Dish('Pizza', '5');
            expect(testName.createRestaurant).to.equal('Pizza', '5');
        });
    });
});