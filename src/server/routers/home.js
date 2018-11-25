

module.exports = function setupRoute(boringApp) {

  const {
    decorators
   } = boringApp;


  const { endpoint, get } = decorators.router;


  @endpoint('/')
  class Schedule {


    @get()
    page(req, res) {
       res.redirect(302, '/greetings/hello')
    }


  }

}
