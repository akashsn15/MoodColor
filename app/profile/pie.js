(function () {
    'use strict';

    angular
        .injector(['app'])
        .invoke(function (UserService) {
            UserService.GetCurrent().then(function (user) {
                var redCount, yellowCount, greenCount, blueCount, whiteCount, blackCount, greyCount;
                var redMood, yellowMood, greenMood, blueMood, whiteMood, blackMood, greyMood;
                redCount = 0; redMood = "";
                yellowCount = 0; yellowMood = "";
                greenCount = 0; greenMood = "";
                blueCount = 0; blueMood = "";
                whiteCount = 0; whiteMood = "";
                blackCount = 0; blackMood = "";
                greyCount = 0; greyMood = "";

                if(user.week2)
                {
                    for(var i = 0; i<user.week2.length; i++)
                    {
                        var col = user.week2[i].color[0];
                        var mod = user.week2[i].mood[0];
                        if(col == "Red")
                        {
                            redCount++;
                            redMood += mod + ", ";

                        }
                        else if(col == "Yellow")
                        {
                            yellowCount++;
                            yellowMood += mod + ", ";
                        }
                        else if(col == "Green")
                        {
                            greenCount++;
                            greenMood += mod + ", ";
                        }
                        else if(col == "Blue")
                        {
                            blueCount++;
                            blueMood += mod + ", ";
                        }
                        else if(col == "White")
                        {
                            whiteCount++;
                            whiteMood += mod + ", ";
                        }
                        else if(col == "Black")
                        {
                            blackCount++;
                            blackMood += mod + ", ";
                        }
                        else if(col == "Grey")
                        {
                            greyCount++;
                            greyMood += mod + ", ";
                        }
                    }
                    var pie2 = new d3pie("pieChart", {
                        "header": {
                            "title": {
                                "text": "Week 2 Mood Trends",
                                "color": "#000000",
                                "fontSize": 24,
                                "font": "open sans"
                            },
                            "subtitle": {
                                "text": "Hover to get the words associated with the color segments",
                                "color": "#999999",
                                "fontSize": 12,
                                "font": "open sans"
                            },
                            "titleSubtitlePadding": 9
                        },
                        "footer": {
                            "color": "#999999",
                            "fontSize": 10,
                            "font": "open sans",
                            "location": "bottom-left"
                        },
                        "size": {
                            "canvasWidth": 590,
                            "pieOuterRadius": "100%"
                        },
                        "data": {
                            "sortOrder": "value-desc",
                            "content": [
                                        {
                                            "label": "Red",
                                            "caption" : redMood,
                                            "value": redCount ,
                                            "color": "#FF0000"
                                        },
                                        {
                                            "label": "Yellow",
                                            "caption" : yellowMood,
                                            "value": yellowCount,
                                            "color": "#FFFF00"
                                        },
                                        {
                                            "label": "Green",
                                            "caption" : greenMood,
                                            "value": greenCount,
                                            "color": "#00ff0b"
                                        },
                                        {
                                            "label": "Blue",
                                            "caption" : blueMood,
                                            "value": blueCount,
                                            "color": "#0000FF"
                                        },
                                        {
                                            "label": "White",
                                            "caption" : whiteMood,
                                            "value": whiteCount,
                                            "color": "#ffffff"
                                        },
                                        {
                                            "label": "Black",
                                            "caption" : blackMood,
                                            "value": blackCount,
                                            "color": "#000000"
                                        },
                                        {
                                            "label": "Grey",
                                            "caption" : greyMood,
                                            "value": greyCount,
                                            "color": "#808080"
                                        }
                                    ]
                        },
                        "labels": {
                            "outer": {
                                "pieDistance": 10
                            },
                            "mainLabel": {
                                "fontSize": 11
                            },
                            "percentage": {
                                "color": "#ffffff",
                                "decimalPlaces": 0
                            },
                            "value": {
                                "color": "#adadad",
                                "fontSize": 11
                            },
                            "lines": {
                                "enabled": true
                            },
                            "truncation": {
                                "enabled": true
                            }
                        },
                        "tooltips": {
                            "enabled": true,
                            "type": "caption",
                            "styles": {
                                "fadeInSpeed": 500
                            }
                        },
                        "effects": {
                                    "load": {
                                        "speed": 350
                                    },
                                    "pullOutSegmentOnClick": {
                                        "effect": "none",
                                        "speed": 400,
                                        "size": 8
                                    }
                                },
                        "misc": {
                            "gradient": {
                                "enabled": true,
                                "percentage": 100
                            }
                        },
                        "callbacks": {
                        }
                    });
                }
                else{
                document.getElementById("pieChart").innerHTML = "No Data Entered Yet";
                };
            });            
        });
})();

