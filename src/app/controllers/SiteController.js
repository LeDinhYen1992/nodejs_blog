class SiteController {
    // [GET] /
    index(req, res){
        res.render('hone')
    }
    // [GET] /search
    search(req,res){
        res.render('search');
    }
}
module.exports = new SiteController();
