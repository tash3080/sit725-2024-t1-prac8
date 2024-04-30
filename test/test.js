const request = require('request');
const expect = require('chai').expect;

describe('Flower Unit Test', function () {
    url = "http://localhost:3000/api/flower"

    describe('POST Flower', () => {
        it('should create a new flower', (done) => {
            const postData = {
                title: 'Jui',
                image_link: 'images/flower-2.jpg',
                subtitle: 'Jui flower',
                description: 'A jui flower'
            };

            request.post({
                url: url,
                json: postData
            }, (error, response, body) => {
                if (error) {
                    done(error);
                    return;
                }

                const responseData = body;
                expect(response.statusCode).to.equal(200);

                expect(responseData.message).to.equal("Successful")

                done();
            });
        });
    });

    describe('GET Flower', () => {
        it('should return flowers', (done) => {
            request.get(url, (error, response, body) => {
                if (error) {
                    done(error);
                    return;
                }

                expect(response.statusCode).to.equal(200);
                const responseData = JSON.parse(body);

                expect(responseData.message).to.equal("Successful")

                //expect(responseData.data[0]["id"]).to.equal("1");
                //expect(responseData.data[0]["name"]).to.equal("My Cat");
                done();
            });
        });
    });

    // describe('Delete Flower', () => {
    //     it('should delete a flower', (done) => {
    //         const deleteData = {
    //             id: '1',
    //             name: 'My Flower'
    //         };

    //         request.delete({
    //             url: url,
    //             json: deleteData
    //         }, (error, response, body) => {
    //             if (error) {
    //                 done(error);
    //                 return;
    //             }

    //             const responseData = body;
    //             expect(response.statusCode).to.equal(200);

    //             expect(responseData.message).to.equal("delete flower success")

    //             done();
    //         });
    //     });
    // });
});
