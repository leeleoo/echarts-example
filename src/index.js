import init from './init'

if (module.hot) {
  module.hot.accept('./init.js', function() {
    console.log('Accepting the updated printMe module!')
    init()
//    printMe()
  })
}
