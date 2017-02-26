var data;
var pie = new d3pie("pieChart", {
    "header": {
        "title": {
            "text": "Choose a Color",
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "text": "Select a color corresponding to your mood",
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
        "sortOrder": "random",
        "content": [
                    {
                        "label": "Red",
                        "value": 14.2857142857,
                        "color": "#FF0000"
                    },
                    {
                        "label": "Yellow",
                        "value": 14.2857142857,
                        "color": "#FFFF00"
                    },
                    {
                        "label": "Green",
                        "value": 14.2857142857,
                        "color": "#00ff0b"
                    },
                    {
                        "label": "Blue",
                        "value": 14.2857142857,
                        "color": "#0000FF"
                    },
                    {
                        "label": "White",
                        "value": 14.2857142857,
                        "color": "#ffffff"
                    },
                    {
                        "label": "Black",
                        "value": 14.2857142857,
                        "color": "#000000"
                    },
                    {
                        "label": "Grey",
                        "value": 14.2857142857,
                        "color": "#808080"
                    }
                ]
    },
    "labels": {
        "outer": {
            "pieDistance": 10
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 3
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
    "effects": {
                "load": {
                    "speed": 350
                },
                "pullOutSegmentOnClick": {
                    "effect": "elastic",
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
        onClickSegment: function(info) {
        data = info.data;
        }
    }
});
