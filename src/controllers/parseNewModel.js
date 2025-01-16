const UserTime = require('../models/UserTime');
const User = require('../models/User')
const mongoose = require('mongoose');
const moment = require('moment');
const fs = require('fs');

module.exports = {

  

  async parseNewModel(req, res) {
    const data = [{
      "_id": {
        "$oid": "60658bdcdb4d630016429d41"
      },
      "totalTimes": "15:39",
      "date": {
        "$date": {
          "$numberLong": "1617267676373"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "21:40"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 8
    },{
      "_id": {
        "$oid": "60658c4edb4d630016429d45"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1617267790582"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "11:38"
        },
        {
          "in": "13:40",
          "out": "16:23"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60658eaddb4d630016429d49"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617268397428"
        }
      },
      "times": [
        {
          "in": "06:13",
          "out": "10:03"
        },
        {
          "in": "11:59",
          "out": "16:11"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606595d7db4d630016429d4c"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1617270231528"
        }
      },
      "times": [
        {
          "in": "06:43",
          "out": "11:04"
        },
        {
          "in": "13:03",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659702db4d630016429d4f"
      },
      "totalTimes": "08:35",
      "date": {
        "$date": {
          "$numberLong": "1617270530697"
        }
      },
      "times": [
        {
          "in": "06:48",
          "out": "11:24"
        },
        {
          "in": "13:06",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065978adb4d630016429d52"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1617270666952"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "15:07"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6065987edb4d630016429d55"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1617270910506"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:59"
        },
        {
          "in": "13:59",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "606598a8db4d630016429d57"
      },
      "totalTimes": "04:06",
      "date": {
        "$date": {
          "$numberLong": "1617270952799"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:01"
        },
        {
          "in": "17:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606598cadb4d630016429d59"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1617270986186"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:37"
        },
        {
          "in": "13:26",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606598cbdb4d630016429d5b"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617270987759"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:02"
        },
        {
          "in": "13:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606598dfdb4d630016429d5d"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1617271007040"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "13:01"
        },
        {
          "in": "14:56",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659917db4d630016429d5f"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1617271063494"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "12:01"
        },
        {
          "in": "13:56",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065994adb4d630016429d63"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1617271114809"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:01"
        },
        {
          "in": "13:58",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659972db4d630016429d65"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617271154645"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:01"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659980db4d630016429d68"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1617271168235"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:02"
        },
        {
          "in": "14:08",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606599a1db4d630016429d6a"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617271201886"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "13:30"
        },
        {
          "in": "15:34",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659a50db4d630016429d6d"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1617271376471"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:04"
        },
        {
          "in": "14:00",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659a70db4d630016429d6f"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1617271408887"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:12"
        },
        {
          "in": "12:59",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659ac8db4d630016429d71"
      },
      "totalTimes": "08:43",
      "date": {
        "$date": {
          "$numberLong": "1617271496468"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:41"
        },
        {
          "in": "13:31",
          "out": "17:37"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659b31db4d630016429d73"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1617271601686"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "15:20"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60659b4cdb4d630016429d75"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1617271628058"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:42"
        },
        {
          "in": "14:44",
          "out": "17:26"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659b4cdb4d630016429d77"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1617271628216"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659c4bdb4d630016429d79"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1617271883380"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:12"
        },
        {
          "in": "13:08",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659d44db4d630016429d7c"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1617272132424"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "12:00"
        },
        {
          "in": "14:06",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60659d5adb4d630016429d7e"
      },
      "totalTimes": "07:35",
      "date": {
        "$date": {
          "$numberLong": "1617272154378"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "16:51"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065a420db4d630016429d81"
      },
      "totalTimes": "10:16",
      "date": {
        "$date": {
          "$numberLong": "1617273888269"
        }
      },
      "times": [
        {
          "in": "07:44",
          "out": "17:54"
        },
        {
          "in": "17:54",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065a5d8db4d630016429d82"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1617274328210"
        }
      },
      "times": [
        {
          "in": "07:52",
          "out": "12:01"
        },
        {
          "in": "13:14",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065a8a8db4d630016429d84"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1617275048196"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:39"
        },
        {
          "in": "14:46",
          "out": "18:22"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 9
    },{
      "_id": {
        "$oid": "6065a961db4d630016429d85"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1617275233859"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "12:07"
        },
        {
          "in": "14:13",
          "out": "18:07"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "6065ab34db4d630016429d86"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1617275700084"
        }
      },
      "times": [
        {
          "in": "08:15",
          "out": "14:12"
        },
        {
          "in": "16:36",
          "out": "18:30"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065ac93db4d630016429d87"
      },
      "totalTimes": "07:35",
      "date": {
        "$date": {
          "$numberLong": "1617276051466"
        }
      },
      "times": [
        {
          "in": "08:20",
          "out": "12:59"
        },
        {
          "in": "15:06",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065c335db4d630016429d88"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1617281845613"
        }
      },
      "times": [
        {
          "in": "09:57",
          "out": "14:00"
        },
        {
          "in": "15:56",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065c88cdb4d630016429d8a"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1617283212296"
        }
      },
      "times": [
        {
          "in": "10:20",
          "out": "14:02"
        },
        {
          "in": "16:01",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6065df5ddb4d630016429d95"
      },
      "totalTimes": "08:41",
      "date": {
        "$date": {
          "$numberLong": "1617289053669"
        }
      },
      "times": [
        {
          "in": "11:57",
          "out": "16:02"
        },
        {
          "in": "18:07",
          "out": "22:43"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6066521edb4d630016429e16"
      },
      "totalTimes": "09:53",
      "date": {
        "$date": {
          "$numberLong": "1617318430491"
        }
      },
      "times": [
        {
          "in": "20:07",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60666d49db4d630016429e17"
      },
      "totalTimes": "09:48",
      "date": {
        "$date": {
          "$numberLong": "1617325385459"
        }
      },
      "times": [
        {
          "in": "22:03",
          "out": "07:51"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60667986db4d630016429e19"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617235200000"
        }
      },
      "times": [
        {
          "in": "22:55",
          "out": "06:57"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6066dcffdb4d630016429e1a"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1617353983905"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:00"
        },
        {
          "in": "12:05",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6066de78db4d630016429e1d"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617354360227"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:11"
        },
        {
          "in": "12:07",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6066ea82db4d630016429e20"
      },
      "totalTimes": "08:41",
      "date": {
        "$date": {
          "$numberLong": "1617357442472"
        }
      },
      "times": [
        {
          "in": "21:44",
          "out": "06:25"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 8
    },{
      "_id": {
        "$oid": "6066ec7adb4d630016429e23"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1617357946805"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6066f020db4d630016429e25"
      },
      "totalTimes": "10:50",
      "date": {
        "$date": {
          "$numberLong": "1617358880805"
        }
      },
      "times": [
        {
          "in": "07:21",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "6066f9f1db4d630016429e28"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1617361393847"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6067154ddb4d630016429e2a"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1617368397133"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:02"
        },
        {
          "in": "15:58",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60672438db4d630016429e2e"
      },
      "totalTimes": "08:27",
      "date": {
        "$date": {
          "$numberLong": "1617372216261"
        }
      },
      "times": [
        {
          "in": "11:03",
          "out": "17:48"
        },
        {
          "in": "20:27",
          "out": "22:09"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606731e8db4d630016429e31"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617375720197"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60674ce4db4d630016429e35"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1617382628228"
        }
      },
      "times": [
        {
          "in": "13:57",
          "out": "18:02"
        },
        {
          "in": "20:02",
          "out": "23:54"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6067aa6adb4d630016429e47"
      },
      "totalTimes": "10:03",
      "date": {
        "$date": {
          "$numberLong": "1617406570834"
        }
      },
      "times": [
        {
          "in": "20:36",
          "out": "06:39"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6067d8aadb4d630016429e4d"
      },
      "totalTimes": "06:11",
      "date": {
        "$date": {
          "$numberLong": "1617418410395"
        }
      },
      "times": [
        {
          "in": "23:53",
          "out": "06:04"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683032db4d630016429e52"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617440818940"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:06"
        },
        {
          "in": "12:01",
          "out": "16:00"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60683069db4d630016429e54"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1617440873022"
        }
      },
      "times": [
        {
          "in": "06:07",
          "out": "10:03"
        },
        {
          "in": "12:03",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6068367bdb4d630016429e57"
      },
      "totalTimes": "06:08",
      "date": {
        "$date": {
          "$numberLong": "1617442427859"
        }
      },
      "times": [
        {
          "in": "06:33",
          "out": "12:41"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6068385ddb4d630016429e5a"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1617442909965"
        }
      },
      "times": [
        {
          "in": "06:04",
          "out": "12:14"
        },
        {
          "in": "14:15",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60683962db4d630016429e5c"
      },
      "totalTimes": "04:15",
      "date": {
        "$date": {
          "$numberLong": "1617443170568"
        }
      },
      "times": [
        {
          "in": "06:46",
          "out": "11:01"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60683b82db4d630016429e5e"
      },
      "totalTimes": "05:07",
      "date": {
        "$date": {
          "$numberLong": "1617443714042"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683b98db4d630016429e60"
      },
      "totalTimes": "05:07",
      "date": {
        "$date": {
          "$numberLong": "1617443736293"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683c1adb4d630016429e62"
      },
      "totalTimes": "04:04",
      "date": {
        "$date": {
          "$numberLong": "1617443866617"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683c2adb4d630016429e64"
      },
      "totalTimes": "05:03",
      "date": {
        "$date": {
          "$numberLong": "1617443882310"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:01"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683c89db4d630016429e66"
      },
      "totalTimes": "04:15",
      "date": {
        "$date": {
          "$numberLong": "1617443977331"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:14"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683ca3db4d630016429e68"
      },
      "totalTimes": "04:05",
      "date": {
        "$date": {
          "$numberLong": "1617444003328"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:05"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60683ce4db4d630016429e6b"
      },
      "totalTimes": "05:00",
      "date": {
        "$date": {
          "$numberLong": "1617444068101"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:01"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60683d0fdb4d630016429e6d"
      },
      "totalTimes": "05:01",
      "date": {
        "$date": {
          "$numberLong": "1617444111512"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683d20db4d630016429e6f"
      },
      "totalTimes": "05:01",
      "date": {
        "$date": {
          "$numberLong": "1617444128958"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683d21db4d630016429e71"
      },
      "totalTimes": "04:09",
      "date": {
        "$date": {
          "$numberLong": "1617444129120"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:11"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683d4cdb4d630016429e73"
      },
      "totalTimes": "05:02",
      "date": {
        "$date": {
          "$numberLong": "1617444172678"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:04"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683d78db4d630016429e74"
      },
      "totalTimes": "06:53",
      "date": {
        "$date": {
          "$numberLong": "1617444216211"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "13:56"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683d97db4d630016429e76"
      },
      "totalTimes": "04:33",
      "date": {
        "$date": {
          "$numberLong": "1617444247175"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:37"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683da9db4d630016429e78"
      },
      "totalTimes": "05:54",
      "date": {
        "$date": {
          "$numberLong": "1617444265036"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:58"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683ddadb4d630016429e7a"
      },
      "totalTimes": "04:07",
      "date": {
        "$date": {
          "$numberLong": "1617444314543"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:12"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683de2db4d630016429e7c"
      },
      "totalTimes": "04:04",
      "date": {
        "$date": {
          "$numberLong": "1617444322401"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:09"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60683e7fdb4d630016429e7e"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617444479052"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:15"
        },
        {
          "in": "13:05",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60683eb7db4d630016429e80"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1617444535377"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "11:08"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60684502db4d630016429e82"
      },
      "totalTimes": "05:34",
      "date": {
        "$date": {
          "$numberLong": "1617446146095"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:32"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60684732db4d630016429e84"
      },
      "totalTimes": "03:17",
      "date": {
        "$date": {
          "$numberLong": "1617446706972"
        }
      },
      "times": [
        {
          "in": "07:45",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60684bb7db4d630016429e86"
      },
      "totalTimes": "04:46",
      "date": {
        "$date": {
          "$numberLong": "1617447863589"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:50"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60684bfbdb4d630016429e88"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1617447931056"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "13:30"
        },
        {
          "in": "15:31",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60684c66db4d630016429e8a"
      },
      "totalTimes": "09:53",
      "date": {
        "$date": {
          "$numberLong": "1617448038040"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "6068511cdb4d630016429e8b"
      },
      "totalTimes": "05:16",
      "date": {
        "$date": {
          "$numberLong": "1617449244384"
        }
      },
      "times": [
        {
          "in": "08:27",
          "out": "12:01"
        },
        {
          "in": "16:19",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606866d0db4d630016429e8d"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617454800972"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:00"
        },
        {
          "in": "16:00",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60686775db4d630016429e8f"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1617454965310"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "13:58"
        },
        {
          "in": "16:05",
          "out": "19:59"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60688311db4d630016429e9f"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617462033568"
        }
      },
      "times": [
        {
          "in": "12:00",
          "out": "16:02"
        },
        {
          "in": "18:00",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606883a8db4d630016429ea7"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1617462184197"
        }
      },
      "times": [
        {
          "in": "12:03",
          "out": "17:44"
        },
        {
          "in": "19:26",
          "out": "21:35"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606884d9db4d630016429eac"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1617462489665"
        }
      },
      "times": [
        {
          "in": "12:08",
          "out": "16:08"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60689ebedb4d630016429eb9"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617469118042"
        }
      },
      "times": [
        {
          "in": "13:58",
          "out": "18:00"
        },
        {
          "in": "19:53",
          "out": "00:00"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60690a3adb4d630016429ed4"
      },
      "totalTimes": "08:22",
      "date": {
        "$date": {
          "$numberLong": "1617496634328"
        }
      },
      "times": [
        {
          "in": "21:37",
          "out": "05:59"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606910cedb4d630016429ed7"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617498318820"
        }
      },
      "times": [
        {
          "in": "22:05",
          "out": "06:06"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6069294edb4d630016429ed9"
      },
      "totalTimes": "06:19",
      "date": {
        "$date": {
          "$numberLong": "1617504590854"
        }
      },
      "times": [
        {
          "in": "23:49",
          "out": "06:08"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60698188db4d630016429edd"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617527176639"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "11:29"
        },
        {
          "in": "13:30",
          "out": "16:10"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6069822ddb4d630016429ee1"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617527341449"
        }
      },
      "times": [
        {
          "in": "06:09",
          "out": "10:09"
        },
        {
          "in": "12:00",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6069952adb4d630016429ee3"
      },
      "totalTimes": "07:20",
      "date": {
        "$date": {
          "$numberLong": "1617532202596"
        }
      },
      "times": [
        {
          "in": "07:30",
          "out": "11:23"
        },
        {
          "in": "13:36",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60699eb5db4d630016429ee5"
      },
      "totalTimes": "07:49",
      "date": {
        "$date": {
          "$numberLong": "1617534645952"
        }
      },
      "times": [
        {
          "in": "08:10",
          "out": "12:01"
        },
        {
          "in": "14:05",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6069d4d7db4d630016429eec"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617548503809"
        }
      },
      "times": [
        {
          "in": "12:01",
          "out": "16:02"
        },
        {
          "in": "18:01",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6069e2b5db4d630016429eee"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617552053695"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:01"
        },
        {
          "in": "16:01",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6069e2efdb4d630016429ef1"
      },
      "totalTimes": "05:58",
      "date": {
        "$date": {
          "$numberLong": "1617552111768"
        }
      },
      "times": [
        {
          "in": "13:01",
          "out": "18:59"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6069efeedb4d630016429ef5"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617555438145"
        }
      },
      "times": [
        {
          "in": "13:57",
          "out": "18:04"
        },
        {
          "in": "20:00",
          "out": "00:02"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606a5f41db4d630016429f03"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1617583937748"
        }
      },
      "times": [
        {
          "in": "21:52",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606a6152db4d630016429f06"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617584466757"
        }
      },
      "times": [
        {
          "in": "22:01",
          "out": "06:05"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "606a8325db4d630016429f09"
      },
      "totalTimes": "05:33",
      "date": {
        "$date": {
          "$numberLong": "1617593125436"
        }
      },
      "times": [
        {
          "in": "00:25",
          "out": "05:58"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606ad16bdb4d630016429f0c"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1617613163202"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:02"
        },
        {
          "in": "12:09",
          "out": "16:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ad1fedb4d630016429f0f"
      },
      "totalTimes": "13:29",
      "date": {
        "$date": {
          "$numberLong": "1617613310629"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "19:30"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "606ad3c3db4d630016429f12"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617613763045"
        }
      },
      "times": [
        {
          "in": "06:09",
          "out": "10:53"
        },
        {
          "in": "12:57",
          "out": "16:15"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "606adbf9db4d630016429f14"
      },
      "totalTimes": "08:26",
      "date": {
        "$date": {
          "$numberLong": "1617615865166"
        }
      },
      "times": [
        {
          "in": "06:44",
          "out": "13:05"
        },
        {
          "in": "14:57",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606adc11db4d630016429f16"
      },
      "totalTimes": "08:59",
      "date": {
        "$date": {
          "$numberLong": "1617615889971"
        }
      },
      "times": [
        {
          "in": "06:44",
          "out": "11:02"
        },
        {
          "in": "13:07",
          "out": "17:48"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606add74db4d630016429f18"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617616244990"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "10:59"
        },
        {
          "in": "13:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606ade40db4d630016429f1a"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1617616448439"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:09"
        },
        {
          "in": "12:59",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606adf41db4d630016429f1e"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1617616705984"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:04"
        },
        {
          "in": "13:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606adf73db4d630016429f20"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1617616755876"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:03"
        },
        {
          "in": "12:59",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606adf8bdb4d630016429f22"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617616779620"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:07"
        },
        {
          "in": "13:01",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606adf8edb4d630016429f24"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1617616782802"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:11"
        },
        {
          "in": "14:02",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606adfb9db4d630016429f26"
      },
      "totalTimes": "09:09",
      "date": {
        "$date": {
          "$numberLong": "1617616825201"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:05"
        },
        {
          "in": "14:01",
          "out": "18:05"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ae034db4d630016429f28"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617616948947"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:02"
        },
        {
          "in": "14:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ae08cdb4d630016429f2a"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1617617036866"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:04"
        },
        {
          "in": "14:01",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ae125db4d630016429f2c"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1617617189060"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:01"
        },
        {
          "in": "14:02",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606ae147db4d630016429f2e"
      },
      "totalTimes": "08:58",
      "date": {
        "$date": {
          "$numberLong": "1617617223134"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:05"
        },
        {
          "in": "14:02",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ae158db4d630016429f30"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617617240659"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:05"
        },
        {
          "in": "14:02",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ae1a4db4d630016429f32"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1617617316634"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:01"
        },
        {
          "in": "14:04",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ae1f7db4d630016429f34"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617617399231"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:09"
        },
        {
          "in": "13:07",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ae27adb4d630016429f36"
      },
      "totalTimes": "09:30",
      "date": {
        "$date": {
          "$numberLong": "1617617530751"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:31"
        },
        {
          "in": "13:18",
          "out": "17:29"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ae2b1db4d630016429f38"
      },
      "totalTimes": "07:33",
      "date": {
        "$date": {
          "$numberLong": "1617617585248"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "16:45"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606aed04db4d630016429f3a"
      },
      "totalTimes": "04:14",
      "date": {
        "$date": {
          "$numberLong": "1617620228782"
        }
      },
      "times": [
        {
          "in": "07:57",
          "out": "12:11"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606aed60db4d630016429f3c"
      },
      "totalTimes": "08:42",
      "date": {
        "$date": {
          "$numberLong": "1617620319996"
        }
      },
      "times": [
        {
          "in": "07:58",
          "out": "12:30"
        },
        {
          "in": "13:18",
          "out": "17:28"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606aed6bdb4d630016429f3e"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1617620331208"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "11:10"
        },
        {
          "out": "17:00",
          "in": "13:01"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606aefefdb4d630016429f40"
      },
      "totalTimes": "07:49",
      "date": {
        "$date": {
          "$numberLong": "1617620975050"
        }
      },
      "times": [
        {
          "in": "08:09",
          "out": "12:07"
        },
        {
          "in": "14:12",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606af0b9db4d630016429f42"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1617621177724"
        }
      },
      "times": [
        {
          "in": "08:12",
          "out": "12:18"
        },
        {
          "in": "14:11",
          "out": "17:59"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606af47bdb4d630016429f44"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1617622139553"
        }
      },
      "times": [
        {
          "in": "08:28",
          "out": "12:32"
        },
        {
          "in": "16:17",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606b09cddb4d630016429f49"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617627597197"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:02"
        },
        {
          "in": "16:07",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "606b0adbdb4d630016429f4c"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617627867207"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:04"
        },
        {
          "in": "16:06",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606b2706e5051c001e5d4344"
      },
      "totalTimes": "09:56",
      "date": {
        "$date": {
          "$numberLong": "1617635078652"
        }
      },
      "times": [
        {
          "in": "12:04",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "606b32d2e5051c001e5d4352"
      },
      "totalTimes": "04:16",
      "date": {
        "$date": {
          "$numberLong": "1617638098948"
        }
      },
      "times": [
        {
          "in": "12:54",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606b353ad995780016bcab23"
      },
      "totalTimes": "12:37",
      "date": {
        "$date": {
          "$numberLong": "1617332400000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "18:37"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "606b3d1dd995780016bcab2e"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617332400000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:03"
        },
        {
          "in": "16:00",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "606b413cd995780016bcab31"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617641788742"
        }
      },
      "times": [
        {
          "in": "13:56",
          "out": "18:00"
        },
        {
          "in": "20:00",
          "out": "00:00"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "606b4405d995780016bcab3f"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1617591600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "12:03"
        },
        {
          "in": "14:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c245f3fe47e001718af0f"
      },
      "totalTimes": "11:57",
      "date": {
        "$date": {
          "$numberLong": "1617699935043"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606c2fc03fe47e001718af11"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617702848751"
        }
      },
      "times": [
        {
          "in": "06:10",
          "out": "10:12"
        },
        {
          "in": "12:03",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606c2ffa3fe47e001718af13"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1617678000000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "10:11"
        },
        {
          "out": "16:08",
          "in": "12:19"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 8
    },{
      "_id": {
        "$oid": "606c302c3fe47e001718af15"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1617702956797"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:13"
        },
        {
          "in": "12:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c31343fe47e001718af18"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1617703220041"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:19"
        },
        {
          "in": "13:02",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c31413fe47e001718af1a"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617703233190"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:02"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c315c3fe47e001718af1d"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1617703260624"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:00"
        },
        {
          "in": "13:58",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c31ac3fe47e001718af20"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617703340486"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:01"
        },
        {
          "in": "13:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c31ac3fe47e001718af22"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1617703340753"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:00"
        },
        {
          "in": "13:58",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c31c43fe47e001718af25"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617703364487"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "13:02"
        },
        {
          "in": "14:55",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c31ce3fe47e001718af27"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617703374617"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:00"
        },
        {
          "in": "13:56",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c32343fe47e001718af29"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1617703476210"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:15"
        },
        {
          "in": "13:00",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c32613fe47e001718af2b"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1617703521957"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "13:03"
        },
        {
          "in": "15:06",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c32bb3fe47e001718af2d"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617703611106"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:02"
        },
        {
          "in": "14:05",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c33003fe47e001718af2f"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617703680119"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:03"
        },
        {
          "in": "14:05",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c33da3fe47e001718af31"
      },
      "totalTimes": "08:50",
      "date": {
        "$date": {
          "$numberLong": "1617703898706"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "12:02"
        },
        {
          "in": "14:03",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c34b43fe47e001718af33"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617704116511"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "11:13"
        },
        {
          "in": "13:12",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c35e53fe47e001718af35"
      },
      "totalTimes": "08:34",
      "date": {
        "$date": {
          "$numberLong": "1617704421588"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "12:02"
        },
        {
          "in": "13:19",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c35e83fe47e001718af37"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617704424365"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:09"
        },
        {
          "in": "14:08",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606c36313fe47e001718af39"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1617704497823"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:05"
        },
        {
          "in": "13:03",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "606c39b83fe47e001718af3b"
      },
      "totalTimes": "07:40",
      "date": {
        "$date": {
          "$numberLong": "1617705400385"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "16:40"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606c3cb73fe47e001718af3d"
      },
      "totalTimes": "06:13",
      "date": {
        "$date": {
          "$numberLong": "1617706167362"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "14:02"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606c3fb43fe47e001718af3e"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1617706932433"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:02"
        },
        {
          "in": "13:17",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c41373fe47e001718af40"
      },
      "totalTimes": "08:46",
      "date": {
        "$date": {
          "$numberLong": "1617707319853"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "12:19"
        },
        {
          "in": "14:14",
          "out": "18:49"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "606c41c23fe47e001718af42"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617707458309"
        }
      },
      "times": [
        {
          "in": "08:10",
          "out": "12:10"
        },
        {
          "in": "14:08",
          "out": "18:08"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c4a9b3fe47e001718af46"
      },
      "totalTimes": "08:29",
      "date": {
        "$date": {
          "$numberLong": "1617709722997"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "12:08"
        },
        {
          "in": "14:01",
          "out": "18:30"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606c5c2a3fe47e001718af48"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617714218639"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:03"
        },
        {
          "in": "16:02",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606c5c803fe47e001718af4b"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1617714304775"
        }
      },
      "times": [
        {
          "in": "10:05",
          "out": "14:00"
        },
        {
          "in": "16:02",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606c6b2f3fe47e001718af56"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1617718063789"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:10"
        },
        {
          "in": "13:01",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "606c75143fe47e001718af5e"
      },
      "totalTimes": "10:20",
      "date": {
        "$date": {
          "$numberLong": "1617720596752"
        }
      },
      "times": [
        {
          "in": "11:49",
          "out": "22:09"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606c78ec3fe47e001718af6b"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1617721580239"
        }
      },
      "times": [
        {
          "in": "12:06",
          "out": "15:59"
        },
        {
          "in": "18:01",
          "out": "22:01"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "606c899d3fe47e001718af7d"
      },
      "totalTimes": "04:40",
      "date": {
        "$date": {
          "$numberLong": "1617725853419"
        }
      },
      "times": [
        {
          "in": "13:17",
          "out": "16:44"
        },
        {
          "in": "18:48",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606cc7143fe47e001718afce"
      },
      "totalTimes": "10:49",
      "date": {
        "$date": {
          "$numberLong": "1617741588801"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "17:39"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "606ce7fc3fe47e001718afda"
      },
      "totalTimes": "10:02",
      "date": {
        "$date": {
          "$numberLong": "1617750012363"
        }
      },
      "times": [
        {
          "in": "20:00",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606cff923fe47e001718afdf"
      },
      "totalTimes": "12:20",
      "date": {
        "$date": {
          "$numberLong": "1617667200000"
        }
      },
      "times": [
        {
          "in": "21:40",
          "out": "10:00"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "606d042d3fe47e001718afe1"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617667200000"
        }
      },
      "times": [
        {
          "in": "22:00",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606d423730fb9910984e2a48"
      },
      "totalTimes": "23:59",
      "date": {
        "$date": {
          "$numberLong": "1617667200000"
        }
      },
      "times": [
        {
          "in": "00:01",
          "out": "00:00"
        }
      ],
      "userId": {
        "$oid": "605a3a12c73ce81a6c2e505d"
      },
      "__v": 11
    },{
      "_id": {
        "$oid": "606d424c30fb9910984e2a49"
      },
      "totalTimes": "10:00",
      "date": {
        "$date": {
          "$numberLong": "1617753600000"
        }
      },
      "times": [
        {
          "in": "22:00",
          "out": "08:00"
        }
      ],
      "userId": {
        "$oid": "605a3a12c73ce81a6c2e505d"
      },
      "__v": 9
    },{
      "_id": {
        "$oid": "606d74a23fe47e001718afe5"
      },
      "totalTimes": "10:06",
      "date": {
        "$date": {
          "$numberLong": "1617786018538"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606d752a3fe47e001718afe9"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1617786154079"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "10:08"
        },
        {
          "in": "12:00",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d752d3fe47e001718afeb"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617786157127"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "10:05"
        },
        {
          "in": "12:08",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d80453fe47e001718afed"
      },
      "totalTimes": "10:29",
      "date": {
        "$date": {
          "$numberLong": "1617788997040"
        }
      },
      "times": [
        {
          "in": "06:49",
          "out": "17:18"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606d81473fe47e001718afef"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1617789255550"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:05"
        },
        {
          "in": "13:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d81b43fe47e001718aff1"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1617789364844"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:00"
        },
        {
          "in": "13:54",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d820b3fe47e001718aff3"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617789451068"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:58"
        },
        {
          "in": "13:56",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d82693fe47e001718aff5"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1617789545233"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        },
        {
          "in": "13:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "606d827b3fe47e001718aff7"
      },
      "totalTimes": "21:56",
      "date": {
        "$date": {
          "$numberLong": "1617789562996"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        },
        {
          "in": "13:10",
          "out": "16:55"
        },
        {
          "in": "16:55",
          "out": "07:05"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "606d82ba3fe47e001718aff9"
      },
      "totalTimes": "10:08",
      "date": {
        "$date": {
          "$numberLong": "1617789626155"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "13:09"
        },
        {
          "in": "13:09",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d82ce3fe47e001718affb"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617789646568"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:03"
        },
        {
          "in": "13:03",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "606d82e83fe47e001718affd"
      },
      "totalTimes": "12:41",
      "date": {
        "$date": {
          "$numberLong": "1617789672344"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "19:42"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606d83153fe47e001718afff"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617789717904"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:02"
        },
        {
          "in": "13:02",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d83393fe47e001718b001"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617789753064"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "606d83603fe47e001718b003"
      },
      "totalTimes": "08:50",
      "date": {
        "$date": {
          "$numberLong": "1617789792778"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:58"
        },
        {
          "in": "13:57",
          "out": "17:52"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d83ef3fe47e001718b005"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617789935835"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:02"
        },
        {
          "in": "14:03",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d843d3fe47e001718b007"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617790013071"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:02"
        },
        {
          "in": "14:03",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d843f3fe47e001718b009"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617790015215"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:59"
        },
        {
          "in": "14:00",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d85383fe47e001718b00b"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1617790264899"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:06"
        },
        {
          "in": "13:08",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d85a93fe47e001718b00d"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1617790377429"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d86503fe47e001718b00f"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1617790544202"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:01"
        },
        {
          "in": "14:02",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606d874b3fe47e001718b012"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1617790795966"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "12:10"
        },
        {
          "in": "14:01",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d88ac3fe47e001718b014"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1617791148059"
        }
      },
      "times": [
        {
          "in": "07:25",
          "out": "12:49"
        },
        {
          "in": "14:27",
          "out": "17:26"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d8d743fe47e001718b016"
      },
      "totalTimes": "08:28",
      "date": {
        "$date": {
          "$numberLong": "1617792372773"
        }
      },
      "times": [
        {
          "in": "07:46",
          "out": "12:09"
        },
        {
          "in": "13:20",
          "out": "17:25"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d8e3b3fe47e001718b018"
      },
      "totalTimes": "10:09",
      "date": {
        "$date": {
          "$numberLong": "1617792571164"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "17:58"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606d8e3c3fe47e001718b01a"
      },
      "totalTimes": "06:06",
      "date": {
        "$date": {
          "$numberLong": "1617792572342"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "13:55"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606d90ab3fe47e001718b01c"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1617793195953"
        }
      },
      "times": [
        {
          "in": "07:59",
          "out": "13:07"
        },
        {
          "in": "15:05",
          "out": "18:13"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d91943fe47e001718b01e"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1617793428012"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:03"
        },
        {
          "in": "14:12",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d92133fe47e001718b020"
      },
      "totalTimes": "16:50",
      "date": {
        "$date": {
          "$numberLong": "1617793555185"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "11:59"
        },
        {
          "in": "13:39",
          "out": "02:35"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606d92a83fe47e001718b022"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617793704661"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "12:10"
        },
        {
          "in": "14:09",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606dac7d3fe47e001718b024"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617800317177"
        }
      },
      "times": [
        {
          "in": "09:58",
          "out": "13:58"
        },
        {
          "in": "16:01",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606dae443fe47e001718b027"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1617800772513"
        }
      },
      "times": [
        {
          "in": "10:06",
          "out": "14:00"
        },
        {
          "in": "16:21",
          "out": "20:17"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606dc9d53fe47e001718b03a"
      },
      "totalTimes": "11:43",
      "date": {
        "$date": {
          "$numberLong": "1617807829588"
        }
      },
      "times": [
        {
          "in": "12:03",
          "out": "23:46"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606dcb593fe47e001718b03e"
      },
      "totalTimes": "19:52",
      "date": {
        "$date": {
          "$numberLong": "1617808217772"
        }
      },
      "times": [
        {
          "in": "12:10",
          "out": "08:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606e377e3fe47e001718b07c"
      },
      "totalTimes": "10:13",
      "date": {
        "$date": {
          "$numberLong": "1617835902194"
        }
      },
      "times": [
        {
          "in": "19:51",
          "out": "06:04"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "606e557e3fe47e001718b080"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617753600000"
        }
      },
      "times": [
        {
          "in": "21:59",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606e562e3fe47e001718b083"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1617753600000"
        }
      },
      "times": [
        {
          "in": "22:02",
          "out": "06:10"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "606ec6f93fe47e001718b086"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1617872633637"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "10:02"
        },
        {
          "in": "12:04",
          "out": "16:18"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ec6fd3fe47e001718b088"
      },
      "totalTimes": "07:34",
      "date": {
        "$date": {
          "$numberLong": "1617872637361"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "10:05"
        },
        {
          "in": "12:29",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ec7553fe47e001718b08b"
      },
      "totalTimes": "08:55",
      "date": {
        "$date": {
          "$numberLong": "1617872725537"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "11:17"
        },
        {
          "in": "13:19",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ec9283fe47e001718b08e"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1617873192277"
        }
      },
      "times": [
        {
          "in": "06:13",
          "out": "11:06"
        },
        {
          "in": "13:03",
          "out": "16:08"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed21c3fe47e001718b090"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1617875484595"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "11:59"
        },
        {
          "in": "13:55",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed2aa3fe47e001718b092"
      },
      "totalTimes": "10:53",
      "date": {
        "$date": {
          "$numberLong": "1617875626285"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "17:46"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "606ed3493fe47e001718b094"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1617875785029"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:04"
        },
        {
          "in": "13:57",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed3be3fe47e001718b096"
      },
      "totalTimes": "08:27",
      "date": {
        "$date": {
          "$numberLong": "1617875902269"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:02"
        },
        {
          "in": "13:58",
          "out": "17:21"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed3fd3fe47e001718b099"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1617875965812"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:02"
        },
        {
          "in": "12:56",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed4033fe47e001718b09b"
      },
      "totalTimes": "04:04",
      "date": {
        "$date": {
          "$numberLong": "1617875971590"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:03"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606ed4383fe47e001718b09d"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1617876024685"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:01"
        },
        {
          "in": "13:03",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606ed46f3fe47e001718b09f"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1617876079669"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:20"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed4773fe47e001718b0a1"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1617876087121"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:07"
        },
        {
          "in": "13:12",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed4bd3fe47e001718b0a3"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1617876157073"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:02"
        },
        {
          "in": "14:01",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed4e63fe47e001718b0a5"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617876198095"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:03"
        },
        {
          "in": "13:03",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed4ee3fe47e001718b0a7"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1617876206073"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:03"
        },
        {
          "in": "14:02",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed56f3fe47e001718b0aa"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1617876335811"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:02"
        },
        {
          "in": "14:16",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed5793fe47e001718b0ac"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1617876345130"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:06"
        },
        {
          "in": "13:06",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed6573fe47e001718b0ae"
      },
      "totalTimes": "07:49",
      "date": {
        "$date": {
          "$numberLong": "1617876567712"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:00"
        },
        {
          "in": "14:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed67b3fe47e001718b0b0"
      },
      "totalTimes": "08:47",
      "date": {
        "$date": {
          "$numberLong": "1617876603162"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:08"
        },
        {
          "in": "14:09",
          "out": "17:58"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed6803fe47e001718b0b2"
      },
      "totalTimes": "07:49",
      "date": {
        "$date": {
          "$numberLong": "1617876608513"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:06"
        },
        {
          "in": "13:12",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed68d3fe47e001718b0b4"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1617876621452"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ed6bb3fe47e001718b0b6"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1617876667397"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:05"
        },
        {
          "in": "12:35",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606edb373fe47e001718b0b8"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1617877815457"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:00"
        },
        {
          "in": "13:58",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606edfab3fe47e001718b0ba"
      },
      "totalTimes": "06:06",
      "date": {
        "$date": {
          "$numberLong": "1617878955648"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "13:55"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606ee2453fe47e001718b0bc"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617879621187"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "13:01"
        },
        {
          "in": "14:59",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ee2463fe47e001718b0be"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617879622793"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:07"
        },
        {
          "in": "13:03",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ee2c63fe47e001718b0c1"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617879750446"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:06"
        },
        {
          "in": "14:04",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ee2df3fe47e001718b0c3"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1617879775801"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:05"
        },
        {
          "in": "14:15",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ee32d3fe47e001718b0c5"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1617879853880"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "13:14"
        },
        {
          "in": "15:23",
          "out": "18:28"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ee3483fe47e001718b0c7"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1617879880015"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:08"
        },
        {
          "in": "14:16",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ee47e3fe47e001718b0c9"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1617880190205"
        }
      },
      "times": [
        {
          "in": "08:09",
          "out": "12:03"
        },
        {
          "in": "14:04",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606ef40b3fe47e001718b0cb"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1617884171208"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:02"
        },
        {
          "in": "14:00",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "606ef66e3fe47e001718b0cd"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1617678000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        },
        {
          "in": "14:00",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "606ef6d63fe47e001718b0ce"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1617764400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:05"
        },
        {
          "in": "14:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "606efe933fe47e001718b0cf"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617886867660"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:00"
        },
        {
          "in": "16:02",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606effb93fe47e001718b0d3"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1617887161235"
        }
      },
      "times": [
        {
          "in": "10:06",
          "out": "14:04"
        },
        {
          "in": "16:05",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "606f1d513fe47e001718b0f1"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1617894737826"
        }
      },
      "times": [
        {
          "in": "12:12",
          "out": "16:15"
        },
        {
          "in": "18:02",
          "out": "22:05"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "606f1f483fe47e001718b0f3"
      },
      "totalTimes": "07:40",
      "date": {
        "$date": {
          "$numberLong": "1617895240953"
        }
      },
      "times": [
        {
          "in": "12:20",
          "out": "18:09"
        },
        {
          "in": "20:09",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "606f36153fe47e001718b106"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617901077278"
        }
      },
      "times": [
        {
          "in": "13:57",
          "out": "17:59"
        },
        {
          "in": "20:00",
          "out": "00:00"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6070185d3fe47e001718b13f"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617959005121"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "10:03"
        },
        {
          "in": "12:01",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607022003fe47e001718b141"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1617961472481"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:03"
        },
        {
          "in": "12:17",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 8
    },{
      "_id": {
        "$oid": "6070225a3fe47e001718b143"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617961562623"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "12:20"
        },
        {
          "in": "14:24",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607024893fe47e001718b145"
      },
      "totalTimes": "06:12",
      "date": {
        "$date": {
          "$numberLong": "1617850800000"
        }
      },
      "times": [
        {
          "in": "23:48",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607024973fe47e001718b146"
      },
      "totalTimes": "06:12",
      "date": {
        "$date": {
          "$numberLong": "1617850800000"
        }
      },
      "times": [
        {
          "in": "23:48",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "607024b83fe47e001718b147"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1617962168211"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:05"
        },
        {
          "in": "13:03",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607024ba3fe47e001718b149"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1617962170399"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:59"
        },
        {
          "in": "13:56",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 9
    },{
      "_id": {
        "$oid": "607024f13fe47e001718b14b"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1617962225574"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:02"
        },
        {
          "in": "12:58",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607025053fe47e001718b14d"
      },
      "totalTimes": "08:22",
      "date": {
        "$date": {
          "$numberLong": "1617962245590"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "12:02"
        },
        {
          "in": "13:59",
          "out": "17:16"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607025433fe47e001718b14f"
      },
      "totalTimes": "08:48",
      "date": {
        "$date": {
          "$numberLong": "1617962307358"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:04"
        },
        {
          "in": "14:03",
          "out": "17:45"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 9
    },{
      "_id": {
        "$oid": "607025823fe47e001718b151"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617850800000"
        }
      },
      "times": [
        {
          "out": "06:03",
          "in": "22:00"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607025a93fe47e001718b152"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617962409116"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:00"
        },
        {
          "in": "13:01",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 10
    },{
      "_id": {
        "$oid": "607025f43fe47e001718b154"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617962484934"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:05"
        },
        {
          "in": "13:03",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607026913fe47e001718b156"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617962641220"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:05"
        },
        {
          "in": "14:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 9
    },{
      "_id": {
        "$oid": "607026a03fe47e001718b158"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1617962656541"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:01"
        },
        {
          "in": "13:03",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607026cc3fe47e001718b15a"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617962700217"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:05"
        },
        {
          "in": "14:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607026d93fe47e001718b15d"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1617962713558"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:00"
        },
        {
          "in": "13:04",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607026dd3fe47e001718b15f"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617962717565"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:05"
        },
        {
          "in": "14:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607026ff3fe47e001718b161"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1617962751277"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:59"
        },
        {
          "in": "13:50",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 9
    },{
      "_id": {
        "$oid": "607027273fe47e001718b163"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1617962791032"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:01"
        },
        {
          "in": "13:58",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607027313fe47e001718b165"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1617962801728"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:04"
        },
        {
          "in": "13:02",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607027453fe47e001718b167"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1617962821958"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:06"
        },
        {
          "in": "12:19",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607027553fe47e001718b169"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617962837631"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:05"
        },
        {
          "in": "12:59",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "607027743fe47e001718b16b"
      },
      "totalTimes": "09:11",
      "date": {
        "$date": {
          "$numberLong": "1617962868882"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:10"
        },
        {
          "in": "14:05",
          "out": "18:13"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607029363fe47e001718b16d"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617963318480"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "11:10"
        },
        {
          "in": "13:06",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607029c13fe47e001718b16f"
      },
      "totalTimes": "07:26",
      "date": {
        "$date": {
          "$numberLong": "1617963457062"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "12:00"
        },
        {
          "in": "14:02",
          "out": "16:45"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607029eb3fe47e001718b171"
      },
      "totalTimes": "08:54",
      "date": {
        "$date": {
          "$numberLong": "1617963499138"
        }
      },
      "times": [
        {
          "in": "07:18",
          "out": "12:47"
        },
        {
          "in": "13:40",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "60702bf53fe47e001718b173"
      },
      "totalTimes": "09:42",
      "date": {
        "$date": {
          "$numberLong": "1617964021029"
        }
      },
      "times": [
        {
          "in": "07:27",
          "out": "12:25"
        },
        {
          "in": "13:05",
          "out": "17:49"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607030dc3fe47e001718b175"
      },
      "totalTimes": "06:07",
      "date": {
        "$date": {
          "$numberLong": "1617965276432"
        }
      },
      "times": [
        {
          "in": "07:47",
          "out": "13:54"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607032533fe47e001718b177"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1617965651496"
        }
      },
      "times": [
        {
          "in": "07:54",
          "out": "12:04"
        },
        {
          "in": "14:02",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607033f43fe47e001718b179"
      },
      "totalTimes": "10:29",
      "date": {
        "$date": {
          "$numberLong": "1617966068836"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "18:30"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6070343d3fe47e001718b17b"
      },
      "totalTimes": "08:44",
      "date": {
        "$date": {
          "$numberLong": "1617966141774"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:23"
        },
        {
          "in": "13:01",
          "out": "17:24"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 9
    },{
      "_id": {
        "$oid": "607034763fe47e001718b17d"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617966198529"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:03"
        },
        {
          "in": "14:01",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607034cd3fe47e001718b17f"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1617966285610"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "13:43"
        },
        {
          "in": "15:51",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607036ad3fe47e001718b181"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1617966765618"
        }
      },
      "times": [
        {
          "in": "08:12",
          "out": "12:09"
        },
        {
          "in": "14:09",
          "out": "18:07"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607050ca3fe47e001718b185"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617973450318"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:04"
        },
        {
          "in": "16:01",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 8
    },{
      "_id": {
        "$oid": "607051433fe47e001718b189"
      },
      "totalTimes": "07:37",
      "date": {
        "$date": {
          "$numberLong": "1617973571724"
        }
      },
      "times": [
        {
          "in": "10:06",
          "out": "14:00"
        },
        {
          "in": "16:18",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6070536d3fe47e001718b18b"
      },
      "totalTimes": "10:01",
      "date": {
        "$date": {
          "$numberLong": "1617764400000"
        }
      },
      "times": [
        {
          "in": "20:00",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6070538c3fe47e001718b18c"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1617850800000"
        }
      },
      "times": [
        {
          "in": "22:01",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 11
    },{
      "_id": {
        "$oid": "60705f96a22a3728f022b795"
      },
      "totalTimes": "10:54",
      "date": {
        "$date": {
          "$numberLong": "1617926400000"
        }
      },
      "times": [
        {
          "in": "06:30",
          "out": "17:24"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6070b321919053001d9c7cfb"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617840000000"
        }
      },
      "times": [
        {
          "in": "12:00"
        }
      ],
      "userId": {
        "$oid": "605a3a12c73ce81a6c2e505d"
      },
      "__v": 12
    },{
      "_id": {
        "$oid": "6070e73cd7153c0016d5649d"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1617926400000"
        }
      },
      "times": [
        {
          "in": "13:59",
          "out": "17:57"
        },
        {
          "in": "20:01",
          "out": "00:05"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6070e80fd7153c0016d5649e"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1617926400000"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "12:05"
        },
        {
          "in": "14:02",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6070e832d7153c0016d5649f"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1617926400000"
        }
      },
      "times": [
        {
          "in": "11:57",
          "out": "17:56"
        },
        {
          "in": "19:55",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6070e855d7153c0016d564a0"
      },
      "totalTimes": "08:25",
      "date": {
        "$date": {
          "$numberLong": "1617926400000"
        }
      },
      "times": [
        {
          "in": "11:36",
          "out": "16:19"
        },
        {
          "in": "18:17",
          "out": "21:59"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60716bbed7153c0016d564b4"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "06:11",
          "out": "10:02"
        },
        {
          "in": "12:01",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60717623d7153c0016d564be"
      },
      "totalTimes": "05:51",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:46"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60717f71d7153c0016d564e1"
      },
      "totalTimes": "05:07",
      "date": {
        "$date": {
          "$numberLong": "1617926400000"
        }
      },
      "times": [
        {
          "in": "10:10",
          "out": "10:11"
        },
        {
          "in": "10:12",
          "out": "15:18"
        }
      ],
      "userId": {
        "$oid": "605a3a12c73ce81a6c2e505d"
      },
      "__v": 26
    },{
      "_id": {
        "$oid": "6071812ad7153c0016d564e5"
      },
      "totalTimes": "05:01",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:04"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60718191d7153c0016d564e6"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:06"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607181eed7153c0016d564e7"
      },
      "totalTimes": "04:07",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "10:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60718217d7153c0016d564e8"
      },
      "totalTimes": "03:42",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:41",
          "out": "11:23"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6071825dd7153c0016d564ea"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6071828ed7153c0016d564eb"
      },
      "totalTimes": "05:59",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "13:01"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60718351d7153c0016d564ed"
      },
      "totalTimes": "05:10",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "12:07"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607183e0d7153c0016d564ee"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "10:03"
        },
        {
          "in": "12:16",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60718408d7153c0016d564ef"
      },
      "totalTimes": "04:30",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:29"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60718432d7153c0016d564f0"
      },
      "totalTimes": "05:17",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:26"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60718459d7153c0016d564f1"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607184bbd7153c0016d564f2"
      },
      "totalTimes": "05:15",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:18"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607184e1d7153c0016d564f4"
      },
      "totalTimes": "07:02",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:07"
        },
        {
          "in": "13:28",
          "out": "16:26"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60718502d7153c0016d564f5"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:12"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60718527d7153c0016d564f6"
      },
      "totalTimes": "06:06",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "13:54"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60718579d7153c0016d564f9"
      },
      "totalTimes": "04:03",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:04"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607185bfb33a6700171c43a7"
      },
      "totalTimes": "05:53",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "13:55"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607185c2b33a6700171c43a9"
      },
      "totalTimes": "03:53",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "11:55"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607185cbb33a6700171c43ab"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:05"
        },
        {
          "in": "14:05",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6071862ab33a6700171c43ad"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:04"
        },
        {
          "in": "14:57",
          "out": "19:02"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60718640b33a6700171c43b0"
      },
      "totalTimes": "05:24",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "13:28"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607186abb33a6700171c43b2"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:08"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607186dbb33a6700171c43b4"
      },
      "totalTimes": "06:08",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "13:09"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607186ffb33a6700171c43b5"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1617926400000"
        }
      },
      "times": [
        {
          "in": "21:57",
          "out": "06:10"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "607187d8b33a6700171c43b6"
      },
      "totalTimes": "04:09",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:06"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60718951b33a6700171c43bb"
      },
      "totalTimes": "07:38",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "08:17",
          "out": "13:14"
        },
        {
          "in": "15:21",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607189f6b33a6700171c43bd"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:41"
        },
        {
          "in": "13:45",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "60718c3fb33a6700171c43c6"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "08:30",
          "out": "12:01"
        },
        {
          "in": "13:56",
          "out": "18:13"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6071a159b33a6700171c43c8"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:00"
        },
        {
          "in": "15:56",
          "out": "20:06"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6071a254b33a6700171c43cc"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:01"
        },
        {
          "in": "16:02",
          "out": "20:21"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6071bdffb33a6700171c43dc"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "16:06"
        },
        {
          "in": "18:03",
          "out": "22:07"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6071d27eb33a6700171c43ec"
      },
      "totalTimes": "03:35",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "13:29",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6071d64eb33a6700171c43ef"
      },
      "totalTimes": "03:59",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:03"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6071d9d6b33a6700171c43fc"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "14:01",
          "out": "18:00"
        },
        {
          "in": "19:56",
          "out": "23:52"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60721a0db33a6700171c4411"
      },
      "totalTimes": "11:35",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "18:35",
          "out": "06:10"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60724a6db33a6700171c4417"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "22:01",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "607263ddb33a6700171c441a"
      },
      "totalTimes": "06:08",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "23:50",
          "out": "05:58"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6072bac7b33a6700171c4420"
      },
      "totalTimes": "05:14",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:17"
        },
        {
          "in": "12:04",
          "out": "13:01"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6072bc5db33a6700171c4423"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "06:07",
          "out": "12:27"
        },
        {
          "in": "14:50",
          "out": "16:28"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6072d2dcb33a6700171c4426"
      },
      "totalTimes": "08:45",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "07:43",
          "out": "12:04"
        },
        {
          "in": "13:34",
          "out": "17:58"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6072d7d3b33a6700171c4428"
      },
      "totalTimes": "08:32",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:04"
        },
        {
          "in": "14:01",
          "out": "18:33"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607311ceb33a6700171c442e"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "12:12",
          "out": "20:18"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60731c35b33a6700171c4431"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:00"
        },
        {
          "in": "16:00",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60731dcab33a6700171c4434"
      },
      "totalTimes": "06:01",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "13:03",
          "out": "19:04"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60732bccb33a6700171c443b"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "14:03",
          "out": "18:03"
        },
        {
          "in": "19:56",
          "out": "23:52"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60739b2bb33a6700171c4446"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "21:58",
          "out": "06:15"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6073b55ab33a6700171c4448"
      },
      "totalTimes": "06:28",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "23:50",
          "out": "06:18"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60740f8cb33a6700171c444b"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:14",
          "out": "10:18"
        },
        {
          "in": "12:20",
          "out": "16:10"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741095b33a6700171c444f"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:19",
          "out": "10:19"
        },
        {
          "in": "11:58",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741854b33a6700171c4451"
      },
      "totalTimes": "08:45",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "12:19"
        },
        {
          "in": "14:06",
          "out": "17:24"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6074186eb33a6700171c4453"
      },
      "totalTimes": "08:29",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:04"
        },
        {
          "in": "12:52",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607418abb33a6700171c4455"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:07"
        },
        {
          "in": "13:07",
          "out": "17:16"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607418d9b33a6700171c4457"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:59"
        },
        {
          "in": "14:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6074193db33a6700171c4459"
      },
      "totalTimes": "11:55",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "18:51"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6074199cb33a6700171c445b"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:01"
        },
        {
          "in": "13:03",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607419aab33a6700171c445d"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:00"
        },
        {
          "in": "14:03",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607419fdb33a6700171c445f"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:00"
        },
        {
          "in": "13:58",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741a18b33a6700171c4461"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:19"
        },
        {
          "in": "13:21",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741a70b33a6700171c4463"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:08"
        },
        {
          "in": "13:59",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741ab4b33a6700171c4465"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        },
        {
          "in": "13:59",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741aeeb33a6700171c4467"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:03"
        },
        {
          "in": "13:04",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60741af1b33a6700171c4469"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:03"
        },
        {
          "in": "13:05",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741b03b33a6700171c446b"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:05"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60741b45b33a6700171c446d"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:06"
        },
        {
          "in": "14:04",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741b5bb33a6700171c446f"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:06"
        },
        {
          "in": "14:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741b80b33a6700171c4471"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:00"
        },
        {
          "in": "13:57",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741bddb33a6700171c4473"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741c28b33a6700171c4475"
      },
      "totalTimes": "07:19",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:00"
        },
        {
          "in": "14:03",
          "out": "16:30"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741c47b33a6700171c4477"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:11"
        },
        {
          "in": "13:00",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741c4ab33a6700171c4479"
      },
      "totalTimes": "08:52",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:01"
        },
        {
          "in": "13:59",
          "out": "17:59"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60741c97b33a6700171c447b"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "22:00",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60741e03b33a6700171c447c"
      },
      "totalTimes": "08:54",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:16",
          "out": "13:01"
        },
        {
          "in": "15:07",
          "out": "18:16"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60742410b33a6700171c447e"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:42",
          "out": "12:11"
        },
        {
          "in": "14:14",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60742588b33a6700171c4480"
      },
      "totalTimes": "06:10",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "13:58"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60742647b33a6700171c4482"
      },
      "totalTimes": "07:15",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "07:51",
          "out": "11:08"
        },
        {
          "in": "13:03",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6074286fb33a6700171c4484"
      },
      "totalTimes": "11:52",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "21:53"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6074288cb33a6700171c4486"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:17"
        },
        {
          "in": "13:17",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607428beb33a6700171c4489"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:02"
        },
        {
          "in": "14:02",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60742b16b33a6700171c448b"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "08:12",
          "out": "12:10"
        },
        {
          "in": "14:10",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60742b97b33a6700171c448d"
      },
      "totalTimes": "11:31",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "08:14",
          "out": "12:05"
        },
        {
          "in": "14:16",
          "out": "21:56"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60744507b33a6700171c448f"
      },
      "totalTimes": "05:01",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "11:06"
        },
        {
          "in": "13:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60744535b33a6700171c4491"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:04"
        },
        {
          "in": "15:57",
          "out": "20:08"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6074455bb33a6700171c4493"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:02"
        },
        {
          "in": "16:00",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607456aeb33a6700171c449e"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "607460adb33a6700171c44a7"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "12:01",
          "out": "16:05"
        },
        {
          "in": "17:36",
          "out": "21:55"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60746437b33a6700171c44b3"
      },
      "totalTimes": "07:38",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "12:16",
          "out": "16:06"
        },
        {
          "in": "18:09",
          "out": "21:57"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6074d16db33a6700171c44ff"
      },
      "totalTimes": "09:58",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "20:02",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6074ed6db33a6700171c4507"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "22:01",
          "out": "05:59"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6074ef01b33a6700171c4509"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "22:08",
          "out": "06:15"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60755d6db33a6700171c450b"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:08"
        },
        {
          "in": "12:03",
          "out": "16:09"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60755dc8b33a6700171c450f"
      },
      "totalTimes": "09:51",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:58"
        },
        {
          "in": "13:01",
          "out": "17:54"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60755dd8b33a6700171c4511"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:03"
        },
        {
          "in": "12:01",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756a10b33a6700171c4514"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:01"
        },
        {
          "in": "12:55",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756a29b33a6700171c4516"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "12:04"
        },
        {
          "in": "13:56",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756afab33a6700171c4518"
      },
      "totalTimes": "08:25",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "12:01"
        },
        {
          "in": "13:57",
          "out": "17:18"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756b5cb33a6700171c451a"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:03"
        },
        {
          "in": "12:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756b8eb33a6700171c451c"
      },
      "totalTimes": "10:07",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60756b92b33a6700171c451e"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:01"
        },
        {
          "in": "13:01",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756beab33a6700171c4520"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:11"
        },
        {
          "in": "14:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756c18b33a6700171c4522"
      },
      "totalTimes": "09:09",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:55"
        },
        {
          "in": "13:36",
          "out": "17:52"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756c50b33a6700171c4524"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:07"
        },
        {
          "in": "12:56",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756c71b33a6700171c4526"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:06"
        },
        {
          "in": "14:01",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756c78b33a6700171c4528"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:58"
        },
        {
          "in": "14:13",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756cb3b33a6700171c452a"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:00"
        },
        {
          "in": "13:02",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60756cb9b33a6700171c452c"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:01"
        },
        {
          "in": "13:55",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756cbbb33a6700171c452e"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:02"
        },
        {
          "in": "14:03",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756d3db33a6700171c4530"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:06"
        },
        {
          "in": "13:04",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756d52b33a6700171c4532"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:08"
        },
        {
          "in": "13:28",
          "out": "17:20"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756d71b33a6700171c4534"
      },
      "totalTimes": "07:22",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "16:28"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756d80b33a6700171c4536"
      },
      "totalTimes": "09:10",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:08"
        },
        {
          "in": "14:02",
          "out": "18:12"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60756e3ab33a6700171c4538"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:03"
        },
        {
          "in": "13:08",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6075780cb33a6700171c453a"
      },
      "totalTimes": "06:07",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:53",
          "out": "14:00"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60757812b33a6700171c453c"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:53",
          "out": "12:10"
        },
        {
          "in": "14:01",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60757890b33a6700171c453e"
      },
      "totalTimes": "10:17",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:55",
          "out": "18:11"
        },
        {
          "in": "18:11",
          "out": "18:12"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607579ebb33a6700171c4540"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:04"
        },
        {
          "in": "13:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60757a1ab33a6700171c4543"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:00"
        },
        {
          "in": "13:59",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60757ad2b33a6700171c4545"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:10"
        },
        {
          "in": "14:03",
          "out": "18:13"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60757c48b33a6700171c4547"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:01"
        },
        {
          "in": "14:08",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60757e0fb33a6700171c4548"
      },
      "totalTimes": "09:50",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "08:18",
          "out": "18:08"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60758816b33a6700171c454a"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "09:01",
          "out": "12:05"
        },
        {
          "in": "13:13",
          "out": "18:08"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6075962db33a6700171c454c"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:04"
        },
        {
          "in": "16:01",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6075966fb33a6700171c454e"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:00"
        },
        {
          "in": "16:01",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6075b320b33a6700171c4563"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "12:05",
          "out": "16:12"
        },
        {
          "in": "17:57",
          "out": "21:57"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6075f817b33a6700171c4589"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:03"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "607620d6b33a6700171c45a8"
      },
      "totalTimes": "10:05",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "19:53",
          "out": "05:58"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60763c0bb33a6700171c45ac"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "21:49",
          "out": "05:58"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60763ddab33a6700171c45ae"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "21:56",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6076adc0b33a6700171c45b1"
      },
      "totalTimes": "07:25",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "05:54",
          "out": "13:19"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6076afb4b33a6700171c45b5"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "09:58"
        },
        {
          "in": "12:02",
          "out": "16:00"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076b63db33a6700171c45b8"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:01"
        },
        {
          "in": "12:15",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6076babcb33a6700171c45b9"
      },
      "totalTimes": "07:00",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "06:49",
          "out": "11:01"
        },
        {
          "in": "12:55",
          "out": "15:43"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6076bc03b33a6700171c45bb"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:59"
        },
        {
          "in": "13:54",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bc6cb33a6700171c45bd"
      },
      "totalTimes": "10:05",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6076bce6b33a6700171c45bf"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:09"
        },
        {
          "in": "13:53",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "6076bcfeb33a6700171c45c1"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:01"
        },
        {
          "in": "13:00",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bd0db33a6700171c45c3"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:08"
        },
        {
          "in": "12:59",
          "out": "16:57"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bdb8b33a6700171c45c5"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:03"
        },
        {
          "in": "16:03",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bdc4b33a6700171c45c7"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        },
        {
          "in": "14:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076be00b33a6700171c45c9"
      },
      "totalTimes": "08:27",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:07"
        },
        {
          "in": "13:55",
          "out": "17:18"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076be8db33a6700171c45cb"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:07"
        },
        {
          "in": "14:04",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bea1b33a6700171c45cd"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:07"
        },
        {
          "in": "14:05",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bea4b33a6700171c45cf"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:07"
        },
        {
          "in": "12:56",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076beccb33a6700171c45d1"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:04"
        },
        {
          "in": "13:01",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bed7b33a6700171c45d3"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:00"
        },
        {
          "in": "13:55",
          "out": "17:20"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bf7ab33a6700171c45d5"
      },
      "totalTimes": "10:39",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "17:49"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6076bf9eb33a6700171c45d7"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:00"
        },
        {
          "in": "13:58",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bfdeb33a6700171c45d9"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "12:04"
        },
        {
          "in": "14:00",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076bff2b33a6700171c45db"
      },
      "totalTimes": "08:46",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "15:58"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6076c0deb33a6700171c45dd"
      },
      "totalTimes": "07:33",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "12:01"
        },
        {
          "in": "14:15",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076c0fcb33a6700171c45df"
      },
      "totalTimes": "07:00",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:16",
          "out": "11:53"
        },
        {
          "in": "14:33",
          "out": "16:56"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076c22db33a6700171c45e1"
      },
      "totalTimes": "07:43",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:21",
          "out": "11:05"
        },
        {
          "in": "13:06",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076c4eab33a6700171c45e3"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:01"
        },
        {
          "in": "13:02",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076c93bb33a6700171c45e5"
      },
      "totalTimes": "06:10",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:51",
          "out": "14:01"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6076ca4eb33a6700171c45e7"
      },
      "totalTimes": "07:06",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "07:56",
          "out": "11:02"
        },
        {
          "in": "13:08",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076cb50b33a6700171c45e9"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:03"
        },
        {
          "in": "13:06",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076cb5fb33a6700171c45eb"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:01"
        },
        {
          "in": "14:02",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076cbd0b33a6700171c45ed"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:04"
        },
        {
          "in": "14:01",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076cc31b33a6700171c45ef"
      },
      "totalTimes": "09:56",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6076cc61b33a6700171c45f1"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "12:04"
        },
        {
          "in": "14:04",
          "out": "18:16"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076ccabb33a6700171c45f3"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:08"
        },
        {
          "in": "14:08",
          "out": "18:08"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6076cebdb33a6700171c45f5"
      },
      "totalTimes": "09:41",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "08:15",
          "out": "17:56"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6076e830b33a6700171c45f9"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:04"
        },
        {
          "in": "15:58",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60770449b33a6700171c460c"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "12:03",
          "out": "17:09"
        },
        {
          "in": "19:15",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60770657b33a6700171c4616"
      },
      "totalTimes": "07:29",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "12:12",
          "out": "15:55"
        },
        {
          "in": "18:04",
          "out": "21:50"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60772022b33a6700171c462b"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "14:02",
          "out": "18:01"
        },
        {
          "in": "20:02",
          "out": "23:53"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60778cb7b33a6700171c465b"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "21:45",
          "out": "05:54"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60779107b33a6700171c465f"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "22:04",
          "out": "06:09"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6077a9b0b33a6700171c4661"
      },
      "totalTimes": "06:08",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "23:49",
          "out": "05:57"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60780037b33a6700171c4666"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:11"
        },
        {
          "in": "12:10",
          "out": "16:15"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780111b33a6700171c4668"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "10:01"
        },
        {
          "in": "12:00",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780c3bb33a6700171c466b"
      },
      "totalTimes": "08:35",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "06:49",
          "out": "11:04"
        },
        {
          "in": "13:14",
          "out": "17:34"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780cc7b33a6700171c466d"
      },
      "totalTimes": "08:22",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:13"
        },
        {
          "in": "13:07",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780daab33a6700171c4670"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:08"
        },
        {
          "in": "12:58",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780e7ab33a6700171c4672"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "10:59"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780e84b33a6700171c4674"
      },
      "totalTimes": "09:20",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:20"
        },
        {
          "in": "13:54",
          "out": "17:53"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780ea8b33a6700171c4676"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:01"
        },
        {
          "in": "13:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780eceb33a6700171c4678"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:02"
        },
        {
          "in": "13:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780ef1b33a6700171c467a"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:02"
        },
        {
          "in": "14:05",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780f2eb33a6700171c467c"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:01"
        },
        {
          "in": "13:17",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780f6ab33a6700171c467f"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:04"
        },
        {
          "in": "14:02",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780f81b33a6700171c4681"
      },
      "totalTimes": "10:07",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:18"
        },
        {
          "in": "14:08",
          "out": "19:00"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60780fa0b33a6700171c4683"
      },
      "totalTimes": "04:58",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60781062b33a6700171c4685"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:02"
        },
        {
          "in": "14:01",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781074b33a6700171c4687"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:03"
        },
        {
          "in": "14:09",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781098b33a6700171c4689"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "11:01"
        },
        {
          "in": "13:17",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607810bbb33a6700171c468b"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:00"
        },
        {
          "in": "14:02",
          "out": "17:20"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607810e6b33a6700171c468d"
      },
      "totalTimes": "07:45",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:01"
        },
        {
          "in": "14:16",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60781164b33a6700171c468f"
      },
      "totalTimes": "08:28",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "12:13"
        },
        {
          "in": "14:00",
          "out": "17:26"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6078116fb33a6700171c4691"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:03"
        },
        {
          "in": "12:59",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781213b33a6700171c4693"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "11:59"
        },
        {
          "in": "14:01",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607812d9b33a6700171c4695"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:18",
          "out": "11:24"
        },
        {
          "in": "13:22",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607812e8b33a6700171c4697"
      },
      "totalTimes": "07:07",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:18",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781b3db33a6700171c4699"
      },
      "totalTimes": "06:06",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:53",
          "out": "13:59"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60781baeb33a6700171c469b"
      },
      "totalTimes": "09:54",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:55",
          "out": "17:49"
        },
        {
          "in": "17:49",
          "out": "17:49"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781c54b33a6700171c469d"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "07:58",
          "out": "12:01"
        },
        {
          "in": "13:06",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781d31b33a6700171c469f"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:01"
        },
        {
          "in": "13:58",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781e19b33a6700171c46a1"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:08"
        },
        {
          "in": "14:11",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781f5cb33a6700171c46a3"
      },
      "totalTimes": "09:47",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "08:11",
          "out": "12:14"
        },
        {
          "in": "12:15",
          "out": "17:59"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60781f94b33a6700171c46a5"
      },
      "totalTimes": "09:53",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "08:12",
          "out": "18:05"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60781fe0b33a6700171c46a7"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "08:13",
          "out": "12:06"
        },
        {
          "in": "14:08",
          "out": "18:05"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "607838a2b33a6700171c46a9"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:03"
        },
        {
          "in": "16:00",
          "out": "20:06"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607839c4b33a6700171c46ac"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:03"
        },
        {
          "in": "15:59",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60784e3fb33a6700171c46b9"
      },
      "totalTimes": "04:23",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "11:00",
          "out": "13:01"
        },
        {
          "in": "15:02",
          "out": "17:24"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60784efdb33a6700171c46bb"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:03"
        },
        {
          "in": "12:02",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6078543fb33a6700171c46bc"
      },
      "totalTimes": "07:30",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "11:57",
          "out": "16:00"
        },
        {
          "in": "18:12",
          "out": "21:39"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6078558ab33a6700171c46c7"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "15:59"
        },
        {
          "in": "17:56",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607871f7b33a6700171c46e9"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "14:03",
          "out": "18:04"
        },
        {
          "in": "20:00",
          "out": "00:08"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6078dc18b33a6700171c471e"
      },
      "totalTimes": "09:12",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "21:36",
          "out": "06:48"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6078e014b33a6700171c4720"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "21:53",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6078fc56b33a6700171c4723"
      },
      "totalTimes": "06:05",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "23:54",
          "out": "05:59"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6079522cb33a6700171c4728"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "12:34"
        },
        {
          "in": "14:26",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607953abb33a6700171c472a"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:04"
        },
        {
          "in": "12:12",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60795dd6b33a6700171c472d"
      },
      "totalTimes": "08:22",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "11:03"
        },
        {
          "in": "12:55",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60795e26b33a6700171c472f"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "11:00"
        },
        {
          "in": "13:01",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60795ebbb33a6700171c4731"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "12:00"
        },
        {
          "in": "13:56",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60795f33b33a6700171c4733"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:01"
        },
        {
          "in": "13:02",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60795fb3b33a6700171c4735"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:00"
        },
        {
          "in": "12:58",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60795fbcb33a6700171c4737"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:56"
        },
        {
          "in": "13:58",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796030b33a6700171c4739"
      },
      "totalTimes": "09:19",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:54"
        },
        {
          "in": "13:47",
          "out": "18:12"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796070b33a6700171c473b"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796088b33a6700171c473d"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796090b33a6700171c473f"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:08"
        },
        {
          "in": "13:04",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607960c2b33a6700171c4741"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        },
        {
          "in": "13:02",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607960e1b33a6700171c4743"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:12"
        },
        {
          "in": "14:03",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607960ffb33a6700171c4745"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:13"
        },
        {
          "in": "14:04",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6079619db33a6700171c4747"
      },
      "totalTimes": "08:56",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:12"
        },
        {
          "in": "13:58",
          "out": "17:48"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607961c3b33a6700171c4749"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:18"
        },
        {
          "in": "13:02",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607961dfb33a6700171c474b"
      },
      "totalTimes": "07:27",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:03"
        },
        {
          "in": "14:31",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607961e8b33a6700171c474d"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:07"
        },
        {
          "in": "13:17",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607961f2b33a6700171c474f"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:02"
        },
        {
          "in": "13:57",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796264b33a6700171c4751"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "13:15"
        },
        {
          "in": "15:02",
          "out": "17:12"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6079628fb33a6700171c4753"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:01"
        },
        {
          "in": "14:04",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607962f6b33a6700171c4755"
      },
      "totalTimes": "12:21",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "13:20"
        },
        {
          "in": "15:17",
          "out": "21:30"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796bf3b33a6700171c4757"
      },
      "totalTimes": "06:12",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:50",
          "out": "14:02"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60796e45b33a6700171c4759"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:02"
        },
        {
          "in": "14:01",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60796e5db33a6700171c475b"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "13:05"
        },
        {
          "in": "15:20",
          "out": "18:06"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796ecfb33a6700171c475d"
      },
      "totalTimes": "07:49",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "13:00"
        },
        {
          "in": "15:10",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60796ed3b33a6700171c475f"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "11:59"
        },
        {
          "in": "13:17",
          "out": "17:21"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796ee9b33a6700171c4761"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:02"
        },
        {
          "in": "13:58",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60796fb1b33a6700171c4763"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:08"
        },
        {
          "in": "14:09",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607975acb33a6700171c4765"
      },
      "totalTimes": "07:16",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:01"
        },
        {
          "in": "14:06",
          "out": "16:26"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6079806db33a6700171c4767"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:05"
        },
        {
          "in": "13:02",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60798a2db33a6700171c4769"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "13:58"
        },
        {
          "in": "16:01",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60798b64b33a6700171c476b"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:03"
        },
        {
          "in": "16:04",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6079a625b33a6700171c4777"
      },
      "totalTimes": "05:03",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "11:58",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 8
    },{
      "_id": {
        "$oid": "6079a9efb33a6700171c478a"
      },
      "totalTimes": "09:47",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "12:14",
          "out": "22:01"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6079aa46b33a6700171c478c"
      },
      "totalTimes": "05:47",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "12:16",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6079c3a6b33a6700171c47a9"
      },
      "totalTimes": "08:56",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "14:04",
          "out": "19:05"
        },
        {
          "in": "20:00",
          "out": "23:55"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607a3362b33a6700171c47d9"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "22:01",
          "out": "06:22"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607a33c7b33a6700171c47dc"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "22:03",
          "out": "06:14"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607a4df6b33a6700171c47de"
      },
      "totalTimes": "06:06",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "23:54",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607aa4c3b33a6700171c47e2"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:07"
        },
        {
          "in": "12:20",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607aa5ebb33a6700171c47e4"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "06:10",
          "out": "12:29"
        },
        {
          "in": "14:09",
          "out": "16:11"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ab057b33a6700171c47e8"
      },
      "totalTimes": "04:36",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:30"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab0a4b33a6700171c47ea"
      },
      "totalTimes": "05:05",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab0edb33a6700171c47ec"
      },
      "totalTimes": "06:29",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "13:26"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab104b33a6700171c47ee"
      },
      "totalTimes": "06:47",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "13:44"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab124b33a6700171c47f0"
      },
      "totalTimes": "05:03",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "12:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab18fb33a6700171c47f2"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab1acb33a6700171c47f4"
      },
      "totalTimes": "05:10",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:10"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab250b33a6700171c47f6"
      },
      "totalTimes": "04:26",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:28"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab25eb33a6700171c47f9"
      },
      "totalTimes": "08:56",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:28"
        },
        {
          "in": "14:30",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607ab289b33a6700171c47fc"
      },
      "totalTimes": "03:58",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:01"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607ab2b6b33a6700171c47fe"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:05"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab2cdb33a6700171c4800"
      },
      "totalTimes": "03:54",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "10:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab2ecb33a6700171c4802"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab325b33a6700171c4804"
      },
      "totalTimes": "04:05",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:11"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab330b33a6700171c4806"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:08"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab343b33a6700171c4808"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "15:27"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab59db33a6700171c480a"
      },
      "totalTimes": "03:58",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "11:15"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ab890b33a6700171c480c"
      },
      "totalTimes": "05:34",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:29",
          "out": "13:03"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607abd52b33a6700171c480e"
      },
      "totalTimes": "06:07",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "13:56"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607abe91b33a6700171c4810"
      },
      "totalTimes": "10:09",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:55",
          "out": "18:04"
        },
        {
          "in": "18:04",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607abf1db33a6700171c4812"
      },
      "totalTimes": "04:03",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:57",
          "out": "12:00"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ac04bb33a6700171c4814"
      },
      "totalTimes": "04:38",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:40"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607ac0d2b33a6700171c4816"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:06"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ac4e5b33a6700171c4818"
      },
      "totalTimes": "15:02",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "08:22",
          "out": "23:24"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607adcf5b33a6700171c481a"
      },
      "totalTimes": "08:52",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:05"
        },
        {
          "in": "15:59",
          "out": "20:50"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607add9cb33a6700171c481c"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "10:07",
          "out": "14:05"
        },
        {
          "in": "16:01",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607aead6b33a6700171c4821"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:03"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607af87bb33a6700171c482d"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "16:56"
        },
        {
          "in": "18:46",
          "out": "22:12"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607af96db33a6700171c482f"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "12:06",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607b15f1b33a6700171c483d"
      },
      "totalTimes": "07:02",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "14:08",
          "out": "18:00"
        },
        {
          "in": "20:45",
          "out": "23:55"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "607b7fc7b33a6700171c4853"
      },
      "totalTimes": "11:36",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "21:39",
          "out": "09:15"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607b8501b33a6700171c4855"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "22:01",
          "out": "06:14"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607b9f4eb33a6700171c4859"
      },
      "totalTimes": "06:08",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "23:54",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607bf653b33a6700171c485d"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:08"
        },
        {
          "in": "12:01",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607bf690b33a6700171c485f"
      },
      "totalTimes": "07:01",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "13:07"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607bfa1ab33a6700171c4862"
      },
      "totalTimes": "10:09",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "06:21",
          "out": "16:30"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607c06fcb33a6700171c4864"
      },
      "totalTimes": "08:56",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "07:16",
          "out": "13:27"
        },
        {
          "in": "15:23",
          "out": "18:08"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607c1128b33a6700171c4866"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "07:59",
          "out": "12:27"
        },
        {
          "in": "14:25",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607c138db33a6700171c4868"
      },
      "totalTimes": "10:01",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "08:10",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607c473ab33a6700171c486b"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "11:50",
          "out": "16:01"
        },
        {
          "in": "18:00",
          "out": "21:59"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607c4bd9b33a6700171c486d"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "12:10",
          "out": "17:04"
        },
        {
          "in": "19:01",
          "out": "22:06"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607c578ab33a6700171c4870"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:02"
        },
        {
          "in": "16:00",
          "out": "20:11"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607c57cab33a6700171c4872"
      },
      "totalTimes": "06:01",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "13:01",
          "out": "19:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607cbacfb33a6700171c4881"
      },
      "totalTimes": "09:58",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "20:03",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607cd52cb33a6700171c4884"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "21:56",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607cd6e0b33a6700171c4887"
      },
      "totalTimes": "08:37",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "22:03",
          "out": "06:40"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607d460db33a6700171c488a"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "05:57",
          "out": "10:06"
        },
        {
          "in": "12:01",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d461eb33a6700171c488c"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:07"
        },
        {
          "in": "12:01",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d482eb33a6700171c4890"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:09"
        },
        {
          "in": "12:04",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d5248b33a6700171c4893"
      },
      "totalTimes": "08:34",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "11:57"
        },
        {
          "in": "13:57",
          "out": "17:24"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d5253b33a6700171c4895"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "11:04"
        },
        {
          "in": "13:02",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607d532cb33a6700171c4897"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "12:00"
        },
        {
          "in": "13:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d5335b33a6700171c4899"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:04"
        },
        {
          "in": "12:56",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d5486b33a6700171c489b"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:01"
        },
        {
          "in": "13:55",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d54c3b33a6700171c489d"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:02"
        },
        {
          "in": "13:01",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "607d54c5b33a6700171c489f"
      },
      "totalTimes": "09:05",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:02"
        },
        {
          "in": "12:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d54dcb33a6700171c48a1"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:02"
        },
        {
          "in": "14:04",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d54e4b33a6700171c48a3"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:01"
        },
        {
          "in": "12:57",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d5526b33a6700171c48a5"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:02"
        },
        {
          "in": "14:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d554db33a6700171c48a7"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:04"
        },
        {
          "in": "13:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d55c6b33a6700171c48a9"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:59"
        },
        {
          "in": "14:00",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d5604b33a6700171c48ac"
      },
      "totalTimes": "10:55",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607d5617b33a6700171c48ae"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:19"
        },
        {
          "in": "13:17",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d561db33a6700171c48b0"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:55"
        },
        {
          "in": "14:01",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d5635b33a6700171c48b2"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607d5687b33a6700171c48b4"
      },
      "totalTimes": "07:22",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "16:29"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d5688b33a6700171c48b6"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:05"
        },
        {
          "in": "14:01",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d56d9b33a6700171c48b8"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:11"
        },
        {
          "in": "13:05",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d56e8b33a6700171c48ba"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:01"
        },
        {
          "in": "14:06",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607d60deb33a6700171c48bc"
      },
      "totalTimes": "06:03",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:52",
          "out": "13:55"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607d6214b33a6700171c48be"
      },
      "totalTimes": "04:05",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:05"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "607d6228b33a6700171c48bf"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:58"
        },
        {
          "in": "13:25",
          "out": "16:48"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d62e4b33a6700171c48c0"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:03"
        },
        {
          "in": "13:58",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d6349b33a6700171c48c2"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:02"
        },
        {
          "in": "13:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d6379b33a6700171c48c4"
      },
      "totalTimes": "09:34",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:02"
        },
        {
          "in": "14:03",
          "out": "19:38"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d64f7b33a6700171c48c6"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "08:09",
          "out": "12:09"
        },
        {
          "in": "14:11",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d65b1b33a6700171c48c8"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "08:12",
          "out": "12:06"
        },
        {
          "in": "14:01",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "607d673fb33a6700171c48ca"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "08:19",
          "out": "12:07"
        },
        {
          "in": "14:05",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d7f04b33a6700171c48cc"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:00"
        },
        {
          "in": "16:01",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d7fa8b33a6700171c48ce"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:01"
        },
        {
          "in": "16:05",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607d9e38b33a6700171c48ef"
      },
      "totalTimes": "07:40",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "12:14",
          "out": "16:03"
        },
        {
          "in": "18:10",
          "out": "22:01"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607e0b64b33a6700171c492e"
      },
      "totalTimes": "10:06",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "19:59",
          "out": "06:05"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607e22aeb33a6700171c4932"
      },
      "totalTimes": "08:36",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "21:39",
          "out": "06:15"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607e280cb33a6700171c4935"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "22:02",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607e9542b33a6700171c4937"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "05:48",
          "out": "11:01"
        },
        {
          "in": "13:36",
          "out": "16:24"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607e98f0b33a6700171c493a"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "10:04"
        },
        {
          "in": "12:04",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607e998ab33a6700171c493d"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:08"
        },
        {
          "in": "12:14",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607e99c5b33a6700171c493f"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:07",
          "out": "12:23"
        },
        {
          "in": "14:27",
          "out": "16:14"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea315b33a6700171c4942"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:47",
          "out": "11:02"
        },
        {
          "in": "12:58",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607ea4fdb33a6700171c4944"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:00"
        },
        {
          "in": "13:55",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea58ab33a6700171c4946"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:10"
        },
        {
          "in": "13:21",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea5aeb33a6700171c4948"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:00"
        },
        {
          "in": "13:01",
          "out": "16:57"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "607ea5d1b33a6700171c494a"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:00"
        },
        {
          "in": "12:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea64eb33a6700171c494c"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:02"
        },
        {
          "in": "13:45",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea64fb33a6700171c494e"
      },
      "totalTimes": "09:09",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:02"
        },
        {
          "in": "12:53",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea68cb33a6700171c4951"
      },
      "totalTimes": "11:44",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "18:45"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ea6c6b33a6700171c4953"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        },
        {
          "in": "13:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea6e4b33a6700171c4955"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea6e7b33a6700171c4957"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:04"
        },
        {
          "in": "14:00",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea6f9b33a6700171c4959"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:05"
        },
        {
          "in": "14:07",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea737b33a6700171c495b"
      },
      "totalTimes": "11:29",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "18:33"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ea7e2b33a6700171c495d"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:07"
        },
        {
          "in": "13:13",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea7fab33a6700171c495f"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:11"
        },
        {
          "in": "14:01",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea808b33a6700171c4961"
      },
      "totalTimes": "08:51",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:01"
        },
        {
          "in": "13:59",
          "out": "17:57"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea851b33a6700171c4963"
      },
      "totalTimes": "07:45",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:03"
        },
        {
          "in": "12:34",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea8f7b33a6700171c4966"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:05"
        },
        {
          "in": "13:57",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607ea8fab33a6700171c4968"
      },
      "totalTimes": "11:32",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "18:44"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ea958b33a6700171c496a"
      },
      "totalTimes": "11:00",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "18:13"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ea98eb33a6700171c496c"
      },
      "totalTimes": "07:18",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:04"
        },
        {
          "in": "14:00",
          "out": "16:28"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ea9adb33a6700171c496e"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "11:14"
        },
        {
          "in": "13:14",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607eaee2b33a6700171c4970"
      },
      "totalTimes": "07:30",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "12:04"
        },
        {
          "in": "14:15",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607eb3d1b33a6700171c4971"
      },
      "totalTimes": "05:59",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "07:58",
          "out": "13:57"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607eb481b33a6700171c4974"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:15"
        },
        {
          "in": "13:09",
          "out": "17:18"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607eb606b33a6700171c4976"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "12:04"
        },
        {
          "in": "13:59",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607eb7dbb33a6700171c4978"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "08:15",
          "out": "12:15"
        },
        {
          "in": "14:07",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607eb88db33a6700171c497a"
      },
      "totalTimes": "07:37",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "08:18",
          "out": "13:00"
        },
        {
          "in": "15:20",
          "out": "18:15"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "607ed0e0b33a6700171c497c"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:00"
        },
        {
          "in": "16:03",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ed13ab33a6700171c497e"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:03"
        },
        {
          "in": "16:04",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ee87bb33a6700171c498b"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:04"
        },
        {
          "in": "14:03",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "607ee8c1b33a6700171c498d"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:04"
        },
        {
          "in": "13:02",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "607eee74b33a6700171c4998"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "12:08",
          "out": "16:15"
        },
        {
          "in": "18:07",
          "out": "22:08"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607eefe5b33a6700171c499c"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "12:14",
          "out": "16:21"
        },
        {
          "in": "18:15",
          "out": "22:17"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ef39ab33a6700171c49a1"
      },
      "totalTimes": "10:33",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "12:30"
        },
        {
          "in": "14:33",
          "out": "19:26"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607f08eeb33a6700171c49b8"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "14:01",
          "out": "18:03"
        },
        {
          "in": "20:00",
          "out": "23:53"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607f0de0b33a6700171c49be"
      },
      "totalTimes": "07:43",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:04"
        },
        {
          "in": "14:22",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607f3c6bb33a6700171c49dd"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1617667200000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:03"
        },
        {
          "in": "14:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "607f7685b33a6700171c49ee"
      },
      "totalTimes": "12:26",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "21:49",
          "out": "10:15"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607f77cdb33a6700171c49f0"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "21:54",
          "out": "06:04"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607f92bab33a6700171c49f4"
      },
      "totalTimes": "06:11",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "23:49",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607fe938b33a6700171c49f7"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:09"
        },
        {
          "in": "12:01",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607feae6b33a6700171c49fb"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:14"
        },
        {
          "in": "12:01",
          "out": "16:08"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ff490b33a6700171c49fd"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "06:46",
          "out": "11:01"
        },
        {
          "in": "13:04",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "607ff87db33a6700171c49ff"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:03"
        },
        {
          "in": "14:06",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "607ff8ffb33a6700171c4a01"
      },
      "totalTimes": "10:52",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "17:57"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ff9e8b33a6700171c4a04"
      },
      "totalTimes": "07:03",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:08"
        },
        {
          "in": "14:04",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "607ffae6b33a6700171c4a06"
      },
      "totalTimes": "11:12",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "18:25"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "607ffc74b33a6700171c4a08"
      },
      "totalTimes": "10:38",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "17:58"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6080000eb33a6700171c4a0a"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "07:35",
          "out": "11:59"
        },
        {
          "in": "14:05",
          "out": "17:56"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60802192b33a6700171c4a0c"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "09:58",
          "out": "14:04"
        },
        {
          "in": "15:59",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60802391b33a6700171c4a0e"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "10:07",
          "out": "14:03"
        },
        {
          "in": "16:04",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60803dfab33a6700171c4a15"
      },
      "totalTimes": "12:18",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "12:00",
          "out": "17:05"
        },
        {
          "in": "19:12",
          "out": "02:25"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60803e68b33a6700171c4a19"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "16:00"
        },
        {
          "in": "17:54",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60805947b33a6700171c4a1c"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "13:56",
          "out": "17:57"
        },
        {
          "in": "19:54",
          "out": "23:55"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6080c8a6f4265b001d2be7c5"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "21:51",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6080c8d6f4265b001d2be7c7"
      },
      "totalTimes": "08:40",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "21:52",
          "out": "06:32"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6080e343f4265b001d2be7ca"
      },
      "totalTimes": "06:24",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "23:45",
          "out": "06:09"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60813ba1f4265b001d2be7ce"
      },
      "totalTimes": "10:13",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "10:04"
        },
        {
          "in": "12:03",
          "out": "18:14"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60813d16f4265b001d2be7d1"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "10:08"
        },
        {
          "in": "12:13",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608147f4f4265b001d2be7d5"
      },
      "totalTimes": "10:50",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "17:45"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60814854f4265b001d2be7d7"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814896f4265b001d2be7d9"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608148b6f4265b001d2be7db"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608148d7f4265b001d2be7dd"
      },
      "totalTimes": "09:17",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:22"
        },
        {
          "in": "13:16",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814900f4265b001d2be7df"
      },
      "totalTimes": "08:24",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:12"
        },
        {
          "in": "13:29",
          "out": "17:40"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814926f4265b001d2be7e1"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:02"
        },
        {
          "in": "13:01",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "60814947f4265b001d2be7e3"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:04"
        },
        {
          "in": "12:58",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814998f4265b001d2be7e5"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:15"
        },
        {
          "in": "13:15",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608149b2f4265b001d2be7e7"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:04"
        },
        {
          "in": "14:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "608149b3f4265b001d2be7e9"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        },
        {
          "in": "13:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60814a29f4265b001d2be7eb"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:05"
        },
        {
          "in": "13:59",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814ab4f4265b001d2be7ed"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814b1af4265b001d2be7ef"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "11:09"
        },
        {
          "in": "13:05",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814b31f4265b001d2be7f1"
      },
      "totalTimes": "08:37",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:10"
        },
        {
          "in": "13:56",
          "out": "17:31"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814b43f4265b001d2be7f3"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:01"
        },
        {
          "in": "13:05",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60814b94f4265b001d2be7f5"
      },
      "totalTimes": "08:35",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:22"
        },
        {
          "in": "13:09",
          "out": "17:32"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814c6cf4265b001d2be7f7"
      },
      "totalTimes": "10:27",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "11:13"
        },
        {
          "in": "13:06",
          "out": "19:34"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60814c88f4265b001d2be7f9"
      },
      "totalTimes": "07:14",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:00"
        },
        {
          "in": "14:04",
          "out": "16:32"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60814caaf4265b001d2be7fb"
      },
      "totalTimes": "12:52",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "20:07"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60814d96f4265b001d2be7fd"
      },
      "totalTimes": "13:13",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "20:32"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60814d9df4265b001d2be7ff"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:06"
        },
        {
          "in": "14:09",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "608154e2f4265b001d2be800"
      },
      "totalTimes": "06:07",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "07:50",
          "out": "13:57"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6081584df4265b001d2be802"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:04"
        },
        {
          "in": "12:53",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608159e4f4265b001d2be804"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "08:11",
          "out": "12:11"
        },
        {
          "in": "14:09",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60815b0ef4265b001d2be806"
      },
      "totalTimes": "09:33",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "08:16",
          "out": "17:49"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60816fc8f4265b001d2be808"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:00"
        },
        {
          "in": "14:03",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608173c4f4265b001d2be80a"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:02"
        },
        {
          "in": "15:57",
          "out": "20:07"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60817407f4265b001d2be80c"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:06"
        },
        {
          "in": "16:04",
          "out": "20:07"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60818178f4265b001d2be811"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617235200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081818bf4265b001d2be812"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617753600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818198f4265b001d2be813"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608181a2f4265b001d2be814"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818214f4265b001d2be818"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617667200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081821ff4265b001d2be819"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818228f4265b001d2be81a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818286f4265b001d2be81d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608183e9f4265b001d2be820"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081841ef4265b001d2be821"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818426f4265b001d2be822"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081891ef4265b001d2be82e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "608189c8f4265b001d2be830"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617667200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608189ccf4265b001d2be831"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618185600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608189d4f4265b001d2be832"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818b33f4265b001d2be837"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818b61f4265b001d2be838"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617235200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818b65f4265b001d2be839"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617753600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818b6bf4265b001d2be83a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818b71f4265b001d2be83b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818baff4265b001d2be83d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818bb6f4265b001d2be83e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818bbdf4265b001d2be83f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818be9f4265b001d2be841"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617408000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818bf3f4265b001d2be843"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818c25f4265b001d2be845"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818c69f4265b001d2be846"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617235200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818c6ef4265b001d2be847"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617753600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818c74f4265b001d2be848"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818c79f4265b001d2be849"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818ca1f4265b001d2be84b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818ca7f4265b001d2be84c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617840000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818cacf4265b001d2be84d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818cb4f4265b001d2be84e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618876800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818cfdf4265b001d2be850"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617580800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d03f4265b001d2be851"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617667200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d0af4265b001d2be852"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d14f4265b001d2be853"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d42f4265b001d2be856"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d47f4265b001d2be857"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617926400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d4ff4265b001d2be858"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618444800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d54f4265b001d2be859"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d75f4265b001d2be85b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617408000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d7df4265b001d2be85c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818d84f4265b001d2be85d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818db2f4265b001d2be85f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617580800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818db6f4265b001d2be860"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818dbef4265b001d2be861"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818e07f4265b001d2be864"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818e30f4265b001d2be865"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818e34f4265b001d2be866"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818ec0f4265b001d2be869"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617235200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818ec7f4265b001d2be86a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617753600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818ed0f4265b001d2be86b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818ed7f4265b001d2be86c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618790400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f0cf4265b001d2be86e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f30f4265b001d2be870"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f34f4265b001d2be871"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f39f4265b001d2be872"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f68f4265b001d2be876"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f6bf4265b001d2be877"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f6df4265b001d2be878"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f85f4265b001d2be87e"
      },
      "totalTimes": "10:26",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "12:00",
          "out": "17:38"
        },
        {
          "in": "18:40",
          "out": "23:28"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60818f99f4265b001d2be882"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f9cf4265b001d2be883"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818f9ff4265b001d2be884"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818febf4265b001d2be88a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818feef4265b001d2be88b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60818ff2f4265b001d2be88c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608194a5f4265b001d2be89b"
      },
      "totalTimes": "05:51",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "12:22",
          "out": "18:13"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "6081aab6f4265b001d2be8a7"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "13:56",
          "out": "18:12"
        },
        {
          "in": "20:00",
          "out": "23:56"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6081b107f4265b001d2be8b9"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b10af4265b001d2be8ba"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b117f4265b001d2be8bb"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b179f4265b001d2be8be"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b17df4265b001d2be8bf"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b184f4265b001d2be8c0"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b1a1f4265b001d2be8c2"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b1a5f4265b001d2be8c3"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b1a9f4265b001d2be8c4"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b1acf4265b001d2be8c5"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b1d9f4265b001d2be8c8"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b1ddf4265b001d2be8c9"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b1e0f4265b001d2be8ca"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b201f4265b001d2be8cd"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b204f4265b001d2be8ce"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b206f4265b001d2be8cf"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b22df4265b001d2be8d1"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617580800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b282f4265b001d2be8d3"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b285f4265b001d2be8d4"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b299f4265b001d2be8d6"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b32df4265b001d2be8d8"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b330f4265b001d2be8d9"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b332f4265b001d2be8da"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b34ef4265b001d2be8dd"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b351f4265b001d2be8de"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b353f4265b001d2be8df"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b4e4f4265b001d2be8e3"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b4e6f4265b001d2be8e4"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b4e9f4265b001d2be8e5"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b56ff4265b001d2be8ea"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b572f4265b001d2be8eb"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b793f4265b001d2be8ed"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617408000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b802f4265b001d2be8ee"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b915f4265b001d2be8ef"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b918f4265b001d2be8f0"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b91bf4265b001d2be8f1"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b91ef4265b001d2be8f2"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b920f4265b001d2be8f3"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b938f4265b001d2be8f5"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b93cf4265b001d2be8f6"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b93ef4265b001d2be8f7"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b97ff4265b001d2be8fa"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b981f4265b001d2be8fb"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081b984f4265b001d2be8fc"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081bb3ef4265b001d2be8fe"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081bb40f4265b001d2be8ff"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081bb42f4265b001d2be900"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081bb76f4265b001d2be903"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081bb78f4265b001d2be904"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081bb7af4265b001d2be905"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081d5a4f4265b001d2be90e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081d5a7f4265b001d2be90f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081d5aaf4265b001d2be910"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081d5acf4265b001d2be911"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6081d5aff4265b001d2be912"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6082020bf4265b001d2be92c"
      },
      "totalTimes": "00:01",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "20:08",
          "out": "20:09"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60820e92f4265b001d2be930"
      },
      "totalTimes": "08:59",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "21:02",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60820f3df4265b001d2be932"
      },
      "totalTimes": "09:02",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "21:05",
          "out": "06:07"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60828beef4265b001d2be936"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "05:57",
          "out": "10:16"
        },
        {
          "in": "12:37",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60828ef5f4265b001d2be93a"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:10",
          "out": "10:12"
        },
        {
          "in": "12:09",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608295e8f4265b001d2be93c"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:39",
          "out": "11:28"
        },
        {
          "in": "13:47",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60829629f4265b001d2be93e"
      },
      "totalTimes": "06:07",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "23:54",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6082969ff4265b001d2be93f"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:42",
          "out": "11:00"
        },
        {
          "in": "13:02",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608296dbf4265b001d2be941"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "608296f6f4265b001d2be942"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "6082970ef4265b001d2be943"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60829921f4265b001d2be944"
      },
      "totalTimes": "08:44",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "12:01"
        },
        {
          "in": "13:50",
          "out": "17:26"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608299bef4265b001d2be946"
      },
      "totalTimes": "08:48",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:19"
        },
        {
          "in": "13:56",
          "out": "17:21"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608299caf4265b001d2be948"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:01"
        },
        {
          "in": "13:57",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608299d7f4265b001d2be94a"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:03"
        },
        {
          "in": "13:02",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608299e6f4265b001d2be94c"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:03"
        },
        {
          "in": "13:08",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829a7ef4265b001d2be94e"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:57"
        },
        {
          "in": "14:01",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829a8ff4265b001d2be950"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829ad2f4265b001d2be952"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829b09f4265b001d2be955"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:02"
        },
        {
          "in": "13:55",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829b5af4265b001d2be957"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:02"
        },
        {
          "in": "12:56",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829b8ff4265b001d2be959"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:04"
        },
        {
          "in": "14:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829b9cf4265b001d2be95b"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:09"
        },
        {
          "in": "14:03",
          "out": "17:12"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829c96f4265b001d2be95d"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "11:09"
        },
        {
          "in": "13:06",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829ca2f4265b001d2be95f"
      },
      "totalTimes": "00:53",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "08:01"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60829cb7f4265b001d2be961"
      },
      "totalTimes": "09:42",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:01"
        },
        {
          "in": "13:56",
          "out": "18:45"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829d69f4265b001d2be963"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:02"
        },
        {
          "in": "14:05",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60829dd7f4265b001d2be964"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "11:16"
        },
        {
          "in": "13:13",
          "out": "17:12"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60829e22f4265b001d2be966"
      },
      "totalTimes": "07:38",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:04"
        },
        {
          "in": "14:01",
          "out": "16:49"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60829f6df4265b001d2be968"
      },
      "totalTimes": "09:15",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "11:12"
        },
        {
          "in": "13:15",
          "out": "18:38"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6082a1bef4265b001d2be96a"
      },
      "totalTimes": "07:29",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:30",
          "out": "11:02"
        },
        {
          "in": "13:04",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6082a28ff4265b001d2be96c"
      },
      "totalTimes": "00:18",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:33",
          "out": "07:51"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6082a7eef4265b001d2be96e"
      },
      "totalTimes": "06:06",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:56",
          "out": "14:02"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6082a88df4265b001d2be970"
      },
      "totalTimes": "10:00",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "07:59",
          "out": "17:59"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6082a90bf4265b001d2be972"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:02"
        },
        {
          "in": "13:58",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6082a98df4265b001d2be974"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:21"
        },
        {
          "in": "13:27",
          "out": "17:19"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6082c565f4265b001d2be976"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:01"
        },
        {
          "in": "16:02",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6082c619f4265b001d2be978"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "10:05",
          "out": "14:02"
        },
        {
          "in": "16:01",
          "out": "20:13"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6082d712f4265b001d2be984"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "out": "11:18",
          "in": "07:00"
        },
        {
          "in": "13:17",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6082e150f4265b001d2be98c"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "12:01",
          "out": "16:02"
        },
        {
          "in": "18:00",
          "out": "21:56"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6082fc73f4265b001d2be9a7"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "13:57",
          "out": "18:29"
        },
        {
          "in": "20:04",
          "out": "23:50"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608369aef4265b001d2be9d1"
      },
      "totalTimes": "08:28",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "21:43",
          "out": "06:11"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60836de9f4265b001d2be9d4"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "22:01",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60838669f4265b001d2be9d6"
      },
      "totalTimes": "06:16",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "23:46",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083de69f4265b001d2be9da"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:13"
        },
        {
          "in": "12:08",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6083deb8f4265b001d2be9dd"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "11:54"
        },
        {
          "in": "14:07",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6083eb2cf4265b001d2be9e0"
      },
      "totalTimes": "07:37",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "14:32"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083eb72f4265b001d2be9e2"
      },
      "totalTimes": "04:08",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:05"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ebe3f4265b001d2be9e4"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ec0af4265b001d2be9e6"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ec43f4265b001d2be9e8"
      },
      "totalTimes": "05:05",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:05"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ec5cf4265b001d2be9ea"
      },
      "totalTimes": "05:00",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:01"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ec65f4265b001d2be9ec"
      },
      "totalTimes": "04:06",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:07"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ec67f4265b001d2be9ee"
      },
      "totalTimes": "03:39",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "10:40"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ec80f4265b001d2be9f0"
      },
      "totalTimes": "05:04",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:05"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ec85f4265b001d2be9f2"
      },
      "totalTimes": "04:47",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:48"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ecb3f4265b001d2be9f4"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:03"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ed32f4265b001d2be9f6"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:05"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ed73f4265b001d2be9f8"
      },
      "totalTimes": "05:20",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:25"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083ef2cf4265b001d2be9fa"
      },
      "totalTimes": "07:39",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "13:14"
        },
        {
          "in": "15:25",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6083f0e2f4265b001d2be9fc"
      },
      "totalTimes": "03:55",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "11:15"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083f2c2f4265b001d2be9fe"
      },
      "totalTimes": "04:34",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:26",
          "out": "12:00"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6083f7bdf4265b001d2be9ff"
      },
      "totalTimes": "06:24",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "12:00"
        },
        {
          "in": "15:47",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6083f84df4265b001d2bea02"
      },
      "totalTimes": "05:02",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:51",
          "out": "12:53"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083f8f4f4265b001d2bea04"
      },
      "totalTimes": "06:08",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:54",
          "out": "14:02"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083fa5af4265b001d2bea06"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:02"
        },
        {
          "in": "14:02",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6083fa74f4265b001d2bea08"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083faaff4265b001d2bea0a"
      },
      "totalTimes": "03:59",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083fbbff4265b001d2bea0c"
      },
      "totalTimes": "04:07",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:13"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6083fe64f4265b001d2bea0e"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "08:17",
          "out": "12:18"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "608403c2f4265b001d2bea10"
      },
      "totalTimes": "04:54",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60841584f4265b001d2bea11"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "09:56",
          "out": "14:13"
        },
        {
          "in": "16:16",
          "out": "20:10"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60841730f4265b001d2bea13"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:05"
        },
        {
          "in": "16:02",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60842b6af4265b001d2bea1d"
      },
      "totalTimes": "10:22",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "11:30",
          "out": "21:52"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608433baf4265b001d2bea27"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "12:05",
          "out": "16:02"
        },
        {
          "in": "17:50",
          "out": "22:07"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6084a377832c99001eb2e8d7"
      },
      "totalTimes": "10:01",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "20:02",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6084ba51832c99001eb2e8db"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "21:39",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6084c0d6832c99001eb2e8de"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "22:07",
          "out": "06:21"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60852edd832c99001eb2e8e1"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "05:57",
          "out": "10:02"
        },
        {
          "in": "11:58",
          "out": "16:08"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60853041832c99001eb2e8e4"
      },
      "totalTimes": "06:59",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "13:01"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60853e82832c99001eb2e8e8"
      },
      "totalTimes": "05:59",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "13:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60854a12832c99001eb2e8ea"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "07:53",
          "out": "12:09"
        },
        {
          "in": "14:15",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60854dc0832c99001eb2e8ec"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "12:00"
        },
        {
          "in": "14:04",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608585cc832c99001eb2e8f1"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "12:07",
          "out": "16:05"
        },
        {
          "in": "18:04",
          "out": "22:02"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6085918f832c99001eb2e8f4"
      },
      "totalTimes": "07:02",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "12:58",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608591cd832c99001eb2e8f6"
      },
      "totalTimes": "07:02",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "12:59",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6085f4a2832c99001eb2e903"
      },
      "totalTimes": "09:58",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "20:00",
          "out": "05:58"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608608ed832c99001eb2e907"
      },
      "totalTimes": "08:33",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "21:27",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60861129832c99001eb2e909"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "22:02",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608680ba832c99001eb2e90d"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:03"
        },
        {
          "in": "12:05",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868141832c99001eb2e910"
      },
      "totalTimes": "14:28",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "20:28"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60868182832c99001eb2e913"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:03"
        },
        {
          "in": "11:59",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086897d832c99001eb2e915"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60868985832c99001eb2e916"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "608689d2832c99001eb2e917"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608689da832c99001eb2e918"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60868a6f832c99001eb2e919"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60868a75832c99001eb2e91a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60868b44832c99001eb2e91b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60868c6c832c99001eb2e91c"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "06:48",
          "out": "12:00"
        },
        {
          "in": "13:57",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868dff832c99001eb2e91e"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:02"
        },
        {
          "in": "12:53",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868e5a832c99001eb2e920"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60868ed0832c99001eb2e921"
      },
      "totalTimes": "11:42",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:59"
        },
        {
          "in": "13:53",
          "out": "20:34"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868ee7832c99001eb2e923"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:01"
        },
        {
          "in": "12:59",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868ef5832c99001eb2e925"
      },
      "totalTimes": "04:05",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:04"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60868f20832c99001eb2e927"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:31"
        },
        {
          "in": "13:25",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868f33832c99001eb2e929"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:01"
        },
        {
          "in": "13:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868f38832c99001eb2e92b"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:00"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868fa2832c99001eb2e92d"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:01"
        },
        {
          "in": "13:56",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868fc2832c99001eb2e92f"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        },
        {
          "in": "13:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60868fe4832c99001eb2e931"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:13"
        },
        {
          "in": "13:12",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60869010832c99001eb2e933"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:05"
        },
        {
          "in": "14:01",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086905f832c99001eb2e936"
      },
      "totalTimes": "07:45",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:01"
        },
        {
          "in": "14:12",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60869085832c99001eb2e937"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60869093832c99001eb2e938"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        },
        {
          "in": "13:01",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6086909a832c99001eb2e939"
      },
      "totalTimes": "11:13",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "18:19"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6086909b832c99001eb2e93b"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:06"
        },
        {
          "in": "13:58",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608690f1832c99001eb2e93d"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:32"
        },
        {
          "in": "13:11",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086927b832c99001eb2e93f"
      },
      "totalTimes": "08:29",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "11:43"
        },
        {
          "in": "13:17",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608693eb832c99001eb2e941"
      },
      "totalTimes": "07:40",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "14:30"
        },
        {
          "in": "17:07",
          "out": "17:37"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60869aa0832c99001eb2e943"
      },
      "totalTimes": "06:08",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "13:57"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60869c84832c99001eb2e945"
      },
      "totalTimes": "10:26",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:57",
          "out": "08:23"
        },
        {
          "in": "12:13",
          "out": "22:13"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60869d17832c99001eb2e947"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:59",
          "out": "12:12"
        },
        {
          "in": "14:07",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60869db5832c99001eb2e94a"
      },
      "totalTimes": "09:03",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:25"
        },
        {
          "in": "13:44",
          "out": "18:24"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60869dbf832c99001eb2e94c"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:04"
        },
        {
          "in": "13:02",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60869e43832c99001eb2e94e"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086a002832c99001eb2e950"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:00"
        },
        {
          "in": "14:02",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086a09d832c99001eb2e951"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "08:14",
          "out": "13:07"
        },
        {
          "in": "14:53",
          "out": "17:54"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086a707832c99001eb2e954"
      },
      "totalTimes": "07:23",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "08:41",
          "out": "12:23"
        },
        {
          "in": "14:21",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086adc2832c99001eb2e956"
      },
      "totalTimes": "06:27",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "09:10",
          "out": "12:00"
        },
        {
          "in": "13:52",
          "out": "17:29"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086b81c832c99001eb2e958"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "09:54",
          "out": "14:05"
        },
        {
          "in": "16:03",
          "out": "20:09"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086ba5c832c99001eb2e95c"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:01"
        },
        {
          "in": "16:05",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6086be0a832c99001eb2e95e"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:00"
        },
        {
          "in": "13:03",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6086be3c832c99001eb2e961"
      },
      "totalTimes": "07:25",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "16:30"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6086ce44832c99001eb2e968"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086ce58832c99001eb2e969"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086ce6c832c99001eb2e96a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086cf7f832c99001eb2e96d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086cf87832c99001eb2e96e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086cf8b832c99001eb2e96f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618531200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086cfb0832c99001eb2e971"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618358400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d006832c99001eb2e972"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d06c832c99001eb2e973"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617580800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d070832c99001eb2e974"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d075832c99001eb2e975"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d084832c99001eb2e976"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d08f832c99001eb2e977"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d0cf832c99001eb2e978"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d0d3832c99001eb2e979"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d0ec832c99001eb2e97a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d0f0832c99001eb2e97b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d106832c99001eb2e97c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d109832c99001eb2e97d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d256832c99001eb2e97f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d25c832c99001eb2e980"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619136000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d25f832c99001eb2e981"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d263832c99001eb2e982"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d266832c99001eb2e983"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d26a832c99001eb2e984"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d273832c99001eb2e985"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d278832c99001eb2e986"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d27b832c99001eb2e987"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "6086d2ab832c99001eb2e988"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d2bb832c99001eb2e989"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086d572832c99001eb2e98c"
      },
      "totalTimes": "10:03",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "12:00",
          "out": "22:03"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6086f049832c99001eb2e9a9"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617667200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "6086f0e9832c99001eb2e9ab"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "13:57",
          "out": "17:56"
        },
        {
          "in": "19:57",
          "out": "23:57"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60875c88832c99001eb2e9dd"
      },
      "totalTimes": "08:38",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "21:36",
          "out": "06:14"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6087606e832c99001eb2e9df"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "21:53",
          "out": "06:16"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60877b13832c99001eb2e9e3"
      },
      "totalTimes": "06:14",
      "date": {
        "$date": {
          "$numberLong": "1619395200000"
        }
      },
      "times": [
        {
          "in": "23:46",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6087d251832c99001eb2e9e6"
      },
      "totalTimes": "09:25",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "11:14"
        },
        {
          "in": "13:04",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087d25a832c99001eb2e9e8"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:03"
        },
        {
          "in": "11:57",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6087d26b832c99001eb2e9ea"
      },
      "totalTimes": "09:29",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:09"
        },
        {
          "in": "12:04",
          "out": "17:23"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087d323832c99001eb2e9ed"
      },
      "totalTimes": "08:29",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "10:06"
        },
        {
          "in": "12:08",
          "out": "16:33"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087dbe5832c99001eb2e9f1"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "06:39",
          "out": "11:00"
        },
        {
          "in": "13:04",
          "out": "16:50"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6087df32832c99001eb2e9f3"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:05"
        },
        {
          "in": "13:01",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087df92832c99001eb2e9f5"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:59"
        },
        {
          "in": "13:56",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087df97832c99001eb2e9f7"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:01"
        },
        {
          "in": "12:54",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e00b832c99001eb2e9f9"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "10:59"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e0c3832c99001eb2e9fb"
      },
      "totalTimes": "08:51",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:13"
        },
        {
          "in": "13:13",
          "out": "17:51"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e0db832c99001eb2e9fd"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:02"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e124832c99001eb2e9ff"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:02"
        },
        {
          "in": "14:01",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e15a832c99001eb2ea01"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "13:27"
        },
        {
          "in": "15:44",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e15c832c99001eb2ea03"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:03"
        },
        {
          "in": "13:59",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e16b832c99001eb2ea05"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e181832c99001eb2ea07"
      },
      "totalTimes": "11:57",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:16"
        },
        {
          "in": "13:03",
          "out": "20:47"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e183832c99001eb2ea09"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:03"
        },
        {
          "in": "13:02",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6087e1b5832c99001eb2ea0b"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:00"
        },
        {
          "in": "14:03",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e1b9832c99001eb2ea0d"
      },
      "totalTimes": "11:21",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "18:25"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6087e1d9832c99001eb2ea0f"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:03"
        },
        {
          "in": "13:18",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087e22a832c99001eb2ea11"
      },
      "totalTimes": "08:27",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:14"
        },
        {
          "in": "14:02",
          "out": "17:21"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6087e249832c99001eb2ea13"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:10"
        },
        {
          "in": "13:09",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6087e504832c99001eb2ea15"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "12:05"
        },
        {
          "in": "14:04",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6087e5cc832c99001eb2ea16"
      },
      "totalTimes": "07:09",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:22",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "16:30"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087ee2a832c99001eb2ea18"
      },
      "totalTimes": "06:02",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:57",
          "out": "13:59"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6087ee3f832c99001eb2ea1a"
      },
      "totalTimes": "10:24",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "07:58",
          "out": "11:59"
        },
        {
          "in": "13:13",
          "out": "19:36"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087efac832c99001eb2ea1c"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:04"
        },
        {
          "in": "13:20",
          "out": "17:20"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087efc9832c99001eb2ea1e"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:06"
        },
        {
          "in": "14:08",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087efdf832c99001eb2ea20"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "12:05"
        },
        {
          "in": "14:14",
          "out": "18:25"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087f1c7832c99001eb2ea22"
      },
      "totalTimes": "07:43",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "08:13",
          "out": "12:55"
        },
        {
          "in": "15:13",
          "out": "18:14"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087f2ac832c99001eb2ea24"
      },
      "totalTimes": "07:14",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "08:17",
          "out": "12:01"
        },
        {
          "in": "14:28",
          "out": "17:58"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6087f65d832c99001eb2ea26"
      },
      "totalTimes": "07:31",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "08:32",
          "out": "12:02"
        },
        {
          "in": "14:01",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60880b70832c99001eb2ea28"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:01"
        },
        {
          "in": "16:02",
          "out": "20:11"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60880b87832c99001eb2ea2b"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:04"
        },
        {
          "in": "16:01",
          "out": "20:06"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60882601832c99001eb2ea38"
      },
      "totalTimes": "09:49",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "11:56",
          "out": "17:10"
        },
        {
          "in": "18:59",
          "out": "23:34"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60882784832c99001eb2ea3f"
      },
      "totalTimes": "10:38",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "16:30"
        },
        {
          "in": "18:30",
          "out": "00:40"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "60884230832c99001eb2ea58"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "13:56",
          "out": "17:56"
        },
        {
          "in": "19:58",
          "out": "23:59"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60887446832c99001eb2ea82"
      },
      "totalTimes": "05:29",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "17:29"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6088ad09832c99001eb2ea94"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "21:32",
          "out": "05:52"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6088b34d832c99001eb2ea96"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "21:58",
          "out": "05:59"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6088ce6c832c99001eb2ea99"
      },
      "totalTimes": "06:07",
      "date": {
        "$date": {
          "$numberLong": "1619481600000"
        }
      },
      "times": [
        {
          "in": "23:54",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60892428832c99001eb2ea9e"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "11:20"
        },
        {
          "in": "13:21",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608924a5832c99001eb2eaa1"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "10:29"
        },
        {
          "in": "12:24",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60892fa5832c99001eb2eaa3"
      },
      "totalTimes": "08:26",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:49",
          "out": "11:03"
        },
        {
          "in": "12:52",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60892ff5832c99001eb2eaa6"
      },
      "totalTimes": "12:41",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "12:17"
        },
        {
          "in": "13:49",
          "out": "21:03"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6089302f832c99001eb2eaa8"
      },
      "totalTimes": "08:47",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "12:13"
        },
        {
          "in": "13:51",
          "out": "17:16"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60893090832c99001eb2eaaa"
      },
      "totalTimes": "08:28",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:17"
        },
        {
          "in": "12:58",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6089315e832c99001eb2eaac"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:00"
        },
        {
          "in": "13:52",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608931b8832c99001eb2eaae"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:22"
        },
        {
          "in": "13:20",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608931db832c99001eb2eab0"
      },
      "totalTimes": "08:30",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:56"
        },
        {
          "in": "13:58",
          "out": "17:30"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608931e7832c99001eb2eab2"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:55"
        },
        {
          "in": "13:52",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60893214832c99001eb2eab4"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        },
        {
          "in": "13:03",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6089322c832c99001eb2eab6"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:04"
        },
        {
          "in": "13:04",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60893257832c99001eb2eab8"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:16"
        },
        {
          "in": "13:20",
          "out": "16:57"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60893278832c99001eb2eaba"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:04"
        },
        {
          "in": "13:09",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6089330a832c99001eb2eabc"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:01"
        },
        {
          "in": "14:03",
          "out": "17:20"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60893366832c99001eb2eabe"
      },
      "totalTimes": "11:22",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "18:27"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6089337a832c99001eb2eac0"
      },
      "totalTimes": "07:19",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:05"
        },
        {
          "in": "14:20",
          "out": "16:39"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608934b2832c99001eb2eac2"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:01"
        },
        {
          "in": "14:02",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608934c2832c99001eb2eac4"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60893521832c99001eb2eac6"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:01"
        },
        {
          "in": "14:11",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6089353b832c99001eb2eac7"
      },
      "totalTimes": "05:48",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:04"
        },
        {
          "in": "14:04",
          "out": "15:01"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608935f8832c99001eb2eac9"
      },
      "totalTimes": "11:43",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:16",
          "out": "18:59"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6089385b832c99001eb2eacb"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:26",
          "out": "11:11"
        },
        {
          "in": "13:17",
          "out": "17:16"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60893e65832c99001eb2eacd"
      },
      "totalTimes": "06:05",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:52",
          "out": "13:57"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60893fe7832c99001eb2eacf"
      },
      "totalTimes": "12:39",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:58",
          "out": "12:02"
        },
        {
          "in": "14:16",
          "out": "22:51"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60894005832c99001eb2ead1"
      },
      "totalTimes": "00:10",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "07:59",
          "out": "08:09"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6089405c832c99001eb2ead3"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:01"
        },
        {
          "out": "17:59",
          "in": "14:00"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608940b3832c99001eb2ead5"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:02"
        },
        {
          "in": "14:05",
          "out": "18:06"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60894214832c99001eb2ead7"
      },
      "totalTimes": "08:35",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "12:10"
        },
        {
          "in": "13:04",
          "out": "17:37"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60894357832c99001eb2ead9"
      },
      "totalTimes": "09:20",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "08:13",
          "out": "11:54"
        },
        {
          "in": "13:49",
          "out": "19:28"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608943b6832c99001eb2eadb"
      },
      "totalTimes": "09:35",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "08:15",
          "out": "17:50"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60895bf1832c99001eb2eadd"
      },
      "totalTimes": "08:57",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "09:58",
          "out": "13:42"
        },
        {
          "in": "15:30",
          "out": "20:43"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60895d5a832c99001eb2eadf"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:09"
        },
        {
          "in": "16:03",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60897763832c99001eb2eaed"
      },
      "totalTimes": "10:50",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "11:55",
          "out": "22:45"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60897b85832c99001eb2eaf9"
      },
      "totalTimes": "04:03",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "12:13",
          "out": "12:13"
        },
        {
          "in": "13:57",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6089940a832c99001eb2eb11"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "13:57",
          "out": "17:55"
        },
        {
          "in": "20:00",
          "out": "23:54"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a0232832c99001eb2eb3d"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "21:47",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608a06d7832c99001eb2eb3f"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "22:07",
          "out": "06:10"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608a1eba832c99001eb2eb43"
      },
      "totalTimes": "06:11",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "23:49",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608a754c832c99001eb2eb46"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:02"
        },
        {
          "in": "12:00",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a75d1832c99001eb2eb49"
      },
      "totalTimes": "21:53",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:36"
        },
        {
          "in": "12:32",
          "out": "05:50"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a78fb832c99001eb2eb4d"
      },
      "totalTimes": "09:24",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "06:14",
          "out": "10:23"
        },
        {
          "in": "12:07",
          "out": "17:22"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a7eb3832c99001eb2eb4f"
      },
      "totalTimes": "10:22",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "06:38",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "608a7ee4832c99001eb2eb51"
      },
      "totalTimes": "08:40",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "06:39",
          "out": "12:02"
        },
        {
          "in": "13:54",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8139832c99001eb2eb53"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "06:49",
          "out": "11:02"
        },
        {
          "in": "12:54",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8275832c99001eb2eb55"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:59"
        },
        {
          "in": "13:54",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8331832c99001eb2eb57"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:00"
        },
        {
          "in": "12:58",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a83a9832c99001eb2eb59"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:08"
        },
        {
          "in": "13:09",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a83ff832c99001eb2eb5b"
      },
      "totalTimes": "07:45",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:03"
        },
        {
          "in": "13:14",
          "out": "16:57"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8400832c99001eb2eb5d"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:04"
        },
        {
          "in": "14:01",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8407832c99001eb2eb5f"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:05"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8415832c99001eb2eb61"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:05"
        },
        {
          "in": "14:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "608a841e832c99001eb2eb63"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:32"
        },
        {
          "in": "13:24",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a845c832c99001eb2eb65"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8461832c99001eb2eb67"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:09"
        },
        {
          "in": "13:04",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8476832c99001eb2eb69"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:06"
        },
        {
          "in": "14:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8527832c99001eb2eb6b"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:03"
        },
        {
          "in": "14:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8575832c99001eb2eb6d"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:01"
        },
        {
          "in": "14:06",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a86d1832c99001eb2eb6f"
      },
      "totalTimes": "09:29",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:48"
        },
        {
          "in": "14:11",
          "out": "18:05"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a879e832c99001eb2eb71"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "12:21"
        },
        {
          "in": "14:13",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a8f91832c99001eb2eb73"
      },
      "totalTimes": "06:03",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:50",
          "out": "13:53"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608a927d832c99001eb2eb75"
      },
      "totalTimes": "08:34",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:22"
        },
        {
          "in": "13:04",
          "out": "17:19"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "608a9297832c99001eb2eb77"
      },
      "totalTimes": "08:29",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:22"
        },
        {
          "in": "13:11",
          "out": "17:21"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a92a4832c99001eb2eb79"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "18:12"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a9334832c99001eb2eb7b"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:06"
        },
        {
          "in": "14:06",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a93e9832c99001eb2eb7e"
      },
      "totalTimes": "09:27",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "08:09",
          "out": "12:43"
        },
        {
          "in": "14:46",
          "out": "19:39"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a94e6832c99001eb2eb80"
      },
      "totalTimes": "07:33",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "08:13",
          "out": "12:01"
        },
        {
          "in": "14:18",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608a959b832c99001eb2eb82"
      },
      "totalTimes": "07:29",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "08:16",
          "out": "12:03"
        },
        {
          "in": "14:19",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608aa633832c99001eb2eb84"
      },
      "totalTimes": "07:40",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:03"
        },
        {
          "in": "14:10",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "608aae51832c99001eb2eb85"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:06"
        },
        {
          "in": "15:57",
          "out": "20:07"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608acad1832c99001eb2eb9d"
      },
      "totalTimes": "09:56",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "12:03",
          "out": "21:59"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608ae530832c99001eb2ebb7"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "13:56",
          "out": "17:56"
        },
        {
          "in": "19:59",
          "out": "23:54"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608ae949832c99001eb2ebc4"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "out": "12:00",
          "in": "08:01"
        },
        {
          "in": "14:09",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608b11a3832c99001eb2ebd7"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608b11b8832c99001eb2ebd8"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608b124a832c99001eb2ebda"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "out": "11:00",
          "in": "06:58"
        },
        {
          "in": "13:02",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "608b5639832c99001eb2ebec"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "21:58",
          "out": "06:11"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608b6f3f832c99001eb2ebef"
      },
      "totalTimes": "20:08",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "23:45",
          "out": "19:53"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608bc98b832c99001eb2ebf2"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:10",
          "out": "10:12"
        },
        {
          "in": "12:01",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bc9e3832c99001eb2ebf5"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "22:00",
          "out": "06:12"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "608bd155832c99001eb2ebf8"
      },
      "totalTimes": "09:43",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:43",
          "out": "12:17"
        },
        {
          "in": "13:24",
          "out": "17:33"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd371832c99001eb2ebfa"
      },
      "totalTimes": "04:10",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608bd3e7832c99001eb2ebfc"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:07"
        },
        {
          "in": "13:10",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd415832c99001eb2ebfe"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:08"
        },
        {
          "in": "13:01",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608bd42b832c99001eb2ec00"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd42f832c99001eb2ec02"
      },
      "totalTimes": "08:59",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:45"
        },
        {
          "in": "15:03",
          "out": "18:12"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd4d7832c99001eb2ec04"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "12:59",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd4eb832c99001eb2ec07"
      },
      "totalTimes": "10:31",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "17:30"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608bd502832c99001eb2ec09"
      },
      "totalTimes": "13:49",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "20:48"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608bd51b832c99001eb2ec0b"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:02"
        },
        {
          "in": "13:58",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd530832c99001eb2ec0d"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:02"
        },
        {
          "in": "13:18",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd553832c99001eb2ec0f"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:00"
        },
        {
          "in": "14:02",
          "out": "16:46"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd554832c99001eb2ec11"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:10"
        },
        {
          "in": "13:09",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd5a4832c99001eb2ec13"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:16"
        },
        {
          "in": "13:10",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd697832c99001eb2ec15"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd6a8832c99001eb2ec17"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd6cd832c99001eb2ec19"
      },
      "totalTimes": "08:52",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:53"
        },
        {
          "in": "14:01",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd748832c99001eb2ec1b"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:09"
        },
        {
          "in": "13:58",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd769832c99001eb2ec1d"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:05"
        },
        {
          "in": "14:00",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bd9af832c99001eb2ec1f"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "11:19"
        },
        {
          "in": "13:04",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bda17832c99001eb2ec21"
      },
      "totalTimes": "18:36",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:21",
          "out": "20:43"
        },
        {
          "in": "21:50",
          "out": "03:04"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bdaba832c99001eb2ec23"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "13:02",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608bdad7832c99001eb2ec25"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:05"
        },
        {
          "in": "14:03",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608bde20832c99001eb2ec26"
      },
      "totalTimes": "23:18",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:38",
          "out": "06:56"
        }
      ],
      "userId": {
        "$oid": "6059e5171d006d001d8ef533"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608be116832c99001eb2ec28"
      },
      "totalTimes": "06:05",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:51",
          "out": "13:56"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608be2a8832c99001eb2ec2a"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "07:57",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "608be35b832c99001eb2ec2c"
      },
      "totalTimes": "08:39",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:53"
        },
        {
          "in": "13:45",
          "out": "17:31"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608be363832c99001eb2ec2e"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608be4fb832c99001eb2ec30"
      },
      "totalTimes": "08:37",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "12:34"
        },
        {
          "in": "13:57",
          "out": "18:07"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608be5de832c99001eb2ec32"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "08:11",
          "out": "12:18"
        },
        {
          "in": "13:50",
          "out": "17:56"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608c0190832c99001eb2ec34"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "10:09",
          "out": "14:03"
        },
        {
          "in": "16:02",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608c0376832c99001eb2ec37"
      },
      "totalTimes": "07:43",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "10:17",
          "out": "14:01"
        },
        {
          "in": "16:03",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608c1aa3832c99001eb2ec41"
      },
      "totalTimes": "06:41",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "11:56",
          "out": "15:57"
        },
        {
          "in": "19:19",
          "out": "21:59"
        }
      ],
      "userId": {
        "$oid": "605f0943c69c0100150960f8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608c1e03832c99001eb2ec4f"
      },
      "totalTimes": "08:56",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "12:10",
          "out": "16:04"
        },
        {
          "in": "17:43",
          "out": "22:45"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608c8bdf832c99001eb2ec8d"
      },
      "totalTimes": "09:57",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "19:59",
          "out": "05:56"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608ca4d3832c99001eb2ec93"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "21:46",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608ca807832c99001eb2ec97"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "21:59",
          "out": "06:08"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608d1659832c99001eb2ec9c"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "05:50",
          "out": "10:01"
        },
        {
          "in": "11:57",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608d17d2832c99001eb2ec9e"
      },
      "totalTimes": "10:41",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "05:56",
          "out": "16:37"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608d17fe832c99001eb2eca1"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "05:57",
          "out": "10:04"
        },
        {
          "in": "12:05",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608d1853832c99001eb2eca3"
      },
      "totalTimes": "10:04",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608d2e61832c99001eb2eca7"
      },
      "totalTimes": "09:30",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "07:33",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608d51b0832c99001eb2ecaa"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:02"
        },
        {
          "in": "16:03",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608d6fc4832c99001eb2ecaf"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "12:12",
          "out": "16:11"
        },
        {
          "in": "18:01",
          "out": "22:01"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608d7bd2832c99001eb2ecb2"
      },
      "totalTimes": "07:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "13:03",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608df97c832c99001eb2ecbf"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "21:59",
          "out": "06:09"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608df9a7832c99001eb2ecc1"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "22:00",
          "out": "06:10"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608e6824832c99001eb2ecc4"
      },
      "totalTimes": "10:05",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "05:51",
          "out": "15:56"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608e6996832c99001eb2ecc6"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "05:57",
          "out": "11:52"
        },
        {
          "in": "13:56",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608e6a3a832c99001eb2ecc8"
      },
      "totalTimes": "07:12",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "13:12"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608e6a64832c99001eb2ecca"
      },
      "totalTimes": "05:59",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "00:02",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608e7845832c99001eb2ecce"
      },
      "totalTimes": "06:21",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "13:21"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608e7cfb832c99001eb2ecd0"
      },
      "totalTimes": "07:38",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "11:05"
        },
        {
          "in": "13:30",
          "out": "17:23"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608ea597832c99001eb2ecd2"
      },
      "totalTimes": "09:49",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "10:13",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608ec09f832c99001eb2ecd6"
      },
      "totalTimes": "08:34",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "12:09",
          "out": "16:12"
        },
        {
          "in": "18:02",
          "out": "22:33"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608ecdf3832c99001eb2ecd8"
      },
      "totalTimes": "06:13",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "13:06",
          "out": "19:19"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "608ecf7e832c99001eb2ecdb"
      },
      "totalTimes": "06:47",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "13:12",
          "out": "19:59"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608ed983832c99001eb2ecdf"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "13:55",
          "out": "17:56"
        },
        {
          "in": "19:55",
          "out": "23:50"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608f4ad3832c99001eb2ecec"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "21:58",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608f4bf9832c99001eb2ecee"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "22:03",
          "out": "06:15"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608fbb5d832c99001eb2ecf2"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:03"
        },
        {
          "in": "12:03",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fbbe6832c99001eb2ecf4"
      },
      "totalTimes": "08:46",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:27"
        },
        {
          "in": "12:00",
          "out": "16:20"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608fbbeb832c99001eb2ecf6"
      },
      "totalTimes": "04:07",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:08"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "608fc29e832c99001eb2ecfa"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:30",
          "out": "10:45"
        },
        {
          "in": "12:21",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fc5eb832c99001eb2ecfc"
      },
      "totalTimes": "12:06",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:44",
          "out": "18:50"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608fc63f832c99001eb2ecfe"
      },
      "totalTimes": "04:43",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:45",
          "out": "11:17"
        },
        {
          "in": "16:53",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fc765832c99001eb2ed00"
      },
      "totalTimes": "10:54",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "17:44"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608fc7ae832c99001eb2ed02"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "11:01"
        },
        {
          "in": "12:49",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fc801832c99001eb2ed04"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:59"
        },
        {
          "in": "13:52",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fc8a1832c99001eb2ed06"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:02"
        },
        {
          "in": "12:27",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fc96b832c99001eb2ed08"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        },
        {
          "in": "12:58",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fc97f832c99001eb2ed0a"
      },
      "totalTimes": "10:39",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "17:38"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "608fc9c7832c99001eb2ed0c"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:53"
        },
        {
          "in": "13:53",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fc9d9832c99001eb2ed0e"
      },
      "totalTimes": "08:40",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:24"
        },
        {
          "in": "13:55",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fc9e4832c99001eb2ed10"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:04"
        },
        {
          "in": "14:02",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fca0f832c99001eb2ed12"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:02"
        },
        {
          "in": "12:58",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fca25832c99001eb2ed14"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        },
        {
          "in": "13:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fca4e832c99001eb2ed16"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        },
        {
          "in": "13:01",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fcbc3832c99001eb2ed18"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:05"
        },
        {
          "in": "14:01",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fcbd8832c99001eb2ed1a"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:05"
        },
        {
          "in": "14:00",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fcc31832c99001eb2ed1c"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:05"
        },
        {
          "in": "13:12",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fcdb2832c99001eb2ed1e"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "11:44"
        },
        {
          "in": "13:50",
          "out": "17:33"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fce0f832c99001eb2ed20"
      },
      "totalTimes": "07:33",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:18",
          "out": "11:52"
        },
        {
          "in": "14:07",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fcf19832c99001eb2ed22"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:23",
          "out": "12:07"
        },
        {
          "in": "13:49",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fd4be832c99001eb2ed23"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:47",
          "out": "11:48"
        },
        {
          "in": "13:55",
          "out": "17:47"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fd8cd832c99001eb2ed25"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "13:00"
        },
        {
          "in": "15:02",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fd8eb832c99001eb2ed26"
      },
      "totalTimes": "08:24",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "12:10"
        },
        {
          "in": "13:09",
          "out": "17:28"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fd936832c99001eb2ed28"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:08"
        },
        {
          "in": "14:04",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fd957832c99001eb2ed2a"
      },
      "totalTimes": "09:54",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "18:01"
        },
        {
          "in": "18:02",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fd9c5832c99001eb2ed2c"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "12:14"
        },
        {
          "in": "13:55",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fdb25832c99001eb2ed2e"
      },
      "totalTimes": "08:34",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "08:14",
          "out": "13:09"
        },
        {
          "in": "15:09",
          "out": "18:48"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fdc12832c99001eb2ed33"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:11"
        },
        {
          "in": "13:01",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "608fdd95832c99001eb2ed35"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:09"
        },
        {
          "in": "14:09",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608fddf1832c99001eb2ed36"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fddf8832c99001eb2ed37"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fde02832c99001eb2ed38"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fde3a832c99001eb2ed39"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fdebd832c99001eb2ed3a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fdec4832c99001eb2ed3b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fdf1a832c99001eb2ed3d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fdf3a832c99001eb2ed3e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe000832c99001eb2ed3f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe004832c99001eb2ed40"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe00d832c99001eb2ed41"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe016832c99001eb2ed42"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4a41d006d001d8ef531"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "608fe645832c99001eb2ed43"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe648832c99001eb2ed44"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe64e832c99001eb2ed45"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe688832c99001eb2ed46"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe6d4832c99001eb2ed47"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe853832c99001eb2ed48"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe858832c99001eb2ed49"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe85f832c99001eb2ed4a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe877832c99001eb2ed4b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe87a832c99001eb2ed4c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe87e832c99001eb2ed4d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe881832c99001eb2ed4e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe88c832c99001eb2ed4f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fe92a832c99001eb2ed51"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618272000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fea0f832c99001eb2ed52"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fea16832c99001eb2ed53"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fea23832c99001eb2ed54"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fea26832c99001eb2ed55"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fea2a832c99001eb2ed56"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fea2d832c99001eb2ed57"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fea32832c99001eb2ed58"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619049600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608feb54832c99001eb2ed59"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608feb5a832c99001eb2ed5a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608feb62832c99001eb2ed5b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608feb6a832c99001eb2ed5c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608feb6f832c99001eb2ed5d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608febfd832c99001eb2ed5e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fec04832c99001eb2ed5f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fec08832c99001eb2ed60"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fec0f832c99001eb2ed61"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fec16832c99001eb2ed62"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fed0c832c99001eb2ed63"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fed10832c99001eb2ed64"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fed16832c99001eb2ed65"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fed1b832c99001eb2ed66"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fed20832c99001eb2ed67"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fee60832c99001eb2ed68"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff350832c99001eb2ed69"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "09:57",
          "out": "14:12"
        },
        {
          "in": "15:56",
          "out": "19:55"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "608ff499832c99001eb2ed6c"
      },
      "totalTimes": "09:07",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:39"
        },
        {
          "in": "16:20",
          "out": "20:51"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "608ff604832c99001eb2ed6f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff609832c99001eb2ed70"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff60c832c99001eb2ed71"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff618832c99001eb2ed72"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff61d832c99001eb2ed73"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617494400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff621832c99001eb2ed74"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617408000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff626832c99001eb2ed75"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618012800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff629832c99001eb2ed76"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618099200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff62d832c99001eb2ed77"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618617600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff630832c99001eb2ed78"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618704000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff63d832c99001eb2ed79"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff640832c99001eb2ed7a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff6c3832c99001eb2ed7b"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff6c6832c99001eb2ed7c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff6cf832c99001eb2ed7d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff6d6832c99001eb2ed7e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff818832c99001eb2ed7f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff81c832c99001eb2ed80"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff821832c99001eb2ed81"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff89c832c99001eb2ed82"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff8a2832c99001eb2ed83"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff8c1832c99001eb2ed84"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff8c7832c99001eb2ed85"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ff8d0832c99001eb2ed86"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffa29832c99001eb2ed87"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffa2d832c99001eb2ed88"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffa31832c99001eb2ed89"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffa35832c99001eb2ed8a"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffa8b832c99001eb2ed8c"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffa8f832c99001eb2ed8d"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffa9d832c99001eb2ed8e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffac7832c99001eb2ed8f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffb62832c99001eb2ed90"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffb68832c99001eb2ed91"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1617321600000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608ffb6d832c99001eb2ed92"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1618963200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "608fff2c832c99001eb2ed94"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619308800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60900035832c99001eb2ed95"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619222400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60900323832c99001eb2ed9b"
      },
      "totalTimes": "10:02",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "20:01",
          "out": "06:03"
        },
        {
          "in": "00:00",
          "out": "00:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60901123832c99001eb2eda8"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "12:05",
          "out": "16:11"
        },
        {
          "in": "18:05",
          "out": "22:13"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60901df1832c99001eb2edb6"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619568000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60901e95832c99001eb2edb9"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60901eb3832c99001eb2edba"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60901ede832c99001eb2edbc"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60901f11832c99001eb2edbe"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60902ad1832c99001eb2edc5"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "13:54",
          "out": "17:55"
        },
        {
          "in": "19:53",
          "out": "23:52"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609048e8832c99001eb2edd6"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "609057ac832c99001eb2edeb"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60908095832c99001eb2ee00"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60909aa0832c99001eb2ee03"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "21:51",
          "out": "06:04"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60909b81832c99001eb2ee05"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "21:55",
          "out": "06:15"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6090b5de832c99001eb2ee08"
      },
      "totalTimes": "06:13",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "23:47",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60910cfb832c99001eb2ee0b"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:07"
        },
        {
          "in": "12:03",
          "out": "16:12"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60910d37832c99001eb2ee0e"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:07"
        },
        {
          "in": "11:59",
          "out": "16:09"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60910f12832c99001eb2ee11"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "10:00"
        },
        {
          "in": "12:02",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60910fae832c99001eb2ee13"
      },
      "totalTimes": "09:38",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "06:11",
          "out": "10:08"
        },
        {
          "in": "12:03",
          "out": "17:44"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911793832c99001eb2ee16"
      },
      "totalTimes": "11:16",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "06:44",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60911932832c99001eb2ee18"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "11:59"
        },
        {
          "in": "14:05",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911974832c99001eb2ee1a"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:02"
        },
        {
          "in": "12:57",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911a67832c99001eb2ee1c"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:04"
        },
        {
          "in": "12:58",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911aa8832c99001eb2ee1e"
      },
      "totalTimes": "09:14",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:08"
        },
        {
          "in": "13:57",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911b28832c99001eb2ee20"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:00"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911b6d832c99001eb2ee22"
      },
      "totalTimes": "08:30",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:00"
        },
        {
          "in": "13:57",
          "out": "17:28"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911b8a832c99001eb2ee24"
      },
      "totalTimes": "10:19",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "17:20"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60911baf832c99001eb2ee26"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        },
        {
          "in": "12:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911bc7832c99001eb2ee28"
      },
      "totalTimes": "09:48",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "16:50"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60911bd9832c99001eb2ee2a"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:28"
        },
        {
          "in": "14:14",
          "out": "16:56"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911c25832c99001eb2ee2c"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:06"
        },
        {
          "in": "14:06",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911c86832c99001eb2ee2e"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:11"
        },
        {
          "in": "13:03",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911cfd832c99001eb2ee30"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:07"
        },
        {
          "in": "13:09",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911ddb832c99001eb2ee32"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "12:02"
        },
        {
          "in": "14:00",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60911e86832c99001eb2ee34"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "11:04"
        },
        {
          "in": "13:12",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609121a8832c99001eb2ee36"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:27",
          "out": "12:04"
        },
        {
          "in": "14:03",
          "out": "17:38"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "609126cb832c99001eb2ee38"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "11:53"
        },
        {
          "in": "13:50",
          "out": "17:47"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6091299d832c99001eb2ee3a"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:10"
        },
        {
          "in": "14:06",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609129fc832c99001eb2ee3c"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:03"
        },
        {
          "in": "12:57",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60912a92832c99001eb2ee3e"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "12:06"
        },
        {
          "in": "14:06",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60912b6b832c99001eb2ee40"
      },
      "totalTimes": "08:39",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "08:09",
          "out": "11:36"
        },
        {
          "in": "13:35",
          "out": "18:47"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60912bbd832c99001eb2ee42"
      },
      "totalTimes": "07:36",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "08:10",
          "out": "13:02"
        },
        {
          "in": "15:19",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60912c15832c99001eb2ee44"
      },
      "totalTimes": "11:52",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "08:12",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60912ccb832c99001eb2ee46"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "08:15",
          "out": "12:26"
        },
        {
          "in": "14:20",
          "out": "17:59"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609135f1832c99001eb2ee48"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:03"
        },
        {
          "in": "14:05",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "6091360b832c99001eb2ee49"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:04"
        },
        {
          "in": "13:04",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60914621832c99001eb2ee4d"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:02"
        },
        {
          "in": "16:03",
          "out": "19:58"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60916283832c99001eb2ee63"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "12:04",
          "out": "16:02"
        },
        {
          "in": "17:56",
          "out": "22:03"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60917c34832c99001eb2ee78"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "13:54",
          "out": "17:54"
        },
        {
          "in": "19:56",
          "out": "23:54"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609182cb832c99001eb2ee85"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "609182ce832c99001eb2ee86"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "6091ec78832c99001eb2eeaa"
      },
      "totalTimes": "08:24",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "21:53",
          "out": "06:17"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6091eda5832c99001eb2eeac"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "21:58",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6092085a832c99001eb2eeaf"
      },
      "totalTimes": "06:07",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "23:52",
          "out": "05:59"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60925d69832c99001eb2eeb2"
      },
      "totalTimes": "08:46",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "05:55",
          "out": "10:05"
        },
        {
          "in": "12:03",
          "out": "16:39"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60925e49832c99001eb2eeb4"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:07"
        },
        {
          "in": "11:59",
          "out": "16:10"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6092613f832c99001eb2eeb8"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "06:11",
          "out": "10:08"
        },
        {
          "in": "12:13",
          "out": "16:09"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926373832c99001eb2eebb"
      },
      "totalTimes": "09:44",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "06:20",
          "out": "10:00"
        },
        {
          "in": "11:57",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926b6d832c99001eb2eebd"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "12:00"
        },
        {
          "in": "13:54",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926b8b832c99001eb2eec0"
      },
      "totalTimes": "10:49",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "17:44"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60926c1c832c99001eb2eec2"
      },
      "totalTimes": "08:35",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:05"
        },
        {
          "in": "12:56",
          "out": "17:23"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926c24832c99001eb2eec4"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:04"
        },
        {
          "in": "12:58",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926c8b832c99001eb2eec6"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:01"
        },
        {
          "in": "13:01",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926d1b832c99001eb2eec8"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:21"
        },
        {
          "in": "13:17",
          "out": "16:50"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926d21832c99001eb2eeca"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:02"
        },
        {
          "in": "14:01",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926d50832c99001eb2eecc"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60926dde832c99001eb2eece"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:05"
        },
        {
          "in": "14:03",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926e02832c99001eb2eed0"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:06"
        },
        {
          "in": "13:05",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926e3c832c99001eb2eed2"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:11"
        },
        {
          "in": "13:17",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926e74832c99001eb2eed4"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:02"
        },
        {
          "in": "13:55",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926ea4832c99001eb2eed6"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:06"
        },
        {
          "in": "13:59",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60926eae832c99001eb2eed8"
      },
      "totalTimes": "13:30",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "20:38"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60927165832c99001eb2eeda"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "11:06"
        },
        {
          "in": "13:07",
          "out": "17:32"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60927308832c99001eb2eedc"
      },
      "totalTimes": "09:26",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:27",
          "out": "13:12"
        },
        {
          "in": "14:57",
          "out": "18:38"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60927815832c99001eb2eede"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "11:48"
        },
        {
          "in": "13:47",
          "out": "17:45"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609279ca832c99001eb2eee0"
      },
      "totalTimes": "08:31",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:56",
          "out": "11:57"
        },
        {
          "in": "12:51",
          "out": "17:21"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60927aed832c99001eb2eee2"
      },
      "totalTimes": "09:12",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "11:59"
        },
        {
          "in": "14:01",
          "out": "19:15"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60927b9a832c99001eb2eee4"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:03"
        },
        {
          "in": "14:07",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60927bb0832c99001eb2eee6"
      },
      "totalTimes": "09:12",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "17:16"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60927cc3832c99001eb2eee8"
      },
      "totalTimes": "13:16",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "21:24"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60927fce832c99001eb2eeea"
      },
      "totalTimes": "04:51",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "08:21",
          "out": "13:12"
        },
        {
          "in": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609296ee832c99001eb2eeec"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:09"
        },
        {
          "in": "16:05",
          "out": "20:14"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6092b206832c99001eb2eefb"
      },
      "totalTimes": "05:04",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "11:56",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6092b286832c99001eb2eeff"
      },
      "totalTimes": "07:11",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "11:58",
          "out": "19:09"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6092b37d832c99001eb2ef04"
      },
      "totalTimes": "08:35",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:03"
        },
        {
          "in": "13:54",
          "out": "17:31"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6092cd9d832c99001eb2ef19"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "13:53",
          "out": "17:55"
        },
        {
          "in": "19:54",
          "out": "23:55"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6092d775832c99001eb2ef24"
      },
      "totalTimes": "07:36",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "12:02"
        },
        {
          "in": "14:07",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "6092d7a1832c99001eb2ef25"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:00"
        },
        {
          "in": "13:04",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60933eab832c99001eb2ef49"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "21:56",
          "out": "06:15"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6093401b832c99001eb2ef4b"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "22:02",
          "out": "06:05"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60935a08832c99001eb2ef4d"
      },
      "totalTimes": "06:08",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "23:52",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6093b00b832c99001eb2ef50"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:07"
        },
        {
          "in": "12:01",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093b032832c99001eb2ef53"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "11:01"
        },
        {
          "in": "12:57",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093b0cf832c99001eb2ef55"
      },
      "totalTimes": "10:09",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "16:12"
        },
        {
          "in": "16:12",
          "out": "16:12"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093b28b832c99001eb2ef58"
      },
      "totalTimes": "10:35",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:10",
          "out": "10:11"
        },
        {
          "in": "12:06",
          "out": "18:40"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bbf1832c99001eb2ef5b"
      },
      "totalTimes": "08:24",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "11:03"
        },
        {
          "in": "12:57",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bc8c832c99001eb2ef5d"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:59"
        },
        {
          "in": "13:57",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bd1f832c99001eb2ef5f"
      },
      "totalTimes": "00:31",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "07:26"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6093bd1f832c99001eb2ef61"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:00"
        },
        {
          "in": "14:05",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bd5e832c99001eb2ef63"
      },
      "totalTimes": "10:22",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "17:18"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6093bdbb832c99001eb2ef65"
      },
      "totalTimes": "09:38",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:55"
        },
        {
          "in": "14:54",
          "out": "18:35"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bdcf832c99001eb2ef67"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "12:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093be5d832c99001eb2ef69"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:03"
        },
        {
          "in": "14:12",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093be67832c99001eb2ef6b"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:01"
        },
        {
          "in": "12:58",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bebb832c99001eb2ef6d"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:04"
        },
        {
          "in": "13:01",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bf2d832c99001eb2ef6f"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:02"
        },
        {
          "in": "13:03",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bf39832c99001eb2ef71"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:03"
        },
        {
          "in": "14:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093bf98832c99001eb2ef73"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:06"
        },
        {
          "in": "13:08",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093c0a3832c99001eb2ef75"
      },
      "totalTimes": "09:48",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6093c0fd832c99001eb2ef77"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:04"
        },
        {
          "in": "14:03",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093c11d832c99001eb2ef79"
      },
      "totalTimes": "07:43",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:05"
        },
        {
          "in": "14:12",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093c241832c99001eb2ef7b"
      },
      "totalTimes": "07:28",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "11:05"
        },
        {
          "in": "13:24",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093c24d832c99001eb2ef7d"
      },
      "totalTimes": "10:13",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "17:30"
        },
        {
          "in": "17:30",
          "out": "17:30"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093c2ae832c99001eb2ef7f"
      },
      "totalTimes": "08:24",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "13:02"
        },
        {
          "in": "14:48",
          "out": "17:29"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093c964832c99001eb2ef81"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "11:50"
        },
        {
          "in": "13:51",
          "out": "17:45"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093cadc832c99001eb2ef83"
      },
      "totalTimes": "09:45",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:54",
          "out": "14:17"
        },
        {
          "in": "15:16",
          "out": "18:38"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093cc15832c99001eb2ef85"
      },
      "totalTimes": "09:05",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:59",
          "out": "11:17"
        },
        {
          "in": "12:53",
          "out": "18:40"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093cc6f832c99001eb2ef87"
      },
      "totalTimes": "22:13",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:03"
        },
        {
          "in": "14:01",
          "out": "08:12"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093cc9a832c99001eb2ef89"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:01"
        },
        {
          "in": "14:11",
          "out": "18:06"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093d4de832c99001eb2ef8c"
      },
      "totalTimes": "07:23",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "08:37",
          "out": "12:00"
        },
        {
          "in": "14:04",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093e37f832c99001eb2ef8e"
      },
      "totalTimes": "10:13",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "09:39",
          "out": "19:52"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6093e8b2832c99001eb2ef90"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:00"
        },
        {
          "in": "16:04",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6093f29e832c99001eb2ef94"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "10:43",
          "out": "14:07"
        },
        {
          "in": "16:05",
          "out": "20:22"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609406eb832c99001eb2efab"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "12:10",
          "out": "16:08"
        },
        {
          "in": "18:03",
          "out": "22:12"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60940b89832c99001eb2efad"
      },
      "totalTimes": "06:04",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "11:00",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60940bac832c99001eb2efae"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60940bcf832c99001eb2efaf"
      },
      "totalTimes": "07:49",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "08:23",
          "out": "13:22"
        },
        {
          "in": "15:20",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "6094738f832c99001eb2eff1"
      },
      "totalTimes": "10:09",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "19:54",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60948b72832c99001eb2eff5"
      },
      "totalTimes": "08:26",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "21:36",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60948ff8832c99001eb2eff7"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "21:55",
          "out": "06:13"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60950185832c99001eb2effa"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:08"
        },
        {
          "in": "11:58",
          "out": "16:00"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609501c5832c99001eb2effc"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:00"
        },
        {
          "in": "12:00",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609501e0832c99001eb2effe"
      },
      "totalTimes": "13:56",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "11:35"
        },
        {
          "in": "13:26",
          "out": "21:48"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6095051e832c99001eb2f003"
      },
      "totalTimes": "07:40",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:15",
          "out": "10:13"
        },
        {
          "in": "12:24",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609506a6832c99001eb2f005"
      },
      "totalTimes": "11:36",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:21",
          "out": "12:55"
        },
        {
          "in": "14:27",
          "out": "19:29"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60950add832c99001eb2f007"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:39",
          "out": "13:08"
        },
        {
          "in": "16:00",
          "out": "17:18"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60950df9832c99001eb2f009"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:02"
        },
        {
          "in": "12:54",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60950e93832c99001eb2f00b"
      },
      "totalTimes": "21:59",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:59"
        },
        {
          "in": "13:58",
          "out": "06:53"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60950e97832c99001eb2f00d"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60950f00832c99001eb2f00f"
      },
      "totalTimes": "10:22",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "17:19"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60950f0b832c99001eb2f011"
      },
      "totalTimes": "09:46",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "12:09"
        },
        {
          "in": "13:53",
          "out": "18:27"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60950f53832c99001eb2f013"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "12:56",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60950fbb832c99001eb2f015"
      },
      "totalTimes": "09:19",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:04"
        },
        {
          "in": "12:57",
          "out": "18:12"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60950ffd832c99001eb2f017"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:04"
        },
        {
          "in": "14:10",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6095100e832c99001eb2f019"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:04"
        },
        {
          "in": "14:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60951039832c99001eb2f01b"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:01"
        },
        {
          "in": "12:52",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60951057832c99001eb2f01d"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:06"
        },
        {
          "in": "13:05",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609510d9832c99001eb2f01f"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6095115c832c99001eb2f021"
      },
      "totalTimes": "14:50",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:02"
        },
        {
          "in": "13:05",
          "out": "00:00"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60951176832c99001eb2f023"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:01"
        },
        {
          "in": "13:57",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609511a7832c99001eb2f024"
      },
      "totalTimes": "00:03",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "07:11"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609511e2832c99001eb2f026"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:04"
        },
        {
          "in": "13:03",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6095122b832c99001eb2f028"
      },
      "totalTimes": "08:31",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:10"
        },
        {
          "in": "12:59",
          "out": "17:30"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60951391832c99001eb2f02a"
      },
      "totalTimes": "08:24",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:16",
          "out": "11:00"
        },
        {
          "in": "12:55",
          "out": "17:35"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "609515cf832c99001eb2f02d"
      },
      "totalTimes": "10:06",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:26",
          "out": "17:32"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60951816832c99001eb2f02f"
      },
      "totalTimes": "07:38",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:36",
          "out": "12:14"
        },
        {
          "in": "14:03",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60951ac9832c99001eb2f031"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "07:47",
          "out": "11:49"
        },
        {
          "in": "13:47",
          "out": "17:45"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60951dd9832c99001eb2f033"
      },
      "totalTimes": "10:03",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60951ddd832c99001eb2f035"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "11:59"
        },
        {
          "in": "13:34",
          "out": "17:35"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60951ec2832c99001eb2f037"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:59"
        },
        {
          "in": "15:14",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60951fd9832c99001eb2f039"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "08:09",
          "out": "12:05"
        },
        {
          "in": "14:05",
          "out": "18:12"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60952097832c99001eb2f03c"
      },
      "totalTimes": "21:48",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "08:12",
          "out": "12:01"
        },
        {
          "in": "14:02",
          "out": "08:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60952c3c832c99001eb2f03e"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60952c3f832c99001eb2f03f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "609537fe832c99001eb2f040"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "09:52",
          "out": "14:00"
        },
        {
          "in": "15:58",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609539f7832c99001eb2f043"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:02"
        },
        {
          "in": "16:05",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60955566832c99001eb2f050"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "11:57",
          "out": "16:01"
        },
        {
          "in": "17:55",
          "out": "22:01"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6095c543832c99001eb2f097"
      },
      "totalTimes": "10:07",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "19:54",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6095df6e832c99001eb2f09b"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "21:46",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6095e114832c99001eb2f09e"
      },
      "totalTimes": "08:27",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "21:53",
          "out": "06:20"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60965310832c99001eb2f0a1"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:02"
        },
        {
          "in": "12:01",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60965498832c99001eb2f0a5"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "11:04"
        },
        {
          "in": "13:00",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609654a6832c99001eb2f0a7"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:00"
        },
        {
          "in": "11:59",
          "out": "15:57"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60965632832c99001eb2f0a9"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "06:13",
          "out": "10:14"
        },
        {
          "in": "12:04",
          "out": "16:17"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60965fde832c99001eb2f0ad"
      },
      "totalTimes": "04:08",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60966001832c99001eb2f0af"
      },
      "totalTimes": "05:08",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609660d4832c99001eb2f0b1"
      },
      "totalTimes": "04:03",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60966104832c99001eb2f0b3"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6096618a832c99001eb2f0b5"
      },
      "totalTimes": "07:08",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "14:09"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609661e3832c99001eb2f0b7"
      },
      "totalTimes": "03:56",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "10:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609661ec832c99001eb2f0b9"
      },
      "totalTimes": "05:05",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:08"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6096620b832c99001eb2f0bb"
      },
      "totalTimes": "04:59",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60966232832c99001eb2f0bd"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:06"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609662a1832c99001eb2f0bf"
      },
      "totalTimes": "03:54",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:00"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609662a5832c99001eb2f0c1"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:08"
        },
        {
          "in": "12:43",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609662ba832c99001eb2f0c3"
      },
      "totalTimes": "05:01",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:05"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "609662e2832c99001eb2f0c4"
      },
      "totalTimes": "03:58",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609662ff832c99001eb2f0c6"
      },
      "totalTimes": "04:01",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:08"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6096635d832c99001eb2f0ca"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:09"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609667a2832c99001eb2f0cc"
      },
      "totalTimes": "05:13",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:27",
          "out": "12:40"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6096691d832c99001eb2f0ce"
      },
      "totalTimes": "12:22",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:34",
          "out": "12:58"
        },
        {
          "in": "15:31",
          "out": "22:29"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60966b77832c99001eb2f0d0"
      },
      "totalTimes": "04:22",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:44",
          "out": "12:06"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60966bfd832c99001eb2f0d2"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:46",
          "out": "11:48"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60966dff832c99001eb2f0d4"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:54",
          "out": "12:01"
        },
        {
          "in": "13:52",
          "out": "17:53"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60966e14832c99001eb2f0d6"
      },
      "totalTimes": "04:10",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:55",
          "out": "12:05"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60966f55832c99001eb2f0d8"
      },
      "totalTimes": "04:10",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:10"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60966f91832c99001eb2f0db"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60968baa832c99001eb2f0de"
      },
      "totalTimes": "09:59",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "20:00"
        },
        {
          "in": "20:01",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60968bc9832c99001eb2f0e0"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:06"
        },
        {
          "in": "16:03",
          "out": "20:19"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60968c5b832c99001eb2f0e3"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:07"
        },
        {
          "in": "15:56",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6096a781832c99001eb2f0f2"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "12:00",
          "out": "15:56"
        },
        {
          "in": "17:54",
          "out": "22:05"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6096aa53832c99001eb2f0fe"
      },
      "totalTimes": "03:54",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "12:12",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6096b8f5832c99001eb2f104"
      },
      "totalTimes": "18:56",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "13:14",
          "out": "08:10"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6096c1eb832c99001eb2f107"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "13:52",
          "out": "17:54"
        },
        {
          "in": "19:55",
          "out": "23:53"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60972e23832c99001eb2f11f"
      },
      "totalTimes": "08:31",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "21:34",
          "out": "06:05"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609734d5832c99001eb2f121"
      },
      "totalTimes": "08:25",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "22:03",
          "out": "06:28"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60974e29832c99001eb2f125"
      },
      "totalTimes": "06:19",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "23:51",
          "out": "06:10"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6097a4ad832c99001eb2f128"
      },
      "totalTimes": "06:10",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "12:10"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6097a4c1832c99001eb2f12a"
      },
      "totalTimes": "06:11",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "12:11"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6097a5f6832c99001eb2f12d"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "09:56"
        },
        {
          "in": "11:59",
          "out": "15:58"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6097a678832c99001eb2f12f"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "10:05"
        },
        {
          "in": "12:02",
          "out": "16:20"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6097a730832c99001eb2f132"
      },
      "totalTimes": "04:43",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "06:11",
          "out": "09:57"
        },
        {
          "in": "12:00",
          "out": "12:57"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6097b15e832c99001eb2f135"
      },
      "totalTimes": "07:33",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "14:27"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6097b18d832c99001eb2f137"
      },
      "totalTimes": "10:41",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "17:36"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6097c249832c99001eb2f139"
      },
      "totalTimes": "07:39",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:02"
        },
        {
          "in": "14:20",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6097dbea832c99001eb2f13b"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "09:56",
          "out": "13:58"
        },
        {
          "in": "16:20",
          "out": "19:59"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6097f81b832c99001eb2f140"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "11:56",
          "out": "16:00"
        },
        {
          "in": "17:54",
          "out": "22:00"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609807a3832c99001eb2f149"
      },
      "totalTimes": "07:00",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "13:02",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60981415832c99001eb2f14b"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "13:55",
          "out": "17:57"
        },
        {
          "in": "20:00",
          "out": "23:54"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60987b44832c99001eb2f15b"
      },
      "totalTimes": "10:49",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "21:16",
          "out": "08:05"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6098845d832c99001eb2f15d"
      },
      "totalTimes": "03:10",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "21:54",
          "out": "01:04"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6098a034832c99001eb2f160"
      },
      "totalTimes": "06:07",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "23:53",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6098f4af832c99001eb2f163"
      },
      "totalTimes": "06:15",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "05:54",
          "out": "12:09"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6098f57c832c99001eb2f165"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "05:57",
          "out": "10:00"
        },
        {
          "in": "12:00",
          "out": "16:10"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6098f6de832c99001eb2f168"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "10:08"
        },
        {
          "in": "12:08",
          "out": "16:08"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6098f702832c99001eb2f16a"
      },
      "totalTimes": "12:16",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:04",
          "out": "18:20"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60990138832c99001eb2f16c"
      },
      "totalTimes": "08:52",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:47",
          "out": "12:01"
        },
        {
          "in": "13:58",
          "out": "17:36"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6099022c832c99001eb2f16e"
      },
      "totalTimes": "08:37",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "11:08"
        },
        {
          "in": "12:54",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609902bb832c99001eb2f170"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "12:06"
        },
        {
          "in": "13:52",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60990336832c99001eb2f172"
      },
      "totalTimes": "11:27",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "18:23"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60990397832c99001eb2f174"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:01"
        },
        {
          "in": "13:02",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609903d4832c99001eb2f176"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609903ff832c99001eb2f178"
      },
      "totalTimes": "09:48",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:06"
        },
        {
          "in": "14:05",
          "out": "18:46"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60990406832c99001eb2f17a"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:04"
        },
        {
          "in": "13:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60990440832c99001eb2f17c"
      },
      "totalTimes": "10:40",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "17:40"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609904a2832c99001eb2f17e"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:02"
        },
        {
          "in": "13:01",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60990517832c99001eb2f180"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:06"
        },
        {
          "in": "14:05",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60990569832c99001eb2f182"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:07"
        },
        {
          "in": "14:04",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609905aa832c99001eb2f184"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:07"
        },
        {
          "in": "13:59",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60990687832c99001eb2f186"
      },
      "totalTimes": "08:30",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "14:40"
        },
        {
          "in": "18:00",
          "out": "19:00"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609906f7832c99001eb2f189"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "11:16"
        },
        {
          "in": "13:14",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609907c1832c99001eb2f18b"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "11:16"
        },
        {
          "in": "12:25",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609908a6832c99001eb2f18d"
      },
      "totalTimes": "09:33",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "12:27"
        },
        {
          "in": "13:01",
          "out": "17:26"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60990f6a832c99001eb2f18f"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "11:51"
        },
        {
          "in": "13:51",
          "out": "17:48"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609911cb832c99001eb2f191"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:58",
          "out": "13:01"
        },
        {
          "in": "15:14",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60991247832c99001eb2f193"
      },
      "totalTimes": "08:48",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:26"
        },
        {
          "in": "13:01",
          "out": "17:23"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609912a2832c99001eb2f195"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:01"
        },
        {
          "in": "14:04",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609913bd832c99001eb2f198"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:12"
        },
        {
          "in": "14:13",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6099148e832c99001eb2f19b"
      },
      "totalTimes": "10:34",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "08:10",
          "out": "11:29"
        },
        {
          "in": "13:06",
          "out": "20:21"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609915a6832c99001eb2f19d"
      },
      "totalTimes": "07:49",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "08:14",
          "out": "12:02"
        },
        {
          "in": "14:03",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6099191e832c99001eb2f19f"
      },
      "totalTimes": "09:53",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "08:29",
          "out": "18:22"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60992e22832c99001eb2f1a1"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:05"
        },
        {
          "in": "15:59",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6099301a832c99001eb2f1a4"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "10:07",
          "out": "14:05"
        },
        {
          "in": "16:01",
          "out": "20:20"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60994057832c99001eb2f1ae"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:03"
        },
        {
          "in": "13:05",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609940ee832c99001eb2f1b1"
      },
      "totalTimes": "09:20",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "11:19",
          "out": "15:57"
        },
        {
          "in": "17:57",
          "out": "22:39"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60994131832c99001eb2f1b3"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:03"
        },
        {
          "in": "14:04",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609965b1832c99001eb2f1cf"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "13:56",
          "out": "17:59"
        },
        {
          "in": "19:56",
          "out": "23:52"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "6099cfba832c99001eb2f202"
      },
      "totalTimes": "09:29",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "21:28",
          "out": "06:57"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6099d6e9832c99001eb2f204"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "21:59",
          "out": "06:04"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "6099efd4832c99001eb2f207"
      },
      "totalTimes": "06:17",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "23:45",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609a0264832c99001eb2f20b"
      },
      "totalTimes": "10:28",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "01:04",
          "out": "03:42"
        },
        {
          "in": "12:13",
          "out": "16:04"
        },
        {
          "in": "18:04",
          "out": "22:03"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "609a057f832c99001eb2f20d"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "11:00"
        },
        {
          "in": "13:01",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "609a47a9832c99001eb2f211"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:04"
        },
        {
          "in": "12:15",
          "out": "15:57"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a47d6832c99001eb2f213"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:14"
        },
        {
          "in": "12:07",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a4949832c99001eb2f217"
      },
      "totalTimes": "08:48",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:07",
          "out": "11:28"
        },
        {
          "in": "13:26",
          "out": "16:53"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a4ff7832c99001eb2f219"
      },
      "totalTimes": "09:00",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:35",
          "out": "13:10"
        },
        {
          "in": "14:47",
          "out": "17:12"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a5124832c99001eb2f21b"
      },
      "totalTimes": "23:25",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:19"
        },
        {
          "in": "11:59",
          "out": "16:54"
        },
        {
          "in": "16:54",
          "out": "07:06"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "609a53d0832c99001eb2f21d"
      },
      "totalTimes": "11:15",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "18:07"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609a53f8832c99001eb2f21f"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "12:02"
        },
        {
          "in": "13:52",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a54ad832c99001eb2f221"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:03"
        },
        {
          "in": "12:57",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a54cd832c99001eb2f223"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a54df832c99001eb2f225"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:00"
        },
        {
          "in": "13:05",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a5546832c99001eb2f228"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "13:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a55a9832c99001eb2f22a"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a55c1832c99001eb2f22c"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:40"
        },
        {
          "in": "14:47",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a55cd832c99001eb2f22e"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "609a56cf832c99001eb2f230"
      },
      "totalTimes": "09:37",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:53"
        },
        {
          "in": "12:59",
          "out": "17:48"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a56ef832c99001eb2f232"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:04"
        },
        {
          "in": "13:02",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a5722832c99001eb2f234"
      },
      "totalTimes": "04:10",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:16"
        },
        {
          "in": "16:57",
          "out": "16:57"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a578b832c99001eb2f236"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:06"
        },
        {
          "in": "14:01",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a57e3832c99001eb2f238"
      },
      "totalTimes": "08:29",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:06"
        },
        {
          "in": "13:56",
          "out": "17:28"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a581f832c99001eb2f23a"
      },
      "totalTimes": "07:42",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:04"
        },
        {
          "in": "13:15",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a582b832c99001eb2f23c"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:12"
        },
        {
          "in": "12:22",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a614b832c99001eb2f23e"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "11:51"
        },
        {
          "in": "13:52",
          "out": "17:45"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a6233832c99001eb2f241"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:53",
          "out": "12:40"
        },
        {
          "in": "13:36",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a640b832c99001eb2f243"
      },
      "totalTimes": "22:01",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "08:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a6426832c99001eb2f245"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:02"
        },
        {
          "in": "14:10",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a643f832c99001eb2f247"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:39"
        },
        {
          "in": "13:18",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a68b9832c99001eb2f249"
      },
      "totalTimes": "07:43",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "08:21",
          "out": "13:01"
        },
        {
          "in": "14:59",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a6a76832c99001eb2f24b"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "08:28",
          "out": "12:45"
        },
        {
          "in": "14:25",
          "out": "17:54"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a7fd5832c99001eb2f24d"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:00"
        },
        {
          "in": "16:00",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a810e832c99001eb2f250"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "10:05",
          "out": "14:02"
        },
        {
          "in": "16:03",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609a9bfa832c99001eb2f260"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        },
        {
          "in": "13:01",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "609a9c54832c99001eb2f264"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:01"
        },
        {
          "in": "14:06",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "609a9c7c832c99001eb2f266"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:05"
        },
        {
          "in": "14:03",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ab69c832c99001eb2f280"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "13:53",
          "out": "17:55"
        },
        {
          "in": "19:58",
          "out": "23:55"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609b296b832c99001eb2f2b6"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "22:03",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609b29a3832c99001eb2f2b9"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "22:04",
          "out": "06:20"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609b4365832c99001eb2f2bb"
      },
      "totalTimes": "06:03",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "23:54",
          "out": "05:57"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609b989f832c99001eb2f2bf"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:13"
        },
        {
          "in": "12:00",
          "out": "15:56"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609b9969832c99001eb2f2c2"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:05"
        },
        {
          "in": "12:00",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609b9974832c99001eb2f2c4"
      },
      "totalTimes": "08:56",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:33"
        },
        {
          "in": "12:12",
          "out": "16:36"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609b9b16832c99001eb2f2c6"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "10:00"
        },
        {
          "in": "11:53",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba508832c99001eb2f2c9"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "11:02"
        },
        {
          "in": "12:59",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba571832c99001eb2f2cb"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "12:00"
        },
        {
          "in": "13:55",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba58a832c99001eb2f2cd"
      },
      "totalTimes": "13:03",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "19:56"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ba5a8832c99001eb2f2cf"
      },
      "totalTimes": "10:29",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "17:22"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ba6bf832c99001eb2f2d1"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "12:57",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba709832c99001eb2f2d3"
      },
      "totalTimes": "11:25",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "18:24"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ba70f832c99001eb2f2d5"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        },
        {
          "in": "12:55",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba7c3832c99001eb2f2d7"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:00"
        },
        {
          "in": "14:02",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba813832c99001eb2f2d9"
      },
      "totalTimes": "13:16",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "20:20"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ba829832c99001eb2f2db"
      },
      "totalTimes": "07:19",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "10:28"
        },
        {
          "in": "13:09",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba82a832c99001eb2f2dd"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:11"
        },
        {
          "in": "13:09",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba856832c99001eb2f2df"
      },
      "totalTimes": "11:38",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "18:43"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ba8b1832c99001eb2f2e1"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:01"
        },
        {
          "in": "14:07",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba8b2832c99001eb2f2e3"
      },
      "totalTimes": "12:31",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "19:37"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ba8ea832c99001eb2f2e6"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:02"
        },
        {
          "in": "14:06",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba918832c99001eb2f2e8"
      },
      "totalTimes": "09:33",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "11:13"
        },
        {
          "in": "12:33",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba937832c99001eb2f2ea"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:09"
        },
        {
          "in": "13:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609ba9bc832c99001eb2f2ec"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "13:56"
        },
        {
          "in": "16:00",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609baa64832c99001eb2f2ee"
      },
      "totalTimes": "08:32",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:26"
        },
        {
          "in": "13:58",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bad25832c99001eb2f2f0"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:25",
          "out": "11:15"
        },
        {
          "in": "13:27",
          "out": "17:23"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bb27c832c99001eb2f2f2"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "11:48"
        },
        {
          "in": "13:51",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bb289832c99001eb2f2f4"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:04"
        },
        {
          "in": "13:05",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609bb2e3832c99001eb2f2f6"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:10"
        },
        {
          "in": "13:58",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609bb301832c99001eb2f2f7"
      },
      "totalTimes": "07:43",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:05"
        },
        {
          "in": "14:12",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "609bb418832c99001eb2f2f8"
      },
      "totalTimes": "08:51",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "07:55",
          "out": "12:28"
        },
        {
          "in": "13:07",
          "out": "17:25"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bb5b7832c99001eb2f2fb"
      },
      "totalTimes": "08:34",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "18:35"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bb653832c99001eb2f2fd"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "13:11"
        },
        {
          "in": "14:57",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bb728832c99001eb2f2ff"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "12:10"
        },
        {
          "in": "14:08",
          "out": "18:06"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bbd07832c99001eb2f301"
      },
      "totalTimes": "09:30",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "08:33",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609bd13c832c99001eb2f303"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:00"
        },
        {
          "in": "16:00",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bd153832c99001eb2f305"
      },
      "totalTimes": "08:42",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:07"
        },
        {
          "in": "16:07",
          "out": "20:42"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609bd238832c99001eb2f308"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:04"
        },
        {
          "in": "16:05",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609be638832c99001eb2f314"
      },
      "totalTimes": "10:35",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "11:29",
          "out": "22:04"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609c5e36832c99001eb2f35c"
      },
      "totalTimes": "10:00",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "20:01",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609c7b84832c99001eb2f363"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "22:06",
          "out": "06:06"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609c831d832c99001eb2f365"
      },
      "totalTimes": "07:27",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "22:38",
          "out": "06:05"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ce78d832c99001eb2f367"
      },
      "totalTimes": "11:52",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "05:47",
          "out": "17:39"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609cea1b832c99001eb2f369"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:27"
        },
        {
          "in": "12:28",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cea57832c99001eb2f36b"
      },
      "totalTimes": "10:04",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609cea96832c99001eb2f36d"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:08"
        },
        {
          "in": "12:00",
          "out": "16:12"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf329832c99001eb2f372"
      },
      "totalTimes": "08:27",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "06:36",
          "out": "11:27"
        },
        {
          "in": "14:01",
          "out": "17:37"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf6a5832c99001eb2f374"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "12:01"
        },
        {
          "in": "14:30",
          "out": "17:31"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf6a8832c99001eb2f376"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "11:59"
        },
        {
          "in": "13:51",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf6db832c99001eb2f378"
      },
      "totalTimes": "08:22",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:10"
        },
        {
          "in": "12:57",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf857832c99001eb2f37a"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:05"
        },
        {
          "in": "13:18",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf884832c99001eb2f37c"
      },
      "totalTimes": "10:01",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609cf8a2832c99001eb2f37e"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:01"
        },
        {
          "in": "12:59",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf8e8832c99001eb2f380"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:05"
        },
        {
          "in": "13:08",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf982832c99001eb2f382"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:04"
        },
        {
          "in": "14:01",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cf9d0832c99001eb2f384"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:00"
        },
        {
          "in": "13:57",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cfa1f832c99001eb2f386"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:06"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "609cfaef832c99001eb2f388"
      },
      "totalTimes": "00:24",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "07:33"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609cfb68832c99001eb2f38a"
      },
      "totalTimes": "08:52",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:06"
        },
        {
          "in": "13:03",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cfbd8832c99001eb2f38c"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:11"
        },
        {
          "in": "14:06",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cfbe8832c99001eb2f38e"
      },
      "totalTimes": "04:04",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "11:18"
        },
        {
          "in": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "609cfc23832c99001eb2f390"
      },
      "totalTimes": "08:27",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:16"
        },
        {
          "in": "13:52",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cfc2c832c99001eb2f392"
      },
      "totalTimes": "06:24",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "12:11"
        },
        {
          "in": "15:42",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cfd67832c99001eb2f394"
      },
      "totalTimes": "08:44",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "11:28"
        },
        {
          "in": "13:29",
          "out": "18:05"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609cff66832c99001eb2f396"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:28",
          "out": "11:03"
        },
        {
          "in": "13:04",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d02c2832c99001eb2f398"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:43",
          "out": "11:50"
        },
        {
          "in": "13:52",
          "out": "17:45"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d046b832c99001eb2f39a"
      },
      "totalTimes": "07:10",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "08:02"
        },
        {
          "in": "10:45",
          "out": "16:51"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d049d832c99001eb2f39b"
      },
      "totalTimes": "07:35",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:25",
          "out": "12:03"
        },
        {
          "in": "14:04",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609d06f7832c99001eb2f39c"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:06"
        },
        {
          "in": "14:02",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d07e5832c99001eb2f39e"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "12:06"
        },
        {
          "in": "14:11",
          "out": "18:13"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d0cec832c99001eb2f3a0"
      },
      "totalTimes": "07:33",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "08:26",
          "out": "12:35"
        },
        {
          "in": "14:39",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d10b5832c99001eb2f3a2"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "08:42",
          "out": "13:01"
        },
        {
          "in": "14:24",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d23b1832c99001eb2f3a4"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:01"
        },
        {
          "in": "16:01",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d2429832c99001eb2f3a6"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "10:05",
          "out": "13:57"
        },
        {
          "in": "16:04",
          "out": "19:53"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d4058832c99001eb2f3b9"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "12:06",
          "out": "17:50"
        },
        {
          "in": "19:34",
          "out": "22:01"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609d59ea832c99001eb2f3cd"
      },
      "totalTimes": "15:00",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:11"
        },
        {
          "in": "13:58",
          "out": "00:00"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "609d8c98832c99001eb2f3ed"
      },
      "totalTimes": "13:22",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "17:31",
          "out": "06:53"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609dadb8832c99001eb2f3fb"
      },
      "totalTimes": "10:13",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "19:52",
          "out": "06:05"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609dcb39832c99001eb2f3ff"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "21:58",
          "out": "06:11"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609dd173832c99001eb2f402"
      },
      "totalTimes": "07:43",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "22:25",
          "out": "06:08"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609e3be8832c99001eb2f404"
      },
      "totalTimes": "10:03",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609e3c0b832c99001eb2f406"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "11:31"
        },
        {
          "in": "13:24",
          "out": "15:57"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e3c3d832c99001eb2f408"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:01"
        },
        {
          "in": "12:00",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e3d73832c99001eb2f40b"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:05"
        },
        {
          "in": "12:07",
          "out": "15:58"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e47e5832c99001eb2f40f"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "11:00"
        },
        {
          "in": "13:02",
          "out": "16:44"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "609e4841832c99001eb2f411"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:03"
        },
        {
          "in": "13:22",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e489e832c99001eb2f414"
      },
      "totalTimes": "07:26",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "12:06"
        },
        {
          "in": "14:19",
          "out": "16:32"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "609e4933832c99001eb2f416"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:00"
        },
        {
          "in": "13:53",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e496a832c99001eb2f419"
      },
      "totalTimes": "04:09",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:05"
        },
        {
          "in": "17:00",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e49ce832c99001eb2f41b"
      },
      "totalTimes": "04:18",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:16"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609e4a00832c99001eb2f41d"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:00"
        },
        {
          "in": "12:59",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4a2a832c99001eb2f41f"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:00"
        },
        {
          "in": "13:56",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4b5c832c99001eb2f421"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:02"
        },
        {
          "in": "13:12",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4b6e832c99001eb2f423"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:06"
        },
        {
          "in": "12:26",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4bc9832c99001eb2f425"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:12"
        },
        {
          "in": "13:03",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4cca832c99001eb2f427"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "12:05"
        },
        {
          "in": "14:02",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4cee832c99001eb2f429"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "12:02"
        },
        {
          "in": "14:01",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4d48832c99001eb2f42b"
      },
      "totalTimes": "09:12",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "11:58"
        },
        {
          "in": "13:12",
          "out": "17:39"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4dd4832c99001eb2f42d"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "12:03"
        },
        {
          "in": "14:05",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4ded832c99001eb2f42f"
      },
      "totalTimes": "10:35",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:16",
          "out": "17:51"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609e4e27832c99001eb2f431"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "12:04"
        },
        {
          "in": "13:56",
          "out": "17:15"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4e37832c99001eb2f433"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "12:05"
        },
        {
          "in": "14:01",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4f99832c99001eb2f435"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:23",
          "out": "11:04"
        },
        {
          "in": "13:05",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e4ffb832c99001eb2f437"
      },
      "totalTimes": "07:53",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:24",
          "out": "13:35"
        },
        {
          "in": "15:28",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e50a2832c99001eb2f43a"
      },
      "totalTimes": "09:34",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:27",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609e5223832c99001eb2f43d"
      },
      "totalTimes": "08:31",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:34",
          "out": "12:05"
        },
        {
          "in": "13:04",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e54ce832c99001eb2f43f"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:45",
          "out": "11:49"
        },
        {
          "in": "13:50",
          "out": "17:51"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e585b832c99001eb2f441"
      },
      "totalTimes": "09:49",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "17:49"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609e5872832c99001eb2f443"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e5b0c832c99001eb2f445"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "08:12",
          "out": "12:12"
        },
        {
          "in": "14:09",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e5c22832c99001eb2f447"
      },
      "totalTimes": "10:43",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "08:16",
          "out": "15:06"
        },
        {
          "in": "16:13",
          "out": "20:06"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e7459832c99001eb2f449"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:00"
        },
        {
          "in": "16:00",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e7662832c99001eb2f44d"
      },
      "totalTimes": "08:36",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "10:08",
          "out": "14:19"
        },
        {
          "in": "16:09",
          "out": "20:34"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e787a832c99001eb2f44f"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "10:17",
          "out": "14:17"
        },
        {
          "in": "16:00",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609e8ba3832c99001eb2f45a"
      },
      "totalTimes": "09:43",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "11:39",
          "out": "15:55"
        },
        {
          "in": "17:50",
          "out": "23:17"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609eab3b832c99001eb2f477"
      },
      "totalTimes": "07:49",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "13:54",
          "out": "17:53"
        },
        {
          "in": "20:02",
          "out": "23:52"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609eacae832c99001eb2f47c"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:05"
        },
        {
          "in": "13:58",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "609eacfe832c99001eb2f480"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "12:20"
        },
        {
          "in": "14:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "609f1b32832c99001eb2f4b2"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "21:52",
          "out": "06:07"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f1db9832c99001eb2f4b4"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "22:02",
          "out": "06:21"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f35c6832c99001eb2f4b7"
      },
      "totalTimes": "06:13",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "23:45",
          "out": "05:58"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f897b832c99001eb2f4ba"
      },
      "totalTimes": "14:47",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "05:42",
          "out": "10:00"
        },
        {
          "in": "11:59",
          "out": "22:28"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609f8d30832c99001eb2f4bd"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:03"
        },
        {
          "in": "12:01",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609f8d51832c99001eb2f4bf"
      },
      "totalTimes": "10:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "15:58"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f8ef4832c99001eb2f4c1"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:05"
        },
        {
          "in": "14:01",
          "out": "14:01"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609f983f832c99001eb2f4c5"
      },
      "totalTimes": "04:17",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "06:45",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f98dc832c99001eb2f4c7"
      },
      "totalTimes": "05:16",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "06:48",
          "out": "12:04"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9961832c99001eb2f4c9"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "06:50",
          "out": "14:37"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9a08832c99001eb2f4cb"
      },
      "totalTimes": "04:08",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:01"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9a42832c99001eb2f4cd"
      },
      "totalTimes": "05:06",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "12:00"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9a96832c99001eb2f4cf"
      },
      "totalTimes": "04:05",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9b84832c99001eb2f4d1"
      },
      "totalTimes": "04:03",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9bde832c99001eb2f4d3"
      },
      "totalTimes": "04:16",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:17"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9c10832c99001eb2f4d5"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:03"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9c7e832c99001eb2f4d7"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:04"
        },
        {
          "in": "12:20",
          "out": "16:17"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609f9d0a832c99001eb2f4d9"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:06"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9d1f832c99001eb2f4db"
      },
      "totalTimes": "03:56",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9d6f832c99001eb2f4dd"
      },
      "totalTimes": "04:03",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:10"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9df8832c99001eb2f4df"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:10"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9e7f832c99001eb2f4e1"
      },
      "totalTimes": "04:06",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "11:18"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9e8a832c99001eb2f4e3"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "11:31"
        },
        {
          "in": "13:37",
          "out": "17:37"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609f9e9b832c99001eb2f4e5"
      },
      "totalTimes": "06:24",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "13:36"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609f9eb4832c99001eb2f4e7"
      },
      "totalTimes": "10:25",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "17:38"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609fa2f3832c99001eb2f4e9"
      },
      "totalTimes": "04:11",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "11:19"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "609fa700832c99001eb2f4ea"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "11:48"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609fa756832c99001eb2f4ec"
      },
      "totalTimes": "04:51",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "12:40"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609fa7b1832c99001eb2f4ee"
      },
      "totalTimes": "04:11",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "07:51",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609faa0a832c99001eb2f4f0"
      },
      "totalTimes": "04:03",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:04"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609fada4832c99001eb2f4f2"
      },
      "totalTimes": "03:50",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "08:16",
          "out": "12:06"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609fc5e4832c99001eb2f4f4"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:01"
        },
        {
          "in": "16:02",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609fc638832c99001eb2f4f7"
      },
      "totalTimes": "09:58",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "19:59"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609fc654832c99001eb2f4f9"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:02"
        },
        {
          "in": "16:03",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609fe1e1832c99001eb2f50b"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "11:59",
          "out": "16:04"
        },
        {
          "in": "17:57",
          "out": "22:03"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "609fe513832c99001eb2f513"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "12:13",
          "out": "16:13"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "609ffc8c832c99001eb2f519"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "13:53",
          "out": "17:54"
        },
        {
          "in": "19:53",
          "out": "23:54"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a06cca832c99001eb2f52f"
      },
      "totalTimes": "08:22",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "21:52",
          "out": "06:14"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a06dad832c99001eb2f531"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "21:56",
          "out": "06:04"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a088f6832c99001eb2f535"
      },
      "totalTimes": "06:11",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "23:52",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a0e02e832c99001eb2f53a"
      },
      "totalTimes": "05:04",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "06:04",
          "out": "10:05"
        },
        {
          "in": "11:58",
          "out": "13:01"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a0e4c7832c99001eb2f53d"
      },
      "totalTimes": "03:35",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "06:24",
          "out": "09:59"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a0ebd1832c99001eb2f53f"
      },
      "totalTimes": "06:13",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "13:07"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a0f1ab832c99001eb2f541"
      },
      "totalTimes": "10:48",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "18:07"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a0fc64832c99001eb2f543"
      },
      "totalTimes": "09:56",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "08:05",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a130be832c99001eb2f546"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "11:48",
          "out": "17:54"
        },
        {
          "in": "19:58",
          "out": "21:58"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a14187832c99001eb2f549"
      },
      "totalTimes": "06:03",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "13:00",
          "out": "19:03"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a1428d832c99001eb2f54c"
      },
      "totalTimes": "07:00",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "13:04",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a14da8832c99001eb2f54f"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "13:51",
          "out": "17:54"
        },
        {
          "in": "19:53",
          "out": "23:57"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a1563c832c99001eb2f551"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "06:12",
          "out": "14:28"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60a1beed832c99001eb2f55b"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "21:55",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a1bf10832c99001eb2f55d"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "21:55",
          "out": "06:07"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a1db37832c99001eb2f560"
      },
      "totalTimes": "06:05",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "23:55",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a2304c832c99001eb2f563"
      },
      "totalTimes": "11:06",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "17:04"
        },
        {
          "in": "17:04",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a2311b832c99001eb2f567"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "10:09"
        },
        {
          "in": "12:15",
          "out": "16:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23850832c99001eb2f56a"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:33",
          "out": "14:14"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a2392f832c99001eb2f56c"
      },
      "totalTimes": "09:07",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "15:15"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a2396f832c99001eb2f56d"
      },
      "totalTimes": "08:24",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:37",
          "out": "11:00"
        },
        {
          "in": "13:02",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a23cfa832c99001eb2f56f"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:59"
        },
        {
          "in": "13:54",
          "out": "16:57"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23db0832c99001eb2f571"
      },
      "totalTimes": "08:33",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "17:29"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23e40832c99001eb2f573"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:04"
        },
        {
          "in": "13:57",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23e6e832c99001eb2f575"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:01"
        },
        {
          "in": "12:56",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23e98832c99001eb2f577"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:02"
        },
        {
          "in": "12:58",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23ed7832c99001eb2f579"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:03"
        },
        {
          "in": "14:05",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23eed832c99001eb2f57b"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:06"
        },
        {
          "in": "12:57",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23f4b832c99001eb2f57d"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:04"
        },
        {
          "in": "12:57",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23fba832c99001eb2f57f"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:07"
        },
        {
          "in": "14:06",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a23fc8832c99001eb2f581"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:13"
        },
        {
          "in": "13:03",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a2408d832c99001eb2f583"
      },
      "totalTimes": "04:13",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "11:21"
        },
        {
          "in": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a240d6832c99001eb2f585"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:08"
        },
        {
          "in": "13:05",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a24100832c99001eb2f587"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:10"
        },
        {
          "in": "13:07",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a2417f832c99001eb2f589"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "11:14"
        },
        {
          "in": "12:26",
          "out": "16:24"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a241ac832c99001eb2f58b"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a241cb832c99001eb2f58d"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:03"
        },
        {
          "in": "14:05",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a24259832c99001eb2f58f"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "11:08"
        },
        {
          "in": "13:15",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a2436a832c99001eb2f591"
      },
      "totalTimes": "08:46",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:20",
          "out": "11:13"
        },
        {
          "in": "13:03",
          "out": "17:56"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a249e0832c99001eb2f593"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "11:49"
        },
        {
          "in": "13:48",
          "out": "17:57"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a24a45832c99001eb2f595"
      },
      "totalTimes": "08:54",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "12:05"
        },
        {
          "in": "13:20",
          "out": "17:58"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a24d1c832c99001eb2f597"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:01"
        },
        {
          "in": "14:01",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a24d82832c99001eb2f599"
      },
      "totalTimes": "08:26",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "13:02"
        },
        {
          "in": "14:50",
          "out": "18:17"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a24dae832c99001eb2f59b"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:04"
        },
        {
          "in": "14:07",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a2530c832c99001eb2f59d"
      },
      "totalTimes": "05:33",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "08:27",
          "out": "14:00"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60a2694e832c99001eb2f59f"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "10:02",
          "out": "14:06"
        },
        {
          "in": "16:00",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a26a04832c99001eb2f5a1"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "10:05",
          "out": "14:06"
        },
        {
          "in": "15:59",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a276d1832c99001eb2f5a4"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a276eb832c99001eb2f5a5"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a276f0832c99001eb2f5a6"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a276f3832c99001eb2f5a7"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a276f7832c99001eb2f5a8"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a276fa832c99001eb2f5a9"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a276fd832c99001eb2f5aa"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60a281b0832c99001eb2f5b6"
      },
      "totalTimes": "12:52",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "11:46",
          "out": "00:38"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a2864c832c99001eb2f5c2"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:01"
        },
        {
          "in": "14:06",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a286d0832c99001eb2f5c4"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:04"
        },
        {
          "in": "13:56",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a2a3c3832c99001eb2f5de"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "14:11",
          "out": "18:00"
        },
        {
          "in": "19:45",
          "out": "23:52"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a2a722832c99001eb2f5e1"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619827200000"
        }
      },
      "times": [
        {
          "in": "Feriado",
          "out": "Feriado"
        },
        {
          "in": "Feriado",
          "out": "Feriado"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2a730832c99001eb2f5e2"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2a74f832c99001eb2f5e3"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:03"
        },
        {
          "in": "00:00",
          "out": "00:00"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2a76b832c99001eb2f5e4"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2a787832c99001eb2f5e5"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:01"
        },
        {
          "in": "14:04",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2a7b0832c99001eb2f5e6"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "Folga",
          "out": "Folga"
        },
        {
          "in": "Folga",
          "out": "Folga"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b1f9832c99001eb2f5e8"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619654400000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b1ff832c99001eb2f5e9"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619740800000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b218832c99001eb2f5ea"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b21e832c99001eb2f5eb"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1619913600000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b220832c99001eb2f5ec"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620000000000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b223832c99001eb2f5ed"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620086400000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b227832c99001eb2f5ee"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620172800000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b22a832c99001eb2f5ef"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620259200000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b22c832c99001eb2f5f0"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620345600000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b22f832c99001eb2f5f1"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620432000000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b231832c99001eb2f5f2"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620518400000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b233832c99001eb2f5f3"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620604800000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b23b832c99001eb2f5f4"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620691200000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b23b832c99001eb2f5f5"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620777600000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b23d832c99001eb2f5f6"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620864000000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b23f832c99001eb2f5f7"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1620950400000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b242832c99001eb2f5f8"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621036800000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b248832c99001eb2f5fa"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621123200000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b24b832c99001eb2f5fb"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b24e832c99001eb2f5fc"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b251832c99001eb2f5fd"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b254832c99001eb2f5fe"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b256832c99001eb2f5ff"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b259832c99001eb2f600"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b25b832c99001eb2f601"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b25e832c99001eb2f602"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b260832c99001eb2f603"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b266832c99001eb2f604"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a2b268832c99001eb2f605"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        },
        {
          "in": "Aviso prévio",
          "out": "Aviso prévio"
        }
      ],
      "userId": {
        "$oid": "6059ef021d006d001d8ef53e"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a30ba8832c99001eb2f628"
      },
      "totalTimes": "08:50",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "21:34",
          "out": "06:24"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a31237832c99001eb2f62a"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "22:02",
          "out": "06:05"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a32ac1832c99001eb2f62c"
      },
      "totalTimes": "06:13",
      "date": {
        "$date": {
          "$numberLong": "1621209600000"
        }
      },
      "times": [
        {
          "in": "23:47",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a3819c832c99001eb2f630"
      },
      "totalTimes": "08:29",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "11:03"
        },
        {
          "in": "13:04",
          "out": "16:28"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a38258832c99001eb2f633"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:03"
        },
        {
          "in": "12:00",
          "out": "16:09"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a383a9832c99001eb2f636"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:03"
        },
        {
          "in": "12:02",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a38499832c99001eb2f638"
      },
      "totalTimes": "08:59",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "06:10",
          "out": "10:05"
        },
        {
          "in": "12:06",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a38e8c832c99001eb2f63b"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:59"
        },
        {
          "in": "13:49",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a38eae832c99001eb2f63d"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:03"
        },
        {
          "in": "12:54",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a38f1e832c99001eb2f63f"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:01"
        },
        {
          "in": "13:56",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39051832c99001eb2f641"
      },
      "totalTimes": "10:10",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:25"
        },
        {
          "in": "14:24",
          "out": "19:09"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39069832c99001eb2f643"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:02"
        },
        {
          "in": "13:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a3909a832c99001eb2f645"
      },
      "totalTimes": "09:21",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:10"
        },
        {
          "in": "13:13",
          "out": "17:26"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a390ba832c99001eb2f647"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:11"
        },
        {
          "in": "14:15",
          "out": "17:25"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a390bc832c99001eb2f649"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        },
        {
          "in": "14:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a390cb832c99001eb2f64b"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        },
        {
          "in": "14:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a390e1832c99001eb2f64d"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:03"
        },
        {
          "in": "12:58",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a390e7832c99001eb2f64f"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:05"
        },
        {
          "in": "13:02",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39116832c99001eb2f651"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:06"
        },
        {
          "in": "14:05",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39143832c99001eb2f653"
      },
      "totalTimes": "09:28",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:12"
        },
        {
          "in": "13:10",
          "out": "18:30"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39195832c99001eb2f655"
      },
      "totalTimes": "07:51",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:05"
        },
        {
          "in": "13:10",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39206832c99001eb2f657"
      },
      "totalTimes": "10:02",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a39366832c99001eb2f659"
      },
      "totalTimes": "08:25",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "11:38"
        },
        {
          "in": "13:35",
          "out": "17:35"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39698832c99001eb2f65b"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:06"
        },
        {
          "in": "14:11",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a396be832c99001eb2f65c"
      },
      "totalTimes": "08:26",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:15"
        },
        {
          "in": "13:59",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a396e9832c99001eb2f65e"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:02"
        },
        {
          "in": "13:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60a39718832c99001eb2f65f"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a3971c832c99001eb2f660"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a3971f832c99001eb2f661"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a39722832c99001eb2f662"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a39726832c99001eb2f663"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a3976a832c99001eb2f664"
      },
      "totalTimes": "09:13",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:31",
          "out": "12:26"
        },
        {
          "in": "14:13",
          "out": "18:31"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a3979f832c99001eb2f666"
      },
      "totalTimes": "05:14",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:31",
          "out": "12:45"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a39ba4832c99001eb2f668"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "07:49",
          "out": "11:54"
        },
        {
          "in": "13:51",
          "out": "17:52"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39e96832c99001eb2f66a"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:20"
        },
        {
          "in": "13:49",
          "out": "17:37"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a39f40832c99001eb2f66c"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:04"
        },
        {
          "in": "14:06",
          "out": "18:06"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a3a3e8832c99001eb2f66e"
      },
      "totalTimes": "09:37",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "08:24",
          "out": "14:01"
        },
        {
          "in": "14:01",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a3a7d4832c99001eb2f670"
      },
      "totalTimes": "06:41",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "08:41",
          "out": "13:50"
        },
        {
          "in": "16:32",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a3ba49832c99001eb2f672"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:04"
        },
        {
          "in": "16:06",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a3ba52832c99001eb2f675"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "13:56"
        },
        {
          "in": "15:53",
          "out": "19:56"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a3ba7b832c99001eb2f677"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:04"
        },
        {
          "in": "16:11",
          "out": "19:59"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a3d45a832c99001eb2f685"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60a3d5df832c99001eb2f687"
      },
      "totalTimes": "10:02",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "11:57",
          "out": "21:59"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a44700832c99001eb2f6d2"
      },
      "totalTimes": "10:00",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "20:00",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a45f43832c99001eb2f6d5"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "21:43",
          "out": "05:58"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a462bf832c99001eb2f6d7"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621296000000"
        }
      },
      "times": [
        {
          "in": "21:58",
          "out": "06:09"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a4d337832c99001eb2f6db"
      },
      "totalTimes": "10:07",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "16:05"
        },
        {
          "in": "16:05",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4d340832c99001eb2f6dd"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "05:58",
          "out": "10:40"
        },
        {
          "in": "12:45",
          "out": "16:07"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60a4d35f832c99001eb2f6df"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:02"
        },
        {
          "in": "12:00",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4d375832c99001eb2f6e1"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:02"
        },
        {
          "in": "11:58",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4d458832c99001eb2f6e4"
      },
      "totalTimes": "09:32",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "13:01"
        },
        {
          "in": "15:01",
          "out": "17:35"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4dfef832c99001eb2f6e7"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "12:00"
        },
        {
          "in": "13:54",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e058832c99001eb2f6e9"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:04"
        },
        {
          "in": "12:57",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e0b1832c99001eb2f6eb"
      },
      "totalTimes": "10:11",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a4e10b832c99001eb2f6ed"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:02"
        },
        {
          "in": "13:05",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e146832c99001eb2f6ef"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:00"
        },
        {
          "in": "13:10",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e17e832c99001eb2f6f1"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:09"
        },
        {
          "in": "13:03",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e283832c99001eb2f6f3"
      },
      "totalTimes": "08:23",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:16"
        },
        {
          "in": "13:06",
          "out": "17:16"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e28c832c99001eb2f6f5"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:04"
        },
        {
          "in": "14:06",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e29b832c99001eb2f6f7"
      },
      "totalTimes": "09:40",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:04"
        },
        {
          "in": "13:47",
          "out": "18:27"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e2a0832c99001eb2f6f9"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:05"
        },
        {
          "in": "14:09",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60a4e2b0832c99001eb2f6fb"
      },
      "totalTimes": "10:03",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a4e2c3832c99001eb2f6fd"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:00"
        },
        {
          "in": "13:54",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e2c5832c99001eb2f6ff"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:04"
        },
        {
          "in": "14:04",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e2c8832c99001eb2f701"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:05"
        },
        {
          "in": "13:09",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e4c3832c99001eb2f703"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:20"
        },
        {
          "in": "14:01",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e536832c99001eb2f705"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "11:13"
        },
        {
          "in": "13:04",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4e622832c99001eb2f707"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a4e676832c99001eb2f708"
      },
      "totalTimes": "07:21",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:00"
        },
        {
          "in": "13:45",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60a4e7a9832c99001eb2f709"
      },
      "totalTimes": "07:31",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:25",
          "out": "11:01"
        },
        {
          "in": "13:10",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4ec29832c99001eb2f70b"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:44",
          "out": "11:47"
        },
        {
          "in": "13:49",
          "out": "17:57"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 7
    },{
      "_id": {
        "$oid": "60a4ed92832c99001eb2f70d"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "07:50",
          "out": "12:04"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4f020832c99001eb2f70f"
      },
      "totalTimes": "10:01",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:04"
        },
        {
          "in": "14:03",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4f052832c99001eb2f711"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "11:12"
        },
        {
          "in": "13:04",
          "out": "18:08"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4f166832c99001eb2f713"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "12:10"
        },
        {
          "in": "14:09",
          "out": "18:08"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a4f7b6832c99001eb2f715"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "08:34",
          "out": "13:32"
        },
        {
          "in": "14:58",
          "out": "18:07"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a50c2b832c99001eb2f717"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:03"
        },
        {
          "in": "16:01",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a5139a832c99001eb2f71b"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "10:33",
          "out": "13:54"
        },
        {
          "in": "15:31",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a522a2832c99001eb2f727"
      },
      "totalTimes": "08:28",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "11:37",
          "out": "17:01"
        },
        {
          "in": "18:59",
          "out": "22:03"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a59815832c99001eb2f773"
      },
      "totalTimes": "10:07",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "19:58",
          "out": "06:05"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a5b02b832c99001eb2f778"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "21:41",
          "out": "05:59"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a5b4fe832c99001eb2f77a"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1621382400000"
        }
      },
      "times": [
        {
          "in": "22:01",
          "out": "06:16"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a624d8832c99001eb2f77d"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:01"
        },
        {
          "in": "12:00",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a6265f832c99001eb2f781"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:00"
        },
        {
          "in": "12:02",
          "out": "16:12"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a62674832c99001eb2f783"
      },
      "totalTimes": "07:45",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:03"
        },
        {
          "in": "12:15",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a62723832c99001eb2f785"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "11:07"
        },
        {
          "in": "12:49",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a62e4a832c99001eb2f788"
      },
      "totalTimes": "07:38",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:39",
          "out": "14:17"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a6300d832c99001eb2f78a"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:46",
          "out": "11:00"
        },
        {
          "in": "13:02",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a6313f832c99001eb2f78c"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "11:59"
        },
        {
          "in": "14:05",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63197832c99001eb2f78e"
      },
      "totalTimes": "08:25",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:02"
        },
        {
          "in": "12:53",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a631e1832c99001eb2f790"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:07"
        },
        {
          "in": "13:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a631fa832c99001eb2f792"
      },
      "totalTimes": "11:02",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "17:57"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a6323b832c99001eb2f794"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:01"
        },
        {
          "in": "13:53",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a633a4832c99001eb2f796"
      },
      "totalTimes": "07:24",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:03"
        },
        {
          "in": "13:50",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a6342b832c99001eb2f798"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:05"
        },
        {
          "in": "14:04",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63485832c99001eb2f79a"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:30"
        },
        {
          "in": "13:20",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a634f1832c99001eb2f79c"
      },
      "totalTimes": "08:10",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:10"
        },
        {
          "in": "13:58",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63519832c99001eb2f79e"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:04"
        },
        {
          "in": "14:04",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63532832c99001eb2f7a0"
      },
      "totalTimes": "01:22",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "08:30"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60a6353e832c99001eb2f7a2"
      },
      "totalTimes": "08:44",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:09"
        },
        {
          "in": "13:56",
          "out": "17:40"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63576832c99001eb2f7a4"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:00"
        },
        {
          "in": "13:57",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63588832c99001eb2f7a6"
      },
      "totalTimes": "10:42",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "17:52"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a6358a832c99001eb2f7a8"
      },
      "totalTimes": "12:24",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:19"
        },
        {
          "in": "14:19",
          "out": "21:34"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63594832c99001eb2f7aa"
      },
      "totalTimes": "07:40",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:58"
        },
        {
          "in": "14:06",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a635e7832c99001eb2f7ac"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:09"
        },
        {
          "in": "13:16",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a6363c832c99001eb2f7ae"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:16"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63e61832c99001eb2f7b1"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:48",
          "out": "11:51"
        },
        {
          "in": "13:53",
          "out": "17:53"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63f42832c99001eb2f7b3"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:51",
          "out": "13:00"
        },
        {
          "in": "14:53",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a63f71832c99001eb2f7b5"
      },
      "totalTimes": "10:01",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:52",
          "out": "17:53"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a6417f832c99001eb2f7b7"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:01"
        },
        {
          "in": "14:02",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a6418c832c99001eb2f7b9"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:02"
        },
        {
          "in": "12:56",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a64350832c99001eb2f7bb"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "08:09",
          "out": "12:10"
        },
        {
          "in": "14:07",
          "out": "18:07"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a65d6e832c99001eb2f7bd"
      },
      "totalTimes": "09:10",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:03"
        },
        {
          "in": "16:01",
          "out": "21:08"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a65db0832c99001eb2f7c1"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "10:01",
          "out": "14:01"
        },
        {
          "in": "16:00",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a65e20832c99001eb2f7c4"
      },
      "totalTimes": "09:32",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:04"
        },
        {
          "in": "16:03",
          "out": "21:34"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a679f9832c99001eb2f7d4"
      },
      "totalTimes": "08:46",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "17:51"
        },
        {
          "in": "19:54",
          "out": "22:51"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a69432832c99001eb2f7e9"
      },
      "totalTimes": "09:59",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "13:54",
          "out": "23:53"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a6c1c9832c99001eb2f80c"
      },
      "totalTimes": "07:34",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "07:18",
          "out": "12:01"
        },
        {
          "in": "14:13",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60a7038e832c99001eb2f820"
      },
      "totalTimes": "08:34",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "21:49",
          "out": "06:23"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a70cac832c99001eb2f822"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "22:28",
          "out": "06:23"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a72033832c99001eb2f825"
      },
      "totalTimes": "06:21",
      "date": {
        "$date": {
          "$numberLong": "1621468800000"
        }
      },
      "times": [
        {
          "in": "23:51",
          "out": "06:12"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a775cb832c99001eb2f828"
      },
      "totalTimes": "09:39",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "05:56",
          "out": "10:01"
        },
        {
          "in": "12:02",
          "out": "17:36"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7766b832c99001eb2f82a"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:01"
        },
        {
          "in": "12:01",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7781c832c99001eb2f82c"
      },
      "totalTimes": "07:40",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:03"
        },
        {
          "in": "12:19",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7793e832c99001eb2f82e"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "06:11",
          "out": "12:05"
        },
        {
          "in": "13:59",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78364832c99001eb2f833"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:59"
        },
        {
          "in": "13:58",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78368832c99001eb2f835"
      },
      "totalTimes": "10:24",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "17:18"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a7836b832c99001eb2f837"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:02"
        },
        {
          "in": "12:54",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78410832c99001eb2f839"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:01"
        },
        {
          "in": "13:02",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7841b832c99001eb2f83b"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:46"
        },
        {
          "in": "13:46",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a784a7832c99001eb2f83d"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:05"
        },
        {
          "in": "13:11",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78530832c99001eb2f83f"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:57"
        },
        {
          "in": "13:59",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78543832c99001eb2f841"
      },
      "totalTimes": "07:26",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:55"
        },
        {
          "in": "14:10",
          "out": "16:43"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7858f832c99001eb2f843"
      },
      "totalTimes": "09:21",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:57"
        },
        {
          "in": "14:01",
          "out": "18:28"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a785ae832c99001eb2f845"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "12:06"
        },
        {
          "in": "14:13",
          "out": "17:16"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a785c2832c99001eb2f847"
      },
      "totalTimes": "10:05",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a785f3832c99001eb2f849"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "11:08"
        },
        {
          "in": "13:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78618832c99001eb2f84b"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:07"
        },
        {
          "in": "14:05",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78632832c99001eb2f84d"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "12:04"
        },
        {
          "in": "14:00",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78657832c99001eb2f84f"
      },
      "totalTimes": "08:30",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:00"
        },
        {
          "in": "13:00",
          "out": "17:37"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78699832c99001eb2f851"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:06"
        },
        {
          "in": "14:13",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a787ba832c99001eb2f853"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "11:07"
        },
        {
          "in": "13:08",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78c9b832c99001eb2f855"
      },
      "totalTimes": "10:16",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:34",
          "out": "11:11"
        },
        {
          "in": "12:54",
          "out": "19:33"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a78e5e832c99001eb2f857"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:41",
          "out": "11:49"
        },
        {
          "in": "13:49",
          "out": "17:48"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a790e6832c99001eb2f859"
      },
      "totalTimes": "13:02",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:52",
          "out": "12:03"
        },
        {
          "in": "13:00",
          "out": "21:51"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a792ba832c99001eb2f85b"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:02"
        },
        {
          "in": "14:06",
          "out": "18:05"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a792d3832c99001eb2f85d"
      },
      "totalTimes": "10:30",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "12:06"
        },
        {
          "in": "13:23",
          "out": "19:47"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a793cf832c99001eb2f85f"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "12:05"
        },
        {
          "in": "14:08",
          "out": "18:08"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7945a832c99001eb2f861"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "12:05"
        },
        {
          "in": "14:04",
          "out": "18:03"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a797fe832c99001eb2f863"
      },
      "totalTimes": "07:09",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "08:22",
          "out": "12:30"
        },
        {
          "in": "14:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60a79812832c99001eb2f865"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:00"
        },
        {
          "in": "14:02",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a7991e832c99001eb2f866"
      },
      "totalTimes": "07:13",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "08:27",
          "out": "13:00"
        },
        {
          "in": "15:22",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7ae5f832c99001eb2f868"
      },
      "totalTimes": "10:07",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "09:58",
          "out": "20:05"
        },
        {
          "in": "20:05",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7af0b832c99001eb2f86a"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:05"
        },
        {
          "in": "15:59",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7afcc832c99001eb2f86f"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "10:04",
          "out": "14:00"
        },
        {
          "in": "16:05",
          "out": "20:07"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a7ca81832c99001eb2f87d"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "11:58",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a7e55d832c99001eb2f897"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "13:52",
          "out": "17:55"
        },
        {
          "in": "19:52",
          "out": "23:52"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a85512832c99001eb2f8ce"
      },
      "totalTimes": "08:35",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "21:49",
          "out": "06:24"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a870df832c99001eb2f8d1"
      },
      "totalTimes": "06:13",
      "date": {
        "$date": {
          "$numberLong": "1621555200000"
        }
      },
      "times": [
        {
          "in": "23:47",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8c7fb832c99001eb2f8d4"
      },
      "totalTimes": "08:38",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "12:10"
        },
        {
          "in": "13:58",
          "out": "16:25"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a8c8d6832c99001eb2f8d7"
      },
      "totalTimes": "06:00",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8c90c832c99001eb2f8d9"
      },
      "totalTimes": "05:59",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:04",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8c943832c99001eb2f8db"
      },
      "totalTimes": "07:25",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:00"
        },
        {
          "in": "12:36",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a8c9ae832c99001eb2f8dd"
      },
      "totalTimes": "11:51",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "17:57"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8ca33832c99001eb2f8df"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:09",
          "out": "11:53"
        },
        {
          "in": "14:01",
          "out": "16:22"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a8ca77832c99001eb2f8e1"
      },
      "totalTimes": "07:23",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:10",
          "out": "13:33"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8cc9f832c99001eb2f8e3"
      },
      "totalTimes": "13:42",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:19",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d043832c99001eb2f8e6"
      },
      "totalTimes": "04:26",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:34",
          "out": "11:00"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60a8d49d832c99001eb2f8e8"
      },
      "totalTimes": "05:09",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d528832c99001eb2f8ea"
      },
      "totalTimes": "04:15",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:10"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d570832c99001eb2f8ec"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "10:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d62f832c99001eb2f8ee"
      },
      "totalTimes": "06:02",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "13:02"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d72d832c99001eb2f8f0"
      },
      "totalTimes": "04:10",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:14"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d739832c99001eb2f8f2"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:45"
        },
        {
          "in": "13:02",
          "out": "16:30"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60a8d7cd832c99001eb2f8f4"
      },
      "totalTimes": "05:08",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "12:15"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d7df832c99001eb2f8f6"
      },
      "totalTimes": "04:03",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:10"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d7df832c99001eb2f8f8"
      },
      "totalTimes": "04:05",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:12"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d888832c99001eb2f8fa"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:10"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8d98d832c99001eb2f8fc"
      },
      "totalTimes": "06:00",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "13:14"
        },
        {
          "in": "20:08",
          "out": "20:08"
        },
        {
          "in": "20:09",
          "out": "20:09"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "60a8da3b832c99001eb2f8fe"
      },
      "totalTimes": "03:53",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "11:10"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8da92832c99001eb2f900"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:18",
          "out": "11:20"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8e102832c99001eb2f902"
      },
      "totalTimes": "04:07",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:46",
          "out": "11:53"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8e413832c99001eb2f904"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:59",
          "out": "12:01"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8e4ec832c99001eb2f906"
      },
      "totalTimes": "03:59",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8e5f3832c99001eb2f908"
      },
      "totalTimes": "03:55",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "12:02"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a8ea00832c99001eb2f90a"
      },
      "totalTimes": "05:38",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "08:24",
          "out": "14:02"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a90043832c99001eb2f90c"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:00"
        },
        {
          "in": "16:02",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a91631832c99001eb2f917"
      },
      "totalTimes": "06:31",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "11:33",
          "out": "14:03"
        },
        {
          "in": "16:05",
          "out": "20:06"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60a91d10832c99001eb2f920"
      },
      "totalTimes": "09:51",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "21:53"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a91e81832c99001eb2f924"
      },
      "totalTimes": "03:56",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "12:08",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a93712832c99001eb2f92d"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "13:53",
          "out": "17:53"
        },
        {
          "in": "19:53",
          "out": "00:01"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60a9a646832c99001eb2f944"
      },
      "totalTimes": "08:21",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "21:48",
          "out": "06:09"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60a9a747832c99001eb2f946"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "21:52",
          "out": "06:06"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aa1a0a832c99001eb2f949"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "11:55"
        },
        {
          "in": "13:51",
          "out": "16:03"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60aa1b9e832c99001eb2f94c"
      },
      "totalTimes": "09:56",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aa1bf0832c99001eb2f94f"
      },
      "totalTimes": "06:12",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "23:58",
          "out": "06:10"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aa1c3a832c99001eb2f951"
      },
      "totalTimes": "05:52",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "06:11",
          "out": "11:04"
        },
        {
          "in": "12:00",
          "out": "12:59"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60aa2765832c99001eb2f953"
      },
      "totalTimes": "10:45",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:05"
        },
        {
          "in": "12:44",
          "out": "19:23"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60aa29d5832c99001eb2f955"
      },
      "totalTimes": "05:59",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "13:08"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aa6e59832c99001eb2f95b"
      },
      "totalTimes": "09:56",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "12:01",
          "out": "21:57"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aa7b10832c99001eb2f95e"
      },
      "totalTimes": "07:20",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "12:56",
          "out": "20:16"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aa7c29832c99001eb2f961"
      },
      "totalTimes": "06:00",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "13:00",
          "out": "19:00"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aadd87832c99001eb2f96a"
      },
      "totalTimes": "10:07",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "19:56",
          "out": "06:03"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aaf7d5832c99001eb2f96d"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "21:48",
          "out": "06:01"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aaf9dd832c99001eb2f96f"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "21:57",
          "out": "06:13"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ab6b68832c99001eb2f972"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "10:03"
        },
        {
          "in": "12:00",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab6bc5832c99001eb2f976"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "10:04"
        },
        {
          "in": "12:01",
          "out": "16:00"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab6dbc832c99001eb2f979"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:11",
          "out": "11:26"
        },
        {
          "in": "13:28",
          "out": "16:05"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab6ef0832c99001eb2f97c"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:16",
          "out": "10:11"
        },
        {
          "in": "11:52",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7498832c99001eb2f97e"
      },
      "totalTimes": "11:37",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:40",
          "out": "18:17"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ab74ee832c99001eb2f980"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:42",
          "out": "11:01"
        },
        {
          "in": "12:58",
          "out": "16:57"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60ab7531832c99001eb2f982"
      },
      "totalTimes": "08:30",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:43",
          "out": "13:41"
        },
        {
          "in": "16:05",
          "out": "17:37"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab75a7832c99001eb2f984"
      },
      "totalTimes": "08:39",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:45",
          "out": "11:04"
        },
        {
          "in": "13:08",
          "out": "17:28"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab77e1832c99001eb2f986"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:54",
          "out": "11:58"
        },
        {
          "in": "13:54",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7817832c99001eb2f988"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:03"
        },
        {
          "in": "12:54",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7895832c99001eb2f98a"
      },
      "totalTimes": "04:33",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:30"
        },
        {
          "in": "17:02",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab78c0832c99001eb2f98c"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:01"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7956832c99001eb2f98e"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:05"
        },
        {
          "in": "13:00",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7958832c99001eb2f990"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:02"
        },
        {
          "in": "13:10",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab795c832c99001eb2f992"
      },
      "totalTimes": "08:38",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:22"
        },
        {
          "in": "13:09",
          "out": "17:26"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab79c9832c99001eb2f994"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:03"
        },
        {
          "in": "14:03",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab79cb832c99001eb2f996"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:00"
        },
        {
          "in": "13:56",
          "out": "16:58"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab79e6832c99001eb2f998"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:03"
        },
        {
          "in": "14:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7a64832c99001eb2f99a"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:05"
        },
        {
          "in": "13:59",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7a9a832c99001eb2f99c"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:03"
        },
        {
          "in": "13:01",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7af7832c99001eb2f99e"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:06"
        },
        {
          "in": "13:16",
          "out": "17:12"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7b02832c99001eb2f9a0"
      },
      "totalTimes": "08:28",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:08"
        },
        {
          "in": "14:01",
          "out": "17:29"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7b7b832c99001eb2f9a2"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:18"
        },
        {
          "in": "14:05",
          "out": "16:44"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7ba2832c99001eb2f9a4"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:04"
        },
        {
          "in": "14:00",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7c4e832c99001eb2f9a6"
      },
      "totalTimes": "04:48",
      "date": {
        "$date": {
          "$numberLong": "1621641600000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60ab7c5d832c99001eb2f9a7"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:02"
        },
        {
          "in": "14:08",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60ab7cfa832c99001eb2f9a8"
      },
      "totalTimes": "11:25",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:16",
          "out": "13:03"
        },
        {
          "in": "15:28",
          "out": "21:06"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab7d4c832c99001eb2f9aa"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:17",
          "out": "12:06"
        },
        {
          "in": "14:05",
          "out": "17:22"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 6
    },{
      "_id": {
        "$oid": "60ab83c7832c99001eb2f9ac"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:45",
          "out": "11:47"
        },
        {
          "in": "13:50",
          "out": "17:50"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab8628832c99001eb2f9ae"
      },
      "totalTimes": "08:30",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:55",
          "out": "13:17"
        },
        {
          "in": "15:01",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab871e832c99001eb2f9b1"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "07:59",
          "out": "11:59"
        },
        {
          "in": "13:14",
          "out": "17:18"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab874e832c99001eb2f9b3"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "08:00",
          "out": "11:59"
        },
        {
          "in": "14:00",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ab88b8832c99001eb2f9b5"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:07"
        },
        {
          "in": "14:10",
          "out": "18:05"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60aba07c832c99001eb2f9b7"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "09:47",
          "out": "13:59"
        },
        {
          "in": "15:56",
          "out": "20:00"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60aba315832c99001eb2f9b9"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:01"
        },
        {
          "in": "16:00",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60aba36c832c99001eb2f9bb"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "13:59"
        },
        {
          "in": "15:55",
          "out": "19:58"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60abbf1e832c99001eb2f9cd"
      },
      "totalTimes": "10:05",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "11:58",
          "out": "22:03"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60abcf01832c99001eb2f9e2"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621728000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60abcf05832c99001eb2f9e3"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60abcf08832c99001eb2f9e4"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60abcf0b832c99001eb2f9e5"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60abcf0e832c99001eb2f9e6"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60abcf10832c99001eb2f9e7"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 0
    },{
      "_id": {
        "$oid": "60abcf1a832c99001eb2f9e8"
      },
      "totalTimes": "00:00",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        },
        {
          "in": "Atestado médico",
          "out": "Atestado médico"
        }
      ],
      "userId": {
        "$oid": "6059e7421d006d001d8ef539"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60ac479a832c99001eb2fa28"
      },
      "totalTimes": "00:23",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "21:40",
          "out": "22:03"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ac4af8832c99001eb2fa2a"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "21:55",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ac7042832c99001eb2fa2e"
      },
      "totalTimes": "05:30",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "00:34",
          "out": "06:04"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60acbafd832c99001eb2fa30"
      },
      "totalTimes": "12:32",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "05:53",
          "out": "18:25"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60acbb8c832c99001eb2fa32"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "05:55",
          "out": "11:01"
        },
        {
          "in": "13:10",
          "out": "16:15"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acbbe4832c99001eb2fa34"
      },
      "totalTimes": "20:02",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "05:57",
          "out": "11:58"
        },
        {
          "in": "15:56",
          "out": "05:57"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acbd1b832c99001eb2fa37"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "10:05"
        },
        {
          "in": "12:05",
          "out": "16:01"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acc78b832c99001eb2fa3a"
      },
      "totalTimes": "10:31",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "06:46",
          "out": "17:17"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60acc80a832c99001eb2fa3c"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "06:48",
          "out": "11:01"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acc902832c99001eb2fa3e"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:01"
        },
        {
          "in": "13:02",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acca28832c99001eb2fa40"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:58"
        },
        {
          "in": "13:56",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acca32832c99001eb2fa42"
      },
      "totalTimes": "09:41",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:46"
        },
        {
          "in": "13:55",
          "out": "17:48"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acca70832c99001eb2fa44"
      },
      "totalTimes": "10:43",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "17:42"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60acca97832c99001eb2fa46"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:05"
        },
        {
          "in": "13:02",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accaac832c99001eb2fa48"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:15"
        },
        {
          "in": "13:10",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accb2e832c99001eb2fa4a"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:03"
        },
        {
          "in": "12:57",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accb52832c99001eb2fa4c"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "12:07"
        },
        {
          "in": "13:56",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accb5e832c99001eb2fa4e"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:56"
        },
        {
          "in": "14:14",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accb81832c99001eb2fa50"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:04"
        },
        {
          "in": "13:00",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accbac832c99001eb2fa52"
      },
      "totalTimes": "04:54",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:57"
        },
        {
          "in": "17:49",
          "out": "17:50"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accbd8832c99001eb2fa54"
      },
      "totalTimes": "09:57",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60accc05832c99001eb2fa56"
      },
      "totalTimes": "07:25",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:07"
        },
        {
          "in": "14:03",
          "out": "16:26"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accc5a832c99001eb2fa58"
      },
      "totalTimes": "07:44",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:03"
        },
        {
          "in": "13:14",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accc84832c99001eb2fa5a"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:06"
        },
        {
          "in": "14:05",
          "out": "17:09"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acccbd832c99001eb2fa5c"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:09"
        },
        {
          "in": "14:05",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acccd2832c99001eb2fa5e"
      },
      "totalTimes": "09:52",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:17"
        },
        {
          "in": "13:13",
          "out": "17:57"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accd5a832c99001eb2fa60"
      },
      "totalTimes": "07:41",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:03"
        },
        {
          "in": "13:14",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60accd8c832c99001eb2fa62"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "11:12"
        },
        {
          "in": "13:05",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acd38d832c99001eb2fa64"
      },
      "totalTimes": "08:27",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:38",
          "out": "12:13"
        },
        {
          "in": "13:18",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acd4a3832c99001eb2fa66"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:42",
          "out": "11:47"
        },
        {
          "in": "13:46",
          "out": "17:46"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acd952832c99001eb2fa68"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "13:11"
        },
        {
          "in": "15:14",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acd9d5832c99001eb2fa6a"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "08:04",
          "out": "11:03"
        },
        {
          "in": "13:09",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ace82e832c99001eb2fa6c"
      },
      "totalTimes": "07:42",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:02"
        },
        {
          "in": "14:06",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60acf501832c99001eb2fa6d"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:01"
        },
        {
          "in": "16:00",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60acf60f832c99001eb2fa70"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "10:05",
          "out": "14:05"
        },
        {
          "in": "16:00",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ad1126832c99001eb2fa81"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "12:00",
          "out": "16:10"
        },
        {
          "in": "18:05",
          "out": "21:57"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ad119d832c99001eb2fa83"
      },
      "totalTimes": "03:58",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "12:02",
          "out": "12:02"
        },
        {
          "in": "14:02",
          "out": "18:00"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ad2b48832c99001eb2fa9c"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "13:52",
          "out": "17:53"
        },
        {
          "in": "19:51",
          "out": "23:55"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ad9c7c832c99001eb2facf"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "21:55",
          "out": "06:14"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ad9dcb832c99001eb2fad2"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "22:00",
          "out": "06:11"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ae0d82832c99001eb2fad6"
      },
      "totalTimes": "10:07",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "05:57",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ae0de3832c99001eb2fad8"
      },
      "totalTimes": "05:55",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "11:54"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ae0ded832c99001eb2fada"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "10:02"
        },
        {
          "in": "12:02",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae0e8d832c99001eb2fadc"
      },
      "totalTimes": "05:39",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:02",
          "out": "09:49"
        },
        {
          "in": "14:02",
          "out": "15:54"
        },
        {
          "in": "20:09",
          "out": "20:09"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 9
    },{
      "_id": {
        "$oid": "60ae0f90832c99001eb2fade"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:06",
          "out": "10:06"
        },
        {
          "in": "12:01",
          "out": "16:06"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae102f832c99001eb2fae1"
      },
      "totalTimes": "13:49",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:09",
          "out": "10:11"
        },
        {
          "in": "11:56",
          "out": "21:43"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1880832c99001eb2fae5"
      },
      "totalTimes": "09:24",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:44",
          "out": "12:15"
        },
        {
          "in": "14:06",
          "out": "17:59"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1a6a832c99001eb2fae7"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:52",
          "out": "11:59"
        },
        {
          "in": "13:52",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1b14832c99001eb2fae9"
      },
      "totalTimes": "10:38",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "17:33"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ae1b1c832c99001eb2faeb"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:02"
        },
        {
          "in": "12:50",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1b40832c99001eb2faed"
      },
      "totalTimes": "10:11",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ae1bf5832c99001eb2faef"
      },
      "totalTimes": "10:01",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:54"
        },
        {
          "in": "12:54",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1c36832c99001eb2faf1"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:57"
        },
        {
          "in": "15:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1c6d832c99001eb2faf3"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "11:11"
        },
        {
          "in": "13:05",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1cc4832c99001eb2faf5"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:00"
        },
        {
          "in": "13:02",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60ae1cec832c99001eb2faf7"
      },
      "totalTimes": "08:38",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:00"
        },
        {
          "in": "14:00",
          "out": "17:41"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1d77832c99001eb2faf9"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:05"
        },
        {
          "in": "14:06",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1e13832c99001eb2fafb"
      },
      "totalTimes": "09:13",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:00"
        },
        {
          "in": "13:57",
          "out": "18:18"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60ae1e23832c99001eb2fafd"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:04"
        },
        {
          "in": "13:57",
          "out": "17:12"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1e39832c99001eb2faff"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "11:09"
        },
        {
          "in": "12:24",
          "out": "16:24"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1e45832c99001eb2fb01"
      },
      "totalTimes": "00:01",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "07:10"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60ae1e62832c99001eb2fb03"
      },
      "totalTimes": "07:48",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "11:04"
        },
        {
          "in": "13:13",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1ebf832c99001eb2fb05"
      },
      "totalTimes": "09:26",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:38"
        },
        {
          "in": "12:37",
          "out": "17:36"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1edd832c99001eb2fb07"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:07"
        },
        {
          "in": "13:13",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1f15832c99001eb2fb09"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:08"
        },
        {
          "in": "14:04",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1f23832c99001eb2fb0b"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:08"
        },
        {
          "in": "14:06",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae1f9f832c99001eb2fb0d"
      },
      "totalTimes": "07:31",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "11:18"
        },
        {
          "in": "13:04",
          "out": "16:31"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae2682832c99001eb2fb0f"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:44",
          "out": "11:46"
        },
        {
          "in": "13:44",
          "out": "17:49"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae28b6832c99001eb2fb11"
      },
      "totalTimes": "08:17",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:53",
          "out": "13:43"
        },
        {
          "in": "15:48",
          "out": "18:15"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae29c7832c99001eb2fb13"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:58",
          "out": "12:18"
        },
        {
          "in": "13:17",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae2ba1832c99001eb2fb15"
      },
      "totalTimes": "07:57",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "08:06",
          "out": "12:01"
        },
        {
          "in": "13:59",
          "out": "18:01"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae2be3832c99001eb2fb17"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "12:07"
        },
        {
          "in": "14:10",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae462a832c99001eb2fb1a"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:00"
        },
        {
          "in": "16:02",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae470c832c99001eb2fb1d"
      },
      "totalTimes": "06:24",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "12:30"
        },
        {
          "in": "16:06",
          "out": "20:03"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60ae60de832c99001eb2fb29"
      },
      "totalTimes": "08:07",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "11:53",
          "out": "15:55"
        },
        {
          "in": "17:58",
          "out": "22:03"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae63a2832c99001eb2fb34"
      },
      "totalTimes": "07:54",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:01"
        },
        {
          "in": "14:06",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60ae7d24832c99001eb2fb49"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "13:53",
          "out": "17:54"
        },
        {
          "in": "19:54",
          "out": "23:58"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60ae96c4832c99001eb2fb5b"
      },
      "totalTimes": "22:00",
      "date": {
        "$date": {
          "$numberLong": "1621814400000"
        }
      },
      "times": [
        {
          "in": "08:02",
          "out": "06:02"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60ae96ec832c99001eb2fb5c"
      },
      "totalTimes": "06:02",
      "date": {
        "$date": {
          "$numberLong": "1621900800000"
        }
      },
      "times": [
        {
          "in": "00:02",
          "out": "06:04"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60aedc46832c99001eb2fb83"
      },
      "totalTimes": "10:46",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "20:39",
          "out": "07:25"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60aeeff7832c99001eb2fb87"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "22:03",
          "out": "06:18"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60af0ab8832c99001eb2fb89"
      },
      "totalTimes": "06:01",
      "date": {
        "$date": {
          "$numberLong": "1621987200000"
        }
      },
      "times": [
        {
          "in": "23:58",
          "out": "05:59"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60af5f78832c99001eb2fb8d"
      },
      "totalTimes": "06:13",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "05:59",
          "out": "05:59"
        },
        {
          "in": "23:47",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af5f9c832c99001eb2fb90"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:06"
        },
        {
          "in": "11:57",
          "out": "16:00"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af5fca832c99001eb2fb92"
      },
      "totalTimes": "08:03",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:00",
          "out": "10:01"
        },
        {
          "in": "12:00",
          "out": "16:02"
        }
      ],
      "userId": {
        "$oid": "6059f62c1d006d001d8ef557"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af60bf832c99001eb2fb94"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:00"
        },
        {
          "in": "12:09",
          "out": "16:04"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af62cb832c99001eb2fb96"
      },
      "totalTimes": "00:44",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:13",
          "out": "06:57"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60af6a94832c99001eb2fb99"
      },
      "totalTimes": "11:26",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:47",
          "out": "12:01"
        },
        {
          "in": "13:08",
          "out": "19:20"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6aec832c99001eb2fb9b"
      },
      "totalTimes": "09:40",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:48",
          "out": "12:02"
        },
        {
          "in": "12:39",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6b1a832c99001eb2fb9d"
      },
      "totalTimes": "11:40",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:49",
          "out": "18:29"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60af6c14832c99001eb2fb9f"
      },
      "totalTimes": "08:18",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:53",
          "out": "11:01"
        },
        {
          "in": "12:52",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6c77832c99001eb2fba1"
      },
      "totalTimes": "07:02",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "11:59"
        },
        {
          "in": "15:01",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6ca5832c99001eb2fba3"
      },
      "totalTimes": "07:47",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "12:12"
        },
        {
          "in": "14:34",
          "out": "17:04"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6cc3832c99001eb2fba5"
      },
      "totalTimes": "08:11",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "12:57"
        },
        {
          "in": "14:56",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6d31832c99001eb2fba7"
      },
      "totalTimes": "11:01",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "17:59"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60af6d68832c99001eb2fba9"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:02"
        },
        {
          "in": "13:03",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6e5b832c99001eb2fbab"
      },
      "totalTimes": "06:17",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "12:01"
        },
        {
          "in": "15:40",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6e94832c99001eb2fbad"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:04"
        },
        {
          "in": "13:03",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6ead832c99001eb2fbaf"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:05"
        },
        {
          "in": "12:26",
          "out": "16:21"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6eb1832c99001eb2fbb1"
      },
      "totalTimes": "08:50",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:00"
        },
        {
          "in": "13:05",
          "out": "17:59"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60af6ecd832c99001eb2fbb3"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:05",
          "out": "12:05"
        },
        {
          "in": "14:01",
          "out": "17:03"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6ee7832c99001eb2fbb5"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "12:02"
        },
        {
          "in": "13:56",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60af6f1f832c99001eb2fbb6"
      },
      "totalTimes": "07:56",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:06"
        },
        {
          "in": "13:09",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6fc1832c99001eb2fbb8"
      },
      "totalTimes": "12:29",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "10:41"
        },
        {
          "in": "11:58",
          "out": "21:55"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af6fcc832c99001eb2fbba"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:09",
          "out": "12:05"
        },
        {
          "in": "14:02",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af7036832c99001eb2fbbd"
      },
      "totalTimes": "09:46",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "16:57"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60af7055832c99001eb2fbbf"
      },
      "totalTimes": "04:20",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:11",
          "out": "11:29"
        },
        {
          "in": "17:04",
          "out": "17:06"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af7131832c99001eb2fbc1"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:15",
          "out": "12:02"
        },
        {
          "in": "13:49",
          "out": "17:08"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af7161832c99001eb2fbc3"
      },
      "totalTimes": "08:33",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:16",
          "out": "12:26"
        },
        {
          "in": "14:00",
          "out": "17:23"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af7781832c99001eb2fbc6"
      },
      "totalTimes": "08:26",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:42",
          "out": "12:26"
        },
        {
          "in": "13:18",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af77f3832c99001eb2fbc8"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:44",
          "out": "11:44"
        },
        {
          "in": "13:44",
          "out": "17:45"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af7c0c832c99001eb2fbca"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "08:01",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "18:10"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af7db4832c99001eb2fbcc"
      },
      "totalTimes": "07:52",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "12:03"
        },
        {
          "in": "14:19",
          "out": "18:16"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af873c832c99001eb2fbce"
      },
      "totalTimes": "04:51",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "08:49",
          "out": "13:40"
        },
        {
          "in": "18:02",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af97b3832c99001eb2fbd0"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "09:59",
          "out": "14:01"
        },
        {
          "in": "15:59",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af98ad832c99001eb2fbd4"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:16"
        },
        {
          "in": "15:58",
          "out": "20:04"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60af997f832c99001eb2fbd7"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "10:07",
          "out": "14:07"
        },
        {
          "in": "16:00",
          "out": "20:05"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60afb326832c99001eb2fbe1"
      },
      "totalTimes": "13:05",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "11:56",
          "out": "01:01"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60afb5da832c99001eb2fbef"
      },
      "totalTimes": "07:31",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "07:21",
          "out": "12:03"
        },
        {
          "in": "14:13",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 1
    },{
      "_id": {
        "$oid": "60afcee7832c99001eb2fbff"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "13:55",
          "out": "17:55"
        },
        {
          "in": "19:53",
          "out": "23:51"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b03fec832c99001eb2fc32"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "21:57",
          "out": "05:59"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b040b6832c99001eb2fc34"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1622073600000"
        }
      },
      "times": [
        {
          "in": "22:00",
          "out": "06:16"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b0b004832c99001eb2fc3a"
      },
      "totalTimes": "10:02",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "05:55",
          "out": "15:57"
        }
      ],
      "userId": {
        "$oid": "6059f48c1d006d001d8ef54f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b0b1cf832c99001eb2fc3e"
      },
      "totalTimes": "07:55",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:03",
          "out": "13:58"
        }
      ],
      "userId": {
        "$oid": "6059e55c1d006d001d8ef534"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b0b241832c99001eb2fc40"
      },
      "totalTimes": "08:15",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:03"
        },
        {
          "in": "12:02",
          "out": "16:19"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0b31a832c99001eb2fc42"
      },
      "totalTimes": "09:18",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:08",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "17:27"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0ba9c832c99001eb2fc45"
      },
      "totalTimes": "10:12",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:40",
          "out": "16:52"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b0bca1832c99001eb2fc47"
      },
      "totalTimes": "08:19",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:49",
          "out": "11:02"
        },
        {
          "in": "12:56",
          "out": "17:02"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0be1f832c99001eb2fc49"
      },
      "totalTimes": "10:47",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:55",
          "out": "14:59"
        },
        {
          "in": "14:59",
          "out": "17:42"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0be54832c99001eb2fc4b"
      },
      "totalTimes": "08:12",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:56",
          "out": "11:01"
        },
        {
          "in": "12:53",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0be6d832c99001eb2fc4d"
      },
      "totalTimes": "08:04",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:00"
        },
        {
          "in": "12:59",
          "out": "17:00"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0beaf832c99001eb2fc50"
      },
      "totalTimes": "06:50",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "13:48"
        }
      ],
      "userId": {
        "$oid": "6059ed751d006d001d8ef53c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b0bedb832c99001eb2fc52"
      },
      "totalTimes": "08:06",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "11:59"
        },
        {
          "in": "13:54",
          "out": "16:59"
        }
      ],
      "userId": {
        "$oid": "6059f43f1d006d001d8ef54d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0bf85832c99001eb2fc54"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:01",
          "out": "12:00"
        },
        {
          "in": "14:01",
          "out": "17:01"
        }
      ],
      "userId": {
        "$oid": "6059f1de1d006d001d8ef546"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0bff0832c99001eb2fc56"
      },
      "totalTimes": "08:58",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:51"
        },
        {
          "in": "13:04",
          "out": "17:14"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c002832c99001eb2fc58"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:06"
        },
        {
          "in": "12:22",
          "out": "16:24"
        }
      ],
      "userId": {
        "$oid": "6059f05f1d006d001d8ef542"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c0a4832c99001eb2fc5a"
      },
      "totalTimes": "07:50",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:06",
          "out": "11:05"
        },
        {
          "in": "13:04",
          "out": "16:55"
        }
      ],
      "userId": {
        "$oid": "6059d87649be800016c298f0"
      },
      "__v": 3
    },{
      "_id": {
        "$oid": "60b0c0c4832c99001eb2fc5c"
      },
      "totalTimes": "18:48",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "11:59"
        },
        {
          "in": "17:09",
          "out": "07:05"
        }
      ],
      "userId": {
        "$oid": "605f0913c69c0100150960f7"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c0da832c99001eb2fc5e"
      },
      "totalTimes": "11:21",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:07",
          "out": "18:28"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b0c126832c99001eb2fc60"
      },
      "totalTimes": "08:16",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:08",
          "out": "12:02"
        },
        {
          "in": "14:01",
          "out": "17:23"
        }
      ],
      "userId": {
        "$oid": "6059f5151d006d001d8ef552"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c18d832c99001eb2fc62"
      },
      "totalTimes": "08:09",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "11:19"
        },
        {
          "in": "13:07",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059e6da1d006d001d8ef537"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c190832c99001eb2fc64"
      },
      "totalTimes": "08:05",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:10",
          "out": "12:07"
        },
        {
          "in": "14:03",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "6059e59b1d006d001d8ef536"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c200832c99001eb2fc66"
      },
      "totalTimes": "08:13",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:12",
          "out": "12:08"
        },
        {
          "in": "13:54",
          "out": "17:11"
        }
      ],
      "userId": {
        "$oid": "605f0cc3c69c0100150960f9"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c23c832c99001eb2fc68"
      },
      "totalTimes": "09:45",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:13",
          "out": "14:15"
        },
        {
          "in": "15:28",
          "out": "18:11"
        }
      ],
      "userId": {
        "$oid": "6059f2da1d006d001d8ef54a"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c28c832c99001eb2fc6a"
      },
      "totalTimes": "04:48",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:14",
          "out": "12:02"
        },
        {
          "in": "18:09",
          "out": "18:09"
        }
      ],
      "userId": {
        "$oid": "6059f32a1d006d001d8ef54c"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c664832c99001eb2fc6c"
      },
      "totalTimes": "07:59",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:31",
          "out": "11:31"
        },
        {
          "in": "13:31",
          "out": "17:30"
        }
      ],
      "userId": {
        "$oid": "606b5aced995780016bcab46"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0c6c0832c99001eb2fc6e"
      },
      "totalTimes": "08:20",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "06:58",
          "out": "12:02"
        },
        {
          "in": "13:57",
          "out": "17:13"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 5
    },{
      "_id": {
        "$oid": "60b0c6f2832c99001eb2fc6f"
      },
      "totalTimes": "07:42",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:19",
          "out": "12:01"
        },
        {
          "in": "14:07",
          "out": "17:07"
        }
      ],
      "userId": {
        "$oid": "6059dc2c49be800016c298f1"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b0c7c2832c99001eb2fc70"
      },
      "totalTimes": "07:46",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:36",
          "out": "11:28"
        },
        {
          "in": "13:11",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0ccb7832c99001eb2fc72"
      },
      "totalTimes": "08:34",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "07:57",
          "out": "12:10"
        },
        {
          "in": "12:49",
          "out": "17:10"
        }
      ],
      "userId": {
        "$oid": "6059f4ea1d006d001d8ef551"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0cdf7832c99001eb2fc74"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "08:03",
          "out": "12:07"
        },
        {
          "in": "14:05",
          "out": "18:02"
        }
      ],
      "userId": {
        "$oid": "6059f01f1d006d001d8ef541"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0ceff832c99001eb2fc76"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "08:07",
          "out": "12:01"
        },
        {
          "in": "14:00",
          "out": "18:06"
        }
      ],
      "userId": {
        "$oid": "6059f0911d006d001d8ef543"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0cf2e832c99001eb2fc78"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "08:08",
          "out": "13:08"
        },
        {
          "in": "15:04",
          "out": "18:04"
        }
      ],
      "userId": {
        "$oid": "6059e7101d006d001d8ef538"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0e965832c99001eb2fc7a"
      },
      "totalTimes": "08:02",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "10:00",
          "out": "14:00"
        },
        {
          "in": "16:00",
          "out": "20:02"
        }
      ],
      "userId": {
        "$oid": "6059ef5b1d006d001d8ef540"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b0ea0d832c99001eb2fc7c"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "10:03",
          "out": "14:05"
        },
        {
          "in": "15:55",
          "out": "20:01"
        }
      ],
      "userId": {
        "$oid": "6059f5681d006d001d8ef554"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b10181832c99001eb2fc86"
      },
      "totalTimes": "08:42",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "11:43",
          "out": "16:24"
        },
        {
          "in": "18:03",
          "out": "22:04"
        }
      ],
      "userId": {
        "$oid": "6059e57d1d006d001d8ef535"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b120a4832c99001eb2fca2"
      },
      "totalTimes": "08:00",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "13:56",
          "out": "17:55"
        },
        {
          "in": "19:51",
          "out": "23:52"
        }
      ],
      "userId": {
        "$oid": "6059e4581d006d001d8ef52d"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b12270832c99001eb2fcab"
      },
      "totalTimes": "03:02",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "14:03",
          "out": "17:05"
        }
      ],
      "userId": {
        "$oid": "6059eb401d006d001d8ef53a"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b1669b832c99001eb2fcd7"
      },
      "totalTimes": "11:25",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "18:54",
          "out": "06:19"
        }
      ],
      "userId": {
        "$oid": "6059f5e01d006d001d8ef555"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b1923e832c99001eb2fcdc"
      },
      "totalTimes": "08:08",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "22:00",
          "out": "06:08"
        }
      ],
      "userId": {
        "$oid": "6059e3f91d006d001d8ef52b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b1aa6f832c99001eb2fcdf"
      },
      "totalTimes": "06:17",
      "date": {
        "$date": {
          "$numberLong": "1622160000000"
        }
      },
      "times": [
        {
          "in": "23:43",
          "out": "06:00"
        }
      ],
      "userId": {
        "$oid": "6059f1581d006d001d8ef545"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b202f3832c99001eb2fce3"
      },
      "totalTimes": "10:56",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "06:01",
          "out": "09:59"
        },
        {
          "in": "12:00",
          "out": "18:58"
        }
      ],
      "userId": {
        "$oid": "6059f24f1d006d001d8ef547"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b203f1832c99001eb2fce5"
      },
      "totalTimes": "08:01",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "10:09"
        },
        {
          "in": "12:02",
          "out": "15:59"
        }
      ],
      "userId": {
        "$oid": "6059f4651d006d001d8ef54e"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b203f5832c99001eb2fce7"
      },
      "totalTimes": "08:14",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "06:05",
          "out": "12:07"
        },
        {
          "in": "14:11",
          "out": "16:23"
        }
      ],
      "userId": {
        "$oid": "6059f6071d006d001d8ef556"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b2087c832c99001eb2fceb"
      },
      "totalTimes": "07:58",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "06:25",
          "out": "10:12"
        },
        {
          "in": "12:06",
          "out": "16:17"
        }
      ],
      "userId": {
        "$oid": "6059ebe81d006d001d8ef53b"
      },
      "__v": 4
    },{
      "_id": {
        "$oid": "60b20e8f832c99001eb2fced"
      },
      "totalTimes": "05:12",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "06:51",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059e2891d006d001d8ef527"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b21014832c99001eb2fcef"
      },
      "totalTimes": "04:05",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "06:57",
          "out": "11:02"
        }
      ],
      "userId": {
        "$oid": "6059e4301d006d001d8ef52c"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b21081832c99001eb2fcf1"
      },
      "totalTimes": "04:15",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "06:59",
          "out": "11:14"
        }
      ],
      "userId": {
        "$oid": "6059f30c1d006d001d8ef54b"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b210ae832c99001eb2fcf3"
      },
      "totalTimes": "05:03",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "12:03"
        }
      ],
      "userId": {
        "$oid": "6059e3b81d006d001d8ef529"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b210d3832c99001eb2fcf5"
      },
      "totalTimes": "04:26",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "07:00",
          "out": "11:26"
        }
      ],
      "userId": {
        "$oid": "6059f5421d006d001d8ef553"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b21142832c99001eb2fcf7"
      },
      "totalTimes": "04:02",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "07:02",
          "out": "11:04"
        }
      ],
      "userId": {
        "$oid": "6059ef2b1d006d001d8ef53f"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b21163832c99001eb2fcf9"
      },
      "totalTimes": "04:41",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "07:03",
          "out": "11:44"
        }
      ],
      "userId": {
        "$oid": "606f0dc73fe47e001718b0d8"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b211ad832c99001eb2fcfb"
      },
      "totalTimes": "04:00",
      "date": {
        "$date": {
          "$numberLong": "1622246400000"
        }
      },
      "times": [
        {
          "in": "07:04",
          "out": "11:04"
        }
      ],
      "userId": {
        "$oid": "6059f4b01d006d001d8ef550"
      },
      "__v": 2
    },{
      "_id": {
        "$oid": "60b21208832c99001eb2fcfe"
      },
    }]