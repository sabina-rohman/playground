import React, { Component } from 'react';
import Box from './Box'

const NUM_BOXES = 32
const ALL_COLORS = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
                    "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
                    "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
                    "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
                    "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
                    "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
                    "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
                    "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
                    "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
                    "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
                    "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
                    "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
                    "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
                    "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
                    "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
                    "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
                    "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
                    "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
                    "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
                    "Yellow","YellowGreen"]

class ColorBoxes extends Component {
    constructor(props) {
        super(props)
        this.state = {colors: this.generateRandomColors()}

        setInterval(() => {
            this.setState({colors: this.generateRandomColors()})
        },1000);

    }

    // this methos returns an array of 32 random colors
    // eg:- ['yellow', 'red',...]
    generateRandomColors(){
        return Array(NUM_BOXES)
                        .fill()
                        .map(x => Math.floor(Math.random() * ALL_COLORS.length))
                        .map(x => ALL_COLORS[x])
    };

    render(){
        const boxes = this.state.colors.map((color, index) => (
            <Box 
                key={index}
                color={color}
            />
        ));

        return(
        <div>
            <ul>
                {boxes}
            </ul>
        </div>
        )
    }
}


  
export default ColorBoxes;