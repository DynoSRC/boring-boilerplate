

module.exports = function setupRoute(boringApp) {

  const {
    decorators
   } = boringApp;


  const { endpoint, get, reactEntry } = decorators.router;


  @endpoint('/greetings')
  class Schedule {


    @get('/hello')
    @reactEntry('greetings')
    page(req, res) {
       res.renderRedux();
    }


  }

}
