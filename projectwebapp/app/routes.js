var sign_upCtrl = require('./controllers/sign_up.controllers');
//var departmentCtrl = require('./controllers/department.controllers');

module.exports = function(app){
    app.get('/', function(req, res){
        res.render('sign_in');
    });
    //app.get('/student', studentCtrl.getAll);
    app.get('/sign_up', function(req, res){
        res.render('sign_up');
    });
    app.post('/sign_up', sign_upCtrl.insertMember);
    //app.get('/studentdep', studentCtrl.getAllWithDepartment);
}