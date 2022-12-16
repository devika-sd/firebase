var firebase = require('../config/config');
var firestore = firebase.firestore();

exports.updateone = async (req,res) =>{
    try {
        var data = req.body;
        var id = req.params.id;
        var student = await firestore.collection('stud').doc(id);
        await student.update(data);
        res.json({ message: "working fine" });
    }
    catch (err) {
        res.status(404).send(err.message)
    }
}

exports.deleteone = async (req,res) =>{
    try {
        var id = req.params.id;
        await firestore.collection('stud').doc(id).delete();
        res.json({ message: "working fine" });
    }
    catch (err) {
        res.status(404).send(err.message)
    }
}

exports.getallrecord = async (req, res) => {
    try {
        var students = await firestore.collection('stud');
        var data = await students.get();
        const result = [];
        if(data.empty)
        {
            res.status(404).send("data not found");
        }
        else
        {
            data.forEach(doc => {
                result.push({id:doc.id,...doc.data()})
            });
            res.json({data:result})
        }
        res.json({message:"works fine"})
    } catch (err) {
        res.status(404).send(err.message)
    }
}

exports.setonerecord = async (req, res) => {
    try {
        var data = req.body;
        await firestore.collection('stud').doc().set(data);
        res.json({ message: "working fine" });
    }
    catch (err) {
        res.status(404).send(err.message)
    }
}

exports.getonerecord = async(req,res) =>{
    try{
        var id = req.params.id;
        var student = await firestore.collection('stud').doc(id);
        const data = await student.get();
        if(data.empty)
        {
            res.status(404).send("data is not found")
        }
        else{
            res.json(data.data())
        }
    }catch(err)
    {
        res.status(404).send(err.message)
    }
}