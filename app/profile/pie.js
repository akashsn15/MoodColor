var pie2 = new d3pie("pieChart", {
    "header": {
        "title": {
            "text": "Week 2 Mood Trends",
            "color": "#000000",
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "text": "Hover to get the words associated with the color segemnts",
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
                        "mood" : redMood,
                        "value": redCount ,
                        "color": "#FF0000"
                    },
                    {
                        "label": "Yellow",
                        "mood" : yellowMood,
                        "value": yellowCount,
                        "color": "#FFFF00"
                    },
                    {
                        "label": "Green",
                        "mood" : greenMood,
                        "value": greenCount,
                        "color": "#00ff0b"
                    },
                    {
                        "label": "Blue",
                        "mood" : blueMood,
                        "value": blueCount,
                        "color": "#0000FF"
                    },
                    {
                        "label": "White",
                        "mood" : whiteMood,
                        "value": whiteCount,
                        "color": "#ffffff"
                    },
                    {
                        "label": "Black",
                        "mood" : blackMood,
                        "value": blackCount,
                        "color": "#000000"
                    },
                    {
                        "label": "Grey",
                        "mood" : greenMood,
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
        "type": "placeholder",
        "string": "{label}: {mood}, {percentage}%",
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
