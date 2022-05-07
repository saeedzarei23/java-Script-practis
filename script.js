// cm to m convertor

function convertor(cm, meter) {
  meter = cm / 100;
  console.log(meter + " m");
}
convertor(56);
// cm to mm convertor
function cmToMm(cm,mm){
  mm =cm*10;
  console.log(mm+" mm");
}
cmToMm(39)
// greeting bot first way
function sayHello(hi) {
  if (hi == "salam" || hi == "hi") {
    console.log( "bot:","salam khobie");
  } else if (hi == "khobi" || hi == "hal shoma chetore") {
    console.log( "bot:","man khobam shoma chetori");
  } else if (hi == "chikar mikoni" || hi == "dar che hali") {
    console.log( "bot:","hichi vala");
  } else {
    console.log( "bot:","midonam chi migi vali namitonam javab bedam");
  }
}
sayHello("");
//  second way
function bot(greeting) {
  switch (greeting) {
    case "salam":
    case "hi":
    case "hey":
      console.log( "bot:","salam khobie");
      break;
    case "khobi":
    case "oza":
      console.log( "bot:","khoda ro shoker shoma khobi");
      break;
    case "chikar mikoni":
      console.log( "bot:","hichi vala to chicar mikoni");
      break;
    default:
      console.log("bot:", "midonam chi migi vali namitonam javab bedam");
  }
}
bot("");

let school = {
  class1: {
    Student1: {
      fullName: "saeed",
      Score: 20,
      phoneNumber: "09036258267",
      idNumber: "3540180923",
      age: 23,
    },
    Student2: {
      fullName: "ali",
      Score: 14,
      phoneNumber: "09365399472",
      idNumber: "3530140733",
      age: 22,
    },
    Student3: {
      fullName: "mohammad",
      Score: 19,
      phoneNumber: "09345758567",
      idNumber: "3258180863",
      age: 21,
    },
    Student4: {
      fullName: "reza",
      Score: 18,
      phoneNumber: "09235647213",
      idNumber: "7589194932",
      age: 22,
    },
  },
  class2: {
    Student1: {
      fullName: "nazanin",
      Score: 12,
      phoneNumber: "09171760664",
      idNumber: "2348568234",
      age: 25,
    },
    Student2: {
      fullName: "zahra",
      Score: 16,
      phoneNumber: "09179231600",
      idNumber: "33315937675",
      age: 24,
    },
    Student3: {
      fullName: "fatemah",
      Score: 17,
      phoneNumber: "0943582952",
      idNumber: "6348928922",
      age: 24,
    },
    Student4: {
      fullName: "nilofar",
      Score: 20,
      phoneNumber: "09177721832",
      idNumber: "35576819023",
      age: 23,
    },
  },
  class3: {
    Student1: {
      fullName: "poya",
      Score: 19,
      phoneNumber: "09026547123",
      idNumber: "1356435632",
      age: 19,
    },
    Student2: {
      fullName: "amir",
      Score: 18,
      phoneNumber: "090345485827",
      idNumber: "34359749327",
      age: 22,
    },
    Student3: {
      fullName: "nasaer",
      Score: 20,
      phoneNumber: "090737263722",
      idNumber: "35134242932",
      age: 21,
    },
    Student4: {
      fullName: "sara",
      Score: 20,
      phoneNumber: "0902774934",
      idNumber: "3540180923",
      age: 23,
    },
  },
};
function shearchForTopSudent(top) {
  let best = {};
  for (let i = 0; i <= Object.keys(top).length; i++) {
    if (top[i] > best) {
      best = top[i];
    }
  }
  console.log(best);
}
shearchForTopSudent(school);
