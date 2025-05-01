
const database = require('../database/db');

const getData = async (req, res) => {
    try {
        const database1 = await database.main();
        const collection = (await database1).collection('sample_student_list');
        const resut = await collection.find({}).toArray();
        res.send({
            message: resut,
            status: 200
        })
    } catch (error) {
        console.log(error);
        res.send({
            message: error,
            status: 500
        })
    }
}

const postData = async (req, res) => {
    try {
        const database1 = database.main();
        const collection = (await database1).collection('sample_student_list');
        const result = await collection.insertMany(req.body);
        res.send ({
            message: "Record insert Successfully!",
            status: 200,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.send({
            message: error,
            status: 500
        })
    }
}

const putData = async (req, res) => {
    try {
        console.log(req.query.Name);
        const data = { ...req.body };
        console.log(data); 
        delete data._id; 
        console.log(data); 
        const database1 = database.main();
        const collection = (await database1).collection('sample_student_list');

        // Run the updateMany operation
        const result = await collection.updateMany(
            { 'Name': req.query.Name },
            { $set: data }
        );

        console.log(result);

        if (result.matchedCount === 0) {
            return res.status(404).send({ 
                message: "No records found to update!",
                status: 404,
            });
        }

        return res.send({
            message: `${result.modifiedCount} records updated successfully!`,
            status: 200,
            data: result,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).send({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const deleteData = async (req, res) => {
    try {
        const database1 = database.main();
        const collection = (await database1).collection('sample_student_list');
        const result = await collection.deleteMany({ Name: req.query.Name });
        res.send({
            message: `${result.deletedCount} records deleted successfully!`,
            status: 200,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.send({
            message: error,
            status: 500
        })
    }
};

module.exports = { getData, postData, putData, deleteData };