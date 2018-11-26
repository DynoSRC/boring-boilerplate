

module.exports = function setupRoute(boringApp) {

  const {
    decorators
   } = boringApp;


  const { endpoint, get, reactEntry } = decorators.router;


  @endpoint('/greetings')
  class Greeting {


    @get('/hello')             // the path for this handler will be /greetings/hello
    @reactEntry('greetings')   // This points to the folder /src/client/pages/greetings
    page(req, res) {
       res.renderRedux();
    }


  }

}
