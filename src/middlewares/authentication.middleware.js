export function auth(req, res, next)
{
    if (req.session && req.session.isLoggedIn) next();
    else res.render("login", {errorMessage:"Please Login To Continue!"});
}