

module.exports = function setupRoute(boringApp) {

  const {
    decorators
   } = boringApp;


  const { endpoint, get } = decorators.router;


  @endpoint()
  class Home {

    /**
     * This route is simply showing you can use it
     * like any ol' express handler.
     *
     * @param {*} req
     * @param {*} res
     */
    @get('/')
    page(req, res) {
       res.redirect(302, '/greetings/hello')
    }


  }

}
