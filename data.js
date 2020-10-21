var APP_DATA = {
  "scenes": [
    {
      "id": "0-grs-monitoring-and-control-room",
      "name": "GRS Monitoring and Control Room",
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
        "yaw": -0.01893659895466726,
        "pitch": 0.10463971301928154,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.6417939039999077,
          "pitch": 0.17521631593629827,
          "rotation": 0,
          "target": "1-grs-server-room"
        },
        {
          "yaw": 3.0208668615842154,
          "pitch": 0.27172587411392257,
          "rotation": 0,
          "target": "2-radome-view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4845474843464146,
          "pitch": -0.05566656688215943,
          "title": "Satellite track visualization dashboard",
          "text": "This interface enables the ground receiving station to monitor the real time location of our satellites orbiting around the earth. It provides information on the next pass of satellites."
        },
        {
          "yaw": -0.1559249427833791,
          "pitch": 0.2579957337147132,
          "title": "GRS Workstations",
          "text": "These workstations facilitate satellite data related activities such as programming, sever management and image processing. This is also where we manage workflows of the ground receiving station."
        },
        {
          "yaw": -0.31283401510715336,
          "pitch": -0.4315934880735508,
          "title": "The PEDRO Center Overview",
          "text": "The DOST - Advanced Science and Technology Institute operates the Philippine Earth Data Resource and Observation Center or the PEDRO Center. This is a facility that includes Ground Receiving Stations with satellite tracking antennas that receive, process and distribute satellite images and other spaceborne data. These data can be used for various applications such as disaster management, environmental monitoring, terrestrial monitoring and maritime surveillance."
        },
        {
          "yaw": 0.1860899875457207,
          "pitch": -0.02609462200871704,
          "title": "Diwata-2 Monitoring and Control Dashboard",
          "text": "The dashboard is a system that visualizes the health status of our microsatellites. It enables us to upload commands to the satellite and download data such as captured image and telemetry"
        }
      ]
    },
    {
      "id": "1-grs-server-room",
      "name": "GRS Server Room",
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
        "yaw": -1.6590391973677505,
        "pitch": 0.1410231504260615,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 2.9473396892868875,
          "pitch": 0.3833628505089628,
          "rotation": 0,
          "target": "0-grs-monitoring-and-control-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.419128891411292,
          "pitch": -0.011141678327307503,
          "title": "GRS Servers",
          "text": "The servers are responsible for storing big amounts of spaceborne data."
        }
      ]
    },
    {
      "id": "2-radome-view-1",
      "name": "Radome view 1",
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
        "yaw": 0.3799447525495392,
        "pitch": 0.034921609524928954,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.7591837958297596,
          "pitch": 0.08270323887835929,
          "rotation": 0,
          "target": "4-radome-view-2"
        },
        {
          "yaw": -3.0517626576158,
          "pitch": 0.06601658103302555,
          "rotation": 0,
          "target": "0-grs-monitoring-and-control-room"
        },
        {
          "yaw": -0.06156029391656759,
          "pitch": 0.12324281285466299,
          "rotation": 0,
          "target": "3-satellite-tracking-antenna"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5861618273496187,
          "pitch": -0.11545762745947208,
          "title": "Model of weather stations and sensors",
          "text": "To complement the spaceborne data that we are acquiring, ground based data from weather stations and sensors are utilized. The weather stations deployed all over the country provides real time data such as rainfall, wind speed, water level and other weather parameters. This is used in aiding near real-time disaster mitigation efforts and provides early warnings during disasters"
        },
        {
          "yaw": 0.24849770289483786,
          "pitch": -0.367495839015751,
          "title": "ASTI Radome (GRS antenna enclosure)",
          "text": "The antenna enclosure also known as radome is made to protect the antenna from severe weather disturbances. It is made from polyhedron acrylic, customized and constructed in hexagonal patterns."
        }
      ]
    },
    {
      "id": "3-satellite-tracking-antenna",
      "name": "Satellite Tracking Antenna",
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
        "yaw": 0.10606435108770995,
        "pitch": -0.7076288772238932,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.662758937207661,
          "pitch": 0.17074545738036306,
          "rotation": 0,
          "target": "4-radome-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.011822639547105496,
          "pitch": -0.3495951772145851,
          "title": "Satellite Tracking Antenna",
          "text": "The earth-observation (EO) satellite tracking antenna located in the upper deck of DOST-ASTI is 5.3 meters in diameter. It can operate in several frequencies ranging from UHF, L, S, X and C bands. When the satellite passes over the country, it tilts from a certain degrees per second in X/Y axis and returns to its original stationary position after data transmission. Currently, this antenna serves as the direct reception for Diwata-2. It can also track other satellites that we have subscription to. For its control and monitoring system, it has satellite scheduler and TLE propagator that runs in a full linux based operating system. It has a fiber optic connection interface up to 1Gb/s speed and includes SMNP and XML modules. Other auxiliary antennas are also installed in Dumangas, Iloilo and the largest tracking antenna (7.3m) located in Davao."
        }
      ]
    },
    {
      "id": "4-radome-view-2",
      "name": "Radome view 2",
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
        "yaw": 0.7981395554321242,
        "pitch": -0.12969877622913017,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.4519518866394918,
          "pitch": 0.13634674284792858,
          "rotation": 0,
          "target": "3-satellite-tracking-antenna"
        },
        {
          "yaw": 1.2518849079937855,
          "pitch": 0.12103411919617812,
          "rotation": 0,
          "target": "2-radome-view-1"
        },
        {
          "yaw": 1.3981226109816411,
          "pitch": 0.03392994414328676,
          "rotation": 0,
          "target": "0-grs-monitoring-and-control-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.21260273943228114,
          "pitch": -0.40032178119253814,
          "title": "GRS antenna enclosure",
          "text": "The antenna enclosure also known as radome is made to protect the antenna from severe weather disturbances. It is made from polyhedron acrylic, customized and constructed in hexagonal patterns."
        }
      ]
    }
  ],
  "name": "The PEDRO Center in 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
