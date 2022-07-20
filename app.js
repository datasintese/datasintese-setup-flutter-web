
function ObterProximo(){
//    return new Promise( function(){
        let obj = alertMessage().next()
        let jsonObject = JSON.stringify(obj);
        alert(jsonObject);
        return jsonObject;
//    })
}

async function alertMessage(token, url) {
//var index = 0;
//while (index <= 2){
//   yield index++;
//}
//    //return token;

//    var controller = new AbortController();
    let cabecalho = {
            method:"post",
            headers :{
              ContentType : "application/x-www-form-urlencoded",
              Authorization : 'Bearer ' + token
            },
            signal: controller.signal,
        }


//          fetch('https://api.datasintese.com:5577/setup/roadmaps/Instalar Servidor2/run-stream', cabecalho)

//let result = async function*() {

      let response = await fetch(url, cabecalho);
      return response;
//    let res = response.body
//    let reader = res.getReader();
//
//    while(null != (chunk = await reader.read())){
//        let string = new TextDecoder()
//        if (chunk.done) {
//            yield string.decode(chunk.value);
//            controller.abort();
//            break;
//        }
//        let jsonObject = JSON.stringify(chunk.value);
//        console.log(jsonObject);
//        yield jsonObject;
////        yield string.decode(chunk.value);
//    }
//    yield result().next();
//}



      fetch(url, cabecalho)
      .then(response => response.body)
      .then(async res => {
            let result = res.getReader();
            console.log(result);
//            return new Promise(function(){

              while(null != (chunk = await result.read())){
                            let string = new TextDecoder()
                            console.log(string.decode(chunk.value));
                            if (chunk.done) {
                                controller.abort();
                                break;
                            }
                        }
//            })
        });
}

function stream() {
      let cabecalho = {
        method:"post",
        headers :{
          ContentType : "application/x-www-form-urlencoded",
          Authorization : 'Bearer ' + token
        },
      };
      fetch('https://api.datasintese.com:5577/setup/roadmaps/Instalar Servidor2/run-stream', 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNyc2Etc2hhMjU2IiwidHlwIjoiSldUIn0.eyJqdGkiOiIwZDQxYzljNS1jOGU3LTQ4NWQtOWY5MS1hY2UwNGFlZDBlZjEiLCJzdWIiOiJzZXJnaW8iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIiwibmJmIjoxNjU3MjE3ODU5LCJleHAiOjE2NTczMDI0NTksImlzcyI6IkRTQVBJU0lTIiwiYXVkIjoiRGF0YVNpbnRlc2VBdWRpZW5jZSJ9.RSCtMuX9b74qcq4aNBxkCsgP62Hbl2Vv9f7U_ovK9cZ5JuEDIvcGDQBHNsVPRGETptKxS0APLYz1gm8hQxuKAVbY5NTp9NhXvWxkmOg8BtJ1tOInpVIR0Ga4YSCWJIUqzem1oBX_OosS_0KbSmIt2Cs0xbzp6df-gEgnPzbJERS-E7tNh_QiuUUsNH0zcak1gYaVKzuE3tcprEJsba1Zpbi4gJVuY74n15P8VKM8oRedNhuC_zYoUufsLg03Avxxfr7u9hWxj8SpjEcBcVMuOrs9GtZmlvSOlHcseB6KQ-ao5qKnI-FUeezb4NCjZjgRM00ieUOqq0rfBnw7L4j2yg')
          .then(response => response.body)
          .then(res => res.on('readable',
           () => {
        let chunk
            while(null != (chunk = res.read())){
        console.log(chunk.toString());
        }
      }));
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}