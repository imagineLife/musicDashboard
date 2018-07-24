const {app} = require('../server');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

//API testing
describe('API', function(){

	//test for 200 response
	it('should return 200 on GET req', function(){
		return chai.request(app)
			.get('/api/fooo')
			.then((res) => { 
				res.should.have.status(200) 
			});
	});

});