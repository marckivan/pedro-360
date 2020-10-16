var APP_DATA = {
  "scenes": [
    {
      "id": "0-360-asti-radome",
      "name": "360-asti-radome",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1792,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4519855673426836,
          "pitch": 0.10392970385650102,
          "rotation": 0,
          "target": "1-360_asti_sat_tracking_ant"
        },
        {
          "yaw": 1.1263554620225946,
          "pitch": 0.06217633257669597,
          "rotation": 0,
          "target": "2-radome_view2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.05564011546907288,
          "pitch": -0.4899404960905063,
          "title": "ASTI Radome (GRS antenna enclosure)",
          "text": "The antenna enclosure also known as radome is made to protect the antenna from severe weather disturbances in our typhoon prone country. It is made by polyhedron acrylic, customized and constructed in hexagonal patterns."
        }
      ]
    },
    {
      "id": "1-360_asti_sat_tracking_ant",
      "name": "360_asti_sat_tracking_ant",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1792,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6427977643134355,
          "pitch": 0.14549509343885347,
          "rotation": 0,
          "target": "0-360-asti-radome"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.025438146014279184,
          "pitch": -0.4544515670686966,
          "title": "GRS satellite tracking antenna",
          "text": "The earth-observation(EO) satellite tracking antenna located in the upper deck of DOST-ASTI has a 5.3m diameter. It can operate in several frequencies ranging from UHF, L, S, X and C bands. When the satellite passes over the country it tilts from 'X' degrees per second in X/Y axis and returns to its original stationary position when the transmission of data or satellite tracking is finished. Currently, this antenna serves as the direct reception of our own satellites Diwata-2 and Diwata-1 (decommissioned). It can also track other satellites given that we have an access or authorized to do it. For its control and monitoring system, it has satellite scheduler and TLE propagator that runs in a full linux based operating system. It has a fiber optic connection interface up to 1Gb/s speed and also includes&nbsp;SMNP and XML modules."
        }
      ]
    },
    {
      "id": "2-radome_view2",
      "name": "radome_view2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1792,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.083200038029629,
          "pitch": 0.033843382145390066,
          "rotation": 0,
          "target": "3-fixed-grs-control-room-360"
        },
        {
          "yaw": -0.06048455972843669,
          "pitch": 0.12885997738889543,
          "rotation": 0,
          "target": "1-360_asti_sat_tracking_ant"
        },
        {
          "yaw": -0.5131314657026298,
          "pitch": 0.042549141640302324,
          "rotation": 0,
          "target": "0-360-asti-radome"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2411069884449759,
          "pitch": -0.39453408939106893,
          "title": "ASTI Satellite tracking antenna Radome",
          "text": "The antenna enclosure also known as radome is made to protect the antenna from severe weather disturbances in our typhoon prone country. It is made by polyhedron acrylic customized and constructed in hexagonal patterns."
        },
        {
          "yaw": 1.6327057733374906,
          "pitch": -0.22962544746765978,
          "title": "Model of weather stations and sensors",
          "text": "To complement the satellite data that we are acquiring , the weather stations and sensors are used. This includes the hydrometeorological devices (hydromet), warning stations and water-level monitoring device (PEDRO stations). The weather stations is deployed all over the country and provides real time data such as rainfall, wind speed, water level and other weather parameters. This is used in aiding near real time disaster mitigation efforts such as providing an early warning systems to most of the disaster prone areas in the Philippines."
        }
      ]
    },
    {
      "id": "3-fixed-grs-control-room-360",
      "name": "FIXED grs-control-room-360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1792,
      "initialViewParameters": {
        "yaw": 0.02676343259219749,
        "pitch": 0.09120227686181615,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.5981895331859644,
          "pitch": 0.07126875002401079,
          "rotation": 0,
          "target": "4-360-server-room-view12"
        },
        {
          "yaw": 3.0459264695321213,
          "pitch": 0.2276600891224767,
          "rotation": 0,
          "target": "2-radome_view2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5296716435402082,
          "pitch": -0.05288110206516805,
          "title": "Satellite track visualization dashboard",
          "text": "This enables the ground receiving station to monitor the real time position of our satellites orbiting around the earth. It also provides information when will the next pass of our satellites will occur."
        },
        {
          "yaw": 0.18212949844213,
          "pitch": -0.02473802622923138,
          "title": "Diwata-2 Monitoring and Control Dashboard",
          "text": "The dashboard is a system that visualized the health status of our microsatellites (batteries, voltages, altitude etc.). It enables GRS staff to upload commands and download data that includes telemetries and the actual image captured by our satellites."
        },
        {
          "yaw": -0.13974058990404892,
          "pitch": 0.37477297302435275,
          "title": "GRS Workstations",
          "text": "These workstations are used to seamlessly manage workflows of the ground receiving station and also serves as the tools for staff other works related to programming, sever management and image processing."
        },
        {
          "yaw": -0.9090327373771103,
          "pitch": -0.09187002309936076,
          "title": "The Philippine Earth Data Resource and Observation (PEDRO) Center",
          "text": "<div>The DOST - Advanced Science and Technology Institute&nbsp;</div><div>currently operates the Philippine Earth Data Resource and&nbsp;</div><div>Observation (PEDRO) Center. The facility includes Ground Receiving&nbsp;</div><div>Stations (GRS) with satellite tracking antennas that receive, process&nbsp;</div><div>and distribute satellite images and other spaceborne data.&nbsp;</div><div>These can be used for various applications such as disaster risk&nbsp;</div><div>management, environmental monitoring and terrestrial and&nbsp;</div><div>maritime surveillance</div>"
        }
      ]
    },
    {
      "id": "4-360-server-room-view12",
      "name": "360-server-room-view1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1792,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7790578449686905,
          "pitch": 0.26656873093630473,
          "rotation": 0,
          "target": "3-fixed-grs-control-room-360"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3096843601084647,
          "pitch": -0.17708703889520905,
          "title": "GRS servers",
          "text": "The servers are responsible for storing big amount of spaceborne data and part of it are also use to manage links between the antenna and the data storage."
        }
      ]
    }
  ],
  "name": "The PEDRO Center in 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
