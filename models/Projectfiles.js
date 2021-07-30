const mongoose = require('mongoose');

const ProjectfilesSchema = mongoose.Schema({
    pdffile:String,
   
    updated_date:{type:Date, default: Date.now},
});

module.exports = mongoose.model('Projectfiles', ProjectfilesSchema);