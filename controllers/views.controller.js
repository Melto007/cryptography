/*******************************************************
 * @homeView
 * @method get
 * @route http://localhost:4000/
 * @description view home page
 * @param -
 * @return view home page
 *******************************************************/
export const homeView = (_req, res) => {
    res.render('./pages/index')
}